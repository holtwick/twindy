<template>
  <div class="form" :class="`theme-${theme}`">
    <div>theme</div>
    <div class="sample">
      <select class="dropdown" v-model="theme">
        <option value="">default</option>
        <option v-for="name in names" :key="name">{{ name }}</option>
      </select>
    </div>
    <div>button</div>
    <div class="sample">
      <div><button>Button Regular</button></div>
      <div><button class="tw-button">Button TW</button></div>
      <div>
        <button class="tw-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          <span>Pulse</span>
        </button>
        <button class="tw-button">
          <span>Pulse</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </button>
      </div>
      <div>
        <button class="tw-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          Pulse
        </button>
        <button class="tw-button">
          Pulse
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </button>
      </div>

      <div>
        <button class="tw-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </button>
      </div>

      <div>
        <button class="tw-button">Button</button>
        <button class="tw-button">Button</button>
        <button class="tw-button">Button</button>
      </div>
    </div>
    <div>input checkbox</div>
    <div class="sample">
      <label><input type="checkbox" name="" id="" /> Regular</label>
      <label><input type="checkbox" class="tw-checkbox" /> Styled</label>
      <label><input type="checkbox" class="tw-switch" /> Switch</label>
    </div>
    <div>input text</div>
    <div class="sample">
      <label> <input type="text" name="" id="" /> Regular </label>
      <label> <input type="text" class="tw-input" /> Styled </label>
      <label> <input type="number" class="tw-number" /> Number </label>
      <label> <input type="search" class="tw-input" /> Search </label>
      <label> <input type="password" class="tw-input" /> Password </label>
    </div>
    <div>textarea</div>
    <div class="sample">
      <div>Regular</div>
      <textarea name="" id="" cols="30" rows="6"></textarea>
      <div>Styles</div>
      <textarea class="tw-textarea"></textarea>
    </div>
  </div>
</template>

<style lang="styl">
@import "form"
</style>

<script setup lang="ts">
import { ref } from "@vue/reactivity"

const names = ["blue", "small"]
const theme = ref("")
</script>
