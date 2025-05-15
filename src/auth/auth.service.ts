import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AdminDocument } from "../admin/schemas/admin.schema";
import { LoginDto } from "./dto/login.dto";
import { AdminService } from "../admin/admin.service";
import * as bcrypt from "bcrypt";
import { Response } from "express";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly adminService: AdminService
  ) {}

  async generateTokens(admin: AdminDocument) {
    const payload = {
      id: admin._id,
      is_active: admin.is_active,
      is_creator: admin.is_creator,
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

  async loginAdmin(loginDto: LoginDto, res: Response) {
    const admin = await this.adminService.findByEmail(loginDto.email);
    if (!admin) {
      throw new UnauthorizedException("Email yoki Parol noto'g'ri");
    }
    const isMatch = await bcrypt.compare(
      loginDto.password,
      admin.hashed_password
    );
    if (!isMatch) {
      throw new UnauthorizedException("Email yoki Parol noto'g'ri");
    }
    const { accessToken, refreshToken } = await this.generateTokens(admin);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: Number(process.env.COOKIE_TIME),
    });
    const hashed_refresh_token = await bcrypt.hash(refreshToken, 7)
    admin.hashed_refresh_token = hashed_refresh_token
    await admin.save()
    return{
        message:"Xush kelibsiz",
        adminId:admin._id,
        accessToken
    }
  }

  async logOut(refreshToken: string, res: Response) {
    const adminData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });

    if (!adminData) {
      throw new ForbiddenException("Admin not verified");
    }

    const hashed_refresh_token = null;
    await this.adminService.updateRefreshToken(
      adminData._id,
      hashed_refresh_token!
    );

    res.clearCookie("refresh_token");
    const response = {
      message: "Admin logged out successfully",
    };

    return response;
  }
}
