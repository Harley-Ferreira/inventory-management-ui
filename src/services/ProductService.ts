import api from '@/http'
import type Product from '@/views/product/Product'

class ProductService implements IService<Product> {
  save(product: Product): Promise<Product> {
    try {
      return api.post('/product', product)
    } catch (error) {
      console.log('Error')
    }
    throw new Error('Method not implemented.')
  }

  update(id: number, product: Product): Promise<Product> {
    try {
      return api.put(`/product/${id}`, product)
    } catch (error) {
      console.log('Error')
    }
    throw new Error('Method not implemented.')
  }

  async getById(id: number): Promise<Product> {
    try {
      const response = await api.get(`/product/${id}`)
      if (response.status === 200) {
        return response.data
      } 
    } catch (error) {
      console.log('Error')
    }
    throw new Error('Method not implemented.')
  }

  async getPage(pageNumber: number = 0, pageSize: number = 20, filter: string = ""): Promise<Product[]> {
    try {
      const response = await api.get(
        `/product?page=${pageNumber}&size=${pageSize}&filter=${filter}`
      )
      if (response.status === 200) {
        return response.data.content
      } else {
        console.error('Erro na solicitação')
      }
    } catch (error) {
      console.log('Error')
    }
    throw new Error('Method not implemented.')
  }

  async delete(id: number): Promise<void> {
    try {
      await api.delete(`/product/${id}`)
    } catch {
      console.log('Erro ao fazer solitação delete')
    }
  }
}

export default new ProductService()
