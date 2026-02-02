<template>
  <div :class="$style.wrapper">
    <template v-if="smiles && !hasError">
      <img
        :class="$style.image"
        :src="imageUrl"
        :alt="altText"
        @error="onError"
      />
    </template>
    <div v-else :class="$style.placeholder">
      <span :class="$style.placeholderIcon">◎</span>
      <span>{{ placeholderText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useRuntimeConfig } from "nuxt/app"

type Props = {
  smiles?: string
  name?: string
  alt?: string
}

const props = withDefaults(defineProps<Props>(), {
  smiles: "",
  name: "",
  alt: "",
})

const hasError = ref(false)

const config = useRuntimeConfig()
const baseUrl = computed(
  () => config.public.episuiteBaseUrl || "https://episuite.dev"
)

const imageUrl = computed(() => {
  const encoded = encodeURIComponent(props.smiles)
  return `${baseUrl.value}/api/draw-chemical?smiles=${encoded}`
})

const altText = computed(() => {
  if (props.alt) return props.alt
  if (props.name) return `Chemical structure of ${props.name}`
  return "Chemical structure"
})

const placeholderText = computed(() => {
  if (!props.smiles) return "Structure image not available"
  return "Structure image failed to load"
})

const onError = () => {
  hasError.value = true
}
</script>

<style module lang="scss">
.wrapper {
  border: 1px dashed #cbd2d9;
  border-radius: 10px;
  padding: 24px;
  text-align: center;
  color: #7b8794;
  margin-bottom: 16px;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  height: 200px;
  max-width: 75%;
  object-fit: contain;
}

.placeholder {
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.placeholderIcon {
  font-size: 28px;
  color: #9aa5b1;
}
</style>
