import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsService } from './products.service';
import { ProductsController } from "./productsController";
import { TestController } from './test.controller';

@Module({
  imports: [],
  controllers: [AppController, TestController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
