<template>
  <div>Twindy Demo</div>
  <div class="prose">
    <h1>Hello</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import HelloWorld from "./components/HelloWorld.vue"

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
})
</script>
