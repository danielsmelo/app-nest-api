import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.model";
import { ProductsService } from "./products.service";


@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService) {

    }

    @Get()
    obterTodos(): Product[] {
        return this.productService.getAll();
    }

    @Get(':id')
    oneProduct(@Param() request): Product {
        return this.productService.getOneById(request.id);
    }

    @Post()
    criar(@Body() product: Product) {
        this.productService.create(product);
    }

    @Put()
    alterar(@Body() product): Product {
        return this.productService.update(product);
    }

    @Delete(':id')
    apagar(@Param() request): void {
        this.productService.delete(request.id);
    }
}
