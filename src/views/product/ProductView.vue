<template>
  <div style="margin-left: 1rem">
    <h1>Produtos</h1>
    <TableFilter @filter-updated="handleFilterUpdate"></TableFilter>
    <Table :tableHeaders="headers" :tableData="productPage" @update="update" @romove="romove"></Table>
  </div>
</template>

<script setup lang="ts">
import Table from '@/components/Table.vue'
import TableFilter from '@/components/TableFilter.vue'
import { onMounted, ref } from 'vue'
import ProductService from '@/services/ProductService'
import type Product from './Product'
import router from '@/router'

const headers = ['ID', 'Código', 'Nome', 'Categoria', 'Preço', 'Qtd. em estoque']
const productPage = ref<Array<Product>>()
const filterProduct = ref<string>('')

onMounted(() => loadListProduct())

async function loadListProduct() {
  productPage.value = await ProductService.getPage(0, 10, filterProduct.value)
}

function update(id: number) {
  router.push(`/product/edit/${id}`)
}

async function romove(id: number) {
  await ProductService.delete(id)
  loadListProduct();
}


const handleFilterUpdate = (filter: string) => {
  filterProduct.value = filter
  loadListProduct()
}
</script>
