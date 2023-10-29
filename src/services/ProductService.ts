import api from "@/http";
import type Product from "@/views/product/Product";

class ProductService implements IService<Product> {
    save(product: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    update(id: number, product: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    getById(id: number): Promise<null> {
        throw new Error("Method not implemented.");
    }

    async getPage(pageNumber: number = 0, pageSize: number = 20, filter: string): Promise<Product[]> {
        try {
            const response = await api.get(`/product?page=${pageNumber}&size=${pageSize}&filter=${filter}`);
            if (response.status === 200) {
                return response.data.content;
            } else {
                console.error('Erro na solicitação');
            }
        } catch (error) {
            console.log('Erro nao solicitaçao get', error);
        }
        throw new Error("Method not implemented.");
    }
}

export default new ProductService();