<template>
  <div class="list">
    <div>list vue3 compatible, hiding attrs with null</div>
    <div class="sample">
      <template v-for="{ title, active } in values">
        <a href="#" :active="active || null">{{ title }}</a>
      </template>
    </div>
    <div>list vue2 compatible, hiding attrs with false</div>
    <div class="sample">
      <template v-for="{ title, active } in values">
        <a href="#" :active="active">{{ title }}</a>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const values = [
  { title: "aaa", active: true },
  { title: "bbb", active: false },
  { title: "ccc" },
]
</script>

<style lang="styl" scoped>
@require "twindy"

a
  display block

  &[active]
    font-weight semi
    color -green-800
</style>
