<template>
  <div :class="$style.page">
    <div :class="$style.statusPanel">No Data</div>
  </div>
</template>

<style module lang="scss">
.page {
  max-width: 1200px;
  margin: 32px auto;
  padding: 0 20px 40px;
  font-family: "Segoe UI", Tahoma, sans-serif;
  color: #1f2933;
}

.statusPanel {
  padding: 20px;
  border: 1px solid #d9e2ec;
  border-radius: 10px;
  background: #f8fafc;
}
</style>
