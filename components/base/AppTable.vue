<template>
  <table :class="$style.dataTable">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
defineProps<{ headers: string[]; rows: string[][] }>()
</script>

<style module lang="scss">
.dataTable {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.dataTable th,
.dataTable td {
  text-align: left;
  padding: 6px 8px;
  border-bottom: 1px solid #e4e7eb;
}
</style>
