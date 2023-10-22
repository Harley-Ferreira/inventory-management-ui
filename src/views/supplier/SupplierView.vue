<template>
  <div style="margin-left: 1rem">
    <h1>Fornecedores</h1>
    <TableFilter></TableFilter>
    <Table :tableHeaders="headers" :tableData="data" />
  </div>
</template>

<script setup lang="ts">
import Table from '@/components/Table.vue'
import TableFilter from '@/components/TableFilter.vue'

const headers = ['Código', 'Nome', 'Contato', 'Endereço']
const data = [
  [3056, 'Casas Raia', '3652-5896', 'São Paulo - SP'],
  [3057, 'Casas São João ', '5652-5896', 'Viçosa - MG'],
  [3058, 'Magazil', '3665-5896', 'Campinas - SP']
]
</script>

