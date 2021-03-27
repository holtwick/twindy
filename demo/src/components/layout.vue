<template>
  <div class="layout">
    <div>stack-x with growing item consuming all left space</div>
    <div class="sample">
      <div class="stack-x debug">
        <div>stack-x 1</div>
        <div>stack-x 2</div>
        <div class="grow">stack-x 3</div>
      </div>
    </div>

    <div>stack-x with space to align last item right</div>
    <div class="sample">
      <div class="stack-x debug">
        <div>stack-x 1</div>
        <div>stack-x 2</div>
        <div class="space"></div>
        <div>stack-x 3</div>
      </div>
    </div>
    <div>stack-x with space between items</div>
    <div class="sample">
      <div class="stack-x space-x debug">
        <div>stack-x 1</div>
        <div>stack-x 2</div>
        <div>stack-x 3</div>
      </div>
    </div>
  </div>
</template>

<style lang="styl">
@import "twindy";

tw-layout()

.debug
  border 1px solid -blue-500

.debug > *
  border 1px solid -purple-400
</style>

<script setup lang="ts"></script>
