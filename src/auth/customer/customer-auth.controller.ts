import { Body, Controller, HttpCode, Post, Res } from "@nestjs/common";
import { CustomerAuthService} from "./customer-auth.service";
import { LoginDto } from "../dto/login.dto";
import { Response } from "express";
import { CookieGetter } from "../../common/decorators/cookie-getter.decorator";

@Controller("auth")
export class CustomerAuthController {
  constructor(private readonly customerAuthService: CustomerAuthService) {}

  @Post("login-customer")
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.customerAuthService.login(loginDto, res);
  }

  @HttpCode(200)
  @Post("logout-customer")
  signOut(
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.customerAuthService.logOut(refreshToken, res);
  }
}
