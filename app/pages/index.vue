<template>
  <PageLayout>
    <AppState :allowed="false" :pending="false" />
  </PageLayout>
</template>

<script setup lang="ts">
import AppState from "../../components/base/AppState.vue"
import PageLayout from "../../components/layouts/PageLayout.vue"
</script>
