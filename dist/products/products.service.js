"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = __importDefault(require("axios"));
let ProductsService = class ProductsService {
    configService;
    constructor(configService) {
        this.configService = configService;
    }
    async getProducts() {
        try {
            const url = this.configService.get('DUMMY_API_URL');
            const response = await axios_1.default.get(url);
            const products = response.data.products;
            const transformed = products.map(product => ({
                id: product.id,
                title: product.title,
                price: product.price,
                stock: product.stock,
                brand: product.brand,
                category: product.category,
                finalPrice: parseFloat((product.price * 1.16).toFixed(2)),
                isLowStock: product.stock < 10
            }));
            const sorted = transformed.sort((a, b) => b.finalPrice - a.finalPrice);
            return sorted;
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener productos de la API', 502);
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ProductsService);
//# sourceMappingURL=products.service.js.map