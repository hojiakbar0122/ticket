import { Body, Controller, HttpCode, Post, Res } from "@nestjs/common";
import { AdminAuthService} from "./admin-auth.service";
import { LoginDto } from "../dto/login.dto";
import { Response } from "express";
import { CookieGetter } from "../../common/decorators/cookie-getter.decorator";

@Controller("auth")
export class AdminAuthController {
  constructor(private readonly adminAuthService: AdminAuthService) {}

  @Post("login-admin")
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response
  ) {
    await this.adminAuthService.loginAdmin(loginDto, res);
  }

  @HttpCode(200)
  @Post("logout-admin")
  signOut(
    @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.adminAuthService.logOut(refreshToken, res);
  }
}
