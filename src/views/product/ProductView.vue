<template>
  <div style="margin-left: 1rem">
    <h1>Produtos</h1>
    <TableFilter @filter-updated="handleFilterUpdate"></TableFilter>
    <Table :tableHeaders="headers" :tableData="data2"></Table>
  </div>
</template>

<script setup lang="ts">
import Table from '@/components/Table.vue'
import TableFilter from '@/components/TableFilter.vue'
import { onMounted, ref, watchEffect } from 'vue'

import Product from './Product';

const product: Product = { //TEST
  code: 3056,
  name: "Mesa",
  category: "Móveis",
  price: 250.00,
  minimumStock: 3
};

const headers = ['Código', 'Nome', 'Categoria', 'Preço', 'Qtd. em estoque']
const data = ref<Array<Product>>([product])
const data2 = ref<Array<Product>>([]) // TEST

onMounted(() => loadListProduct(""))

async function loadListProduct(updatedFilter: string) { //TEST
  if (updatedFilter != "")
    data2.value = data.value.filter(v => v.name == updatedFilter)
  else 
    data2.value = data.value
}

const handleFilterUpdate = (updatedFilter) => {
  loadListProduct(updatedFilter);
};

</script>
