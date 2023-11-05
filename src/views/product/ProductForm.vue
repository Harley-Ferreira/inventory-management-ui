<template>
  <div style="margin-left: 1rem">
    <h1>Produtos</h1>
    <div class="columns">
      <div class="column is-half">
        <form @submit.prevent="submitForm">
          <input-card label="Nome:">
            <input v-model="product.name" type="text" class="input" required/>
          </input-card>

          <input-card label="Descrição:">
            <input v-model="product.description" class="input" />
          </input-card>

          <input-card label="Tipo:">
            <div class="select">
              <select v-model="product.category">
                <option value="Movéis">Movéis</option>
              </select>
            </div>
          </input-card>

          <input-card label="Código:">
            <input v-model="product.code" type="number" class="input" required/>
          </input-card>

          <input-card label="Valor:">
            <input v-model="product.price" type="number" class="input" required/>
          </input-card>

          <input-card label="Quantidade em Estoque:">
            <input v-model="product.minimumStock" type="number" class="input" required/>
          </input-card>

          <div class="buttons">
            <button @click="back" class="button is-dark">Voltar</button>
            <button type="submit" class="button is-primary">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import InputCard from '@/components/InputCard.vue'
import ProductService from '@/services/ProductService'
import type Product from './Product'
import router from '@/router'

const product = ref<Product>({
  id: null,
  code: null,
  name: '',
  description: '',
  category: '',
  price: null,
  minimumStock: null
})

onMounted(async () => {
  const id = router.currentRoute.value.params.id
  if (id != null && id != undefined) {
    product.value = await ProductService.getById(Number(id));
  }
})

async function submitForm() {
  if (product.value != null && product.value.id != null) {
    await ProductService.update(product.value.id, product.value)
  } else {
    await ProductService.save(product.value)
  }
  back();
}

function back() {
  router.push({name: 'product-list'})
}
</script>

<style scoped></style>
