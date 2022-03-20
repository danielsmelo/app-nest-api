import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    products: Product[] = [
        new Product("LIV01", "Livro TDD e BDD na prática", 29.90),
        new Product("LIV02", "Livro Iniciando com Flutter", 39.90),
        new Product("LIV03", "Inteligência artificial como serviço", 29.90),
    ];

    getAll(): Product[] {
        return this.products;
    }

    getOneById(id: number): Product {
        return this.products[id];
    }

    create(product: Product) {
        this.products.push(product)
    }

    update(product: Product): Product {
        return product;
    }

    delete(id: number): Product[] {
        this.products.splice(id, 1);
        return this.products;
    }
}

