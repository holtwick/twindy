<template>
  <div class="app-components">
    <h1>Media Queries</h1>

    <div class="media-tests">
      <div class="landscape">landscape</div>
      <div class="portrait">portrait</div>
      <br />
      <div class="mobile">mobile</div>
      <div class="desktop">desktop</div>
      <br />
      <div class="dark">dark</div>
      <div class="light">light</div>
      <br />
      <div class="sm">sm</div>
      <div class="md">md</div>
      <div class="lg">lg</div>
      <div class="xl">xl</div>
      <div class="2xl">2xl</div>
    </div>
  </div>
</template>

<style lang="stylus">
@require "../twindy"

color-fail = -red-500
color-success = -green-500

.media-tests
  color color-fail

  div
    // opacity 0.5

  .sm
    @media -media-sm
      color color-success
      opacity 1

  .md
    @media -media-md
      color color-success
      opacity 1

  .lg
    @media -media-lg
      color color-success
      opacity 1

  .xl
    @media -media-xl
      color color-success
      opacity 1

  .xl
    @media -media-xl2
      color color-success
      opacity 1

  .dark
    @media -media-dark
      color color-success
      opacity 1

  .light
    @media -media-light
      color color-success
      opacity 1

  .landscape
    @media -media-landscape
      color color-success
      opacity 1

  .portrait
    @media -media-portrait
      color color-success
      opacity 1

  .mobile
    @media -media-mobile
      color color-success
      opacity 1

  .desktop
    @media -media-desktop
      color color-success
      opacity 1
</style>
