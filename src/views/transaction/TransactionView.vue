<template>
  <div style="margin-left: 1rem">
    <h1>Transações</h1>
    <TableFilter></TableFilter>
    <Table :tableHeaders="headers" :tableData="data" />
  </div>
</template>

<script setup lang="ts">
import Table from '@/components/Table.vue'
import TableFilter from '@/components/TableFilter.vue'

const headers = ['Código', 'Produto', 'Quantidade', 'Tipo', 'Data', 'Fornecedor']
const data = [
  [3056, 'Mesa', 25, 'VENDA', '22/10/2023', 'Magazil'],
  [3057, 'Cadeira', 14, 'COMPRA', '22/10/2023', 'Magazil'],
  [3058, 'Armário', 21, 'COMPRA', '22/10/2023', 'Casas São João']
]
</script>
