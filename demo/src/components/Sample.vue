<template>
  Sample
  <pre>{{ code }}</pre>
  Result
  <div v-html="code"></div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue"
export default defineComponent({
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    return {}
  },
})
</script>
