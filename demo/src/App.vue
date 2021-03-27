<template>
  <div>Twindy Demo</div>
  <div class="prose">
    <h1>Hello</h1>
    <button class="tw-button">Button</button>
    <div>
      <Sample :code="sample1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sample from "./components/Sample.vue"

const sample1 = `\
<style lang="css">
  button {
    color: red;
  }
</syle>

<button class="tw-button">
  Button
</button>
`
</script>
