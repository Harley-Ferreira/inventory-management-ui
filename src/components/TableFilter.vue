<template>
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-dark">Novo</button>
    </div>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" placeholder="Filtro" v-model="filter" />
      <span class="icon is-small is-left">
        <i class="fas fa-search search"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { ref, defineEmits } from 'vue';

const filter = ref("");
const emit = defineEmits(['filter-updated']);

watch(filter, () => {
  emit('filter-updated', filter.value);
});
</script>
