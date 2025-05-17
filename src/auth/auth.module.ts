import { Module } from "@nestjs/common";
import { AdminAuthService} from "./admin/admin-auth.service";
import { AdminAuthController} from "./admin/admin-auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { AdminModule } from "../admin/admin.module";
import { CustomerModule } from "../customer/customer.module";
import { CustomerAuthController } from "./customer/customer-auth.controller";
import { CustomerAuthService } from "./customer/customer-auth.service";

@Module({
  imports: [JwtModule.register({ global: true }), AdminModule, CustomerModule],
  controllers: [AdminAuthController, CustomerAuthController],
  providers: [AdminAuthService, CustomerAuthService],
})
export class AuthModule {}
