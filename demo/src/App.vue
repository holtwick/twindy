<template>
  <div class="header">
    <select class="dropdown">
      <option>Prose</option>
    </select>
  </div>
  <div class="indent">
    <prose />
  </div>
</template>

<script setup lang="ts">
import prose from "./components/prose.vue"
</script>
