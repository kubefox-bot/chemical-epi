<template>
  <PageLayout>
    <AppState :pending="false" :show-no-data="true" />
  </PageLayout>
</template>

<script setup lang="ts">
import AppState from "../../components/base/AppState.vue"
import PageLayout from "../../components/layouts/PageLayout.vue"
</script>
