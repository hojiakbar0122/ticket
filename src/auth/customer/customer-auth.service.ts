import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "../dto/login.dto";
import * as bcrypt from "bcrypt";
import { Response } from "express";
import { CustomerDocument } from "../../customer/schemas/customer.schema";
import { CustomerService } from "../../customer/customer.service";

@Injectable()
export class CustomerAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly customerService: CustomerService
  ) {}

  async generateTokens(customer: CustomerDocument) {
    const payload = {
      id: customer._id,
      email: customer.email,
      gender: customer.gender,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }

  async login(loginDto: LoginDto, res: Response) {
    const customer = await this.customerService.findByEmail(loginDto.email);
    if (!customer) {
      throw new UnauthorizedException("Email yoki Parol noto'g'ri");
    }
    const isMatch = await bcrypt.compare(
      loginDto.password,
      customer.hashed_password
    );
    if (!isMatch) {
      throw new UnauthorizedException("Email yoki Parol noto'g'ri");
    }
    const { accessToken, refreshToken } = await this.generateTokens(customer);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: Number(process.env.COOKIE_TIME),
    });
    const hashed_refresh_token = await bcrypt.hash(refreshToken, 7);
    customer.hashed_refresh_token = hashed_refresh_token;
    await customer.save();
    return {
      message: "Xush kelibsiz",
      adminId: customer._id,
      accessToken,
    };
  }

  async logOut(refreshToken: string, res: Response) {
    const customerData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });

    if (!customerData) {
      throw new ForbiddenException("Customer not verified");
    }

    const hashed_refresh_token = null;
    await this.customerService.updateRefreshToken(
      customerData._id,
      hashed_refresh_token!
    );

    res.clearCookie("refresh_token");
    const response = {
      message: "Customer logged out successfully",
    };

    return response;
  }
}
