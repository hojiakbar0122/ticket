import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser"
import { ValidationPipe } from '@nestjs/common';

async function start() {
  try {
    const PORT = process.env.PORT || 3001;
    const app = await NestFactory.create(AppModule);
    app.use(cookieParser())
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix("api")

    // app.enableCors({
    //   origin:(origin, callback)=>{
    //     const allowedOrigins = [
    //       "http://localhost:8000",
    //       "http://localhost:3000",
    //       "https://maishiy-xizmatlar.uz",
    //       "https://api.maishiy-xizmatlar.uz",
    //       "https://maishiy-xizmatlar.vercel.app",
    //     ]
    //     if(!origin || allowedOrigins.includes(origin)){
    //       callback(null, true)
    //     }else{
    //       callback(new BadRequestException("Not allowed by CORS"))
    //     }
    //   },
    //   methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    //   credentials:true  //cookie va header
    // })
    // const config = new DocumentBuilder()
    //   .setTitle("Maishiy Xizmatlar project")
    //   .setDescription("NestJs Api")
    //   .setVersion("1.0")
    //   .addTag("Swagger, Validation, Send email, Bot, Tokens, ")
    //   .addBearerAuth()
    //   .build()

    //   const document = SwaggerModule.createDocument(app, config)
    //   SwaggerModule.setup("docs", app, document)
    await app.listen(PORT, () => {
      console.log(`Server started at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
