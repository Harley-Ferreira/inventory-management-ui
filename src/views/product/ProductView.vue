<template>
  <div style="margin-left: 1rem">
    <h1>Produtos</h1>
    <TableFilter @filter-updated="handleFilterUpdate"></TableFilter>
    <Table :tableHeaders="headers" :tableData="productPage"></Table>
  </div>
</template>

<script setup lang="ts">
import Table from '@/components/Table.vue'
import TableFilter from '@/components/TableFilter.vue'
import { onMounted, ref } from 'vue'
import ProductService from '@/services/ProductService'
import type Product from './Product'

const headers = ['Código', 'Nome', 'Categoria', 'Preço', 'Qtd. em estoque']
const productPage = ref<Array<Product>>()
const filterProduct = ref<string>('')

onMounted(() => loadListProduct())

async function loadListProduct() {
  productPage.value = await ProductService.getPage(0, 10, filterProduct.value)
}

const handleFilterUpdate = (filter: string) => {
  filterProduct.value = filter
  loadListProduct()
}
</script>
