<template>
  <section :class="$style.card">
    <header :class="$style.cardHeader">
      <div>
        <h2 :class="$style.cardTitle">{{ title }}</h2>
        <p v-if="subtitle" :class="$style.cardSubtitle">{{ subtitle }}</p>
      </div>
      <slot name="headerRight" />
    </header>
    <div :class="$style.cardBody">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string; subtitle?: string }>()
</script>

<style module lang="scss">
.card {
  border: 1px solid #d9e2ec;
  border-radius: 12px;
  padding: 18px;
  background: #fff;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
}

.cardHeader {
  display: flex;
  align-items: baseline;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 16px;
}

.cardTitle {
  margin: 0;
  font-size: 18px;
}

.cardSubtitle {
  color: #52616b;
  font-size: 13px;
}

.cardBody {
  display: block;
}
</style>
