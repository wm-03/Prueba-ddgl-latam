import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';                                                                                                                                        
import axios from 'axios';

@Injectable()
export class ProductsService {

    constructor(private readonly configService: ConfigService) {}

    async getProducts() {
        try {
        const url = this.configService.get<string>('DUMMY_API_URL')!
        const response = await axios.get(url)
        const products = response.data.products

        const transformed = products.map(product => ({
            id: product.id,
            title: product.title,
            price: product.price,
            stock: product.stock,
            brand: product.brand,
            category: product.category,
            finalPrice: parseFloat((product.price * 1.16).toFixed(2)),
            isLowStock: product.stock < 10
        }))
        const sorted = transformed.sort((a, b) => b.finalPrice - a.finalPrice)
        return sorted
        } catch (error) {
            throw new HttpException('Error al obtener productos de la API', 502)
        }

    }
}