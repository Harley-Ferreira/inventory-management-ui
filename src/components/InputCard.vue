<template>
  <div class="field">
    <label class="label">{{ props.label }}</label>
    <div class="control">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['label'])
</script>
