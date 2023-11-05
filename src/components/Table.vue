<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          <th v-for="(header, index) in tableHeaders" :key="index">{{ header }}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          <td>
            <p class="buttons">
              <span class="icon is-small" style="margin-right: 0.5rem">
                <i class="fas fa-edit" @click="update(row.id)"></i>
              </span>
              <span class="icon is-small">
                <i class="fas fa-times" @click="romove(row.id)"></i>
              </span>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  tableHeaders: Array, // Array de cabeçalhos da tabela
  tableData: Array // Array de dados da tabela
})

const emit = defineEmits<{
  update: [id: number]
  romove: [id: number]
}>()

function update(id: number) {
  emit('update', id)
}

function romove(id: number) {
  emit('romove', id)
}
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
</style>