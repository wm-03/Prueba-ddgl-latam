import { ConfigService } from '@nestjs/config';
export declare class ProductsService {
    private readonly configService;
    constructor(configService: ConfigService);
    getProducts(): Promise<any>;
}
