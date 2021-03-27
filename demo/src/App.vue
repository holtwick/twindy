<template>
  <div class="header">
    <select class="dropdown" v-model="componentName">
      <option v-for="name in names" :key="name">{{ name }}</option>
    </select>
  </div>
  <div class="indent">
    <component :is="components[componentName]" />
  </div>
</template>

<script lang="ts">
import { useSessionStorage } from "@vueuse/core"
import { defineAsyncComponent, defineComponent, reactive, ref } from "vue"

export default defineComponent({
  setup() {
    const componentName = useSessionStorage("componentName", "")
    const component = ref(null)

    // @ts-ignore
    let modules = import.meta.glob("./components/*.vue")

    let components: any = {}

    let names = Object.entries(modules).map(([path, component]) => {
      const name = path.split("/").pop()?.slice(0, -4)
      // @ts-ignore
      components[name] = defineAsyncComponent(component)
      return name
    })

    names.sort()

    // console.log(components)
    // const prose = defineAsyncComponent(() => import("./components/prose.vue"))
    return {
      names,
      components,
      componentName,
    }
  },
})
</script>
