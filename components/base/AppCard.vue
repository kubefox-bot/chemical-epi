<template>
  <section class="card">
    <header class="card__header">
      <div>
        <h2 class="card__title">{{ title }}</h2>
        <p v-if="subtitle" class="card__subtitle">{{ subtitle }}</p>
      </div>
      <slot name="headerRight" />
    </header>
    <div class="card__body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string; subtitle?: string }>()
</script>
