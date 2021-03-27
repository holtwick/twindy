<template>
  <div class="form">
    <div>rex</div>
    <div class="sample">
      <div class="bar bar-rex"></div>
      <div class="bar bar-px"></div>
      <div class="bar bar-rem"></div>
      <div class="bar bar-em"></div>
    </div>
  </div>
</template>

<style lang="styl" scoped>
@import "twindy";

.sample
  space-y 8
  position relative

.bar
  background -red-500
  height 1rem

  &:after
    content "?"
    absolute: right 16

.bar-rex
  &:after
    content "160rex"
  width 160

.bar-px
  &:after
    content "160px"
  width 160px

.bar-rem
  &:after
    content "10rem"
  width 10rem

.bar-em
  &:after
    content "10em"
  width 10em
</style>

<script setup lang="ts"></script>
