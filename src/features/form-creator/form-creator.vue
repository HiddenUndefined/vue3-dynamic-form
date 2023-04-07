<script lang="ts"></script>

<template lang="pug">
.form-wrapper
  // Field: ID
  span ID-field
  // Field: Type
  span Type-field
  // Field: Name
  span Name-field
  // Field: Label
  span Label-field
  // Field: Placeholder
  span Placeholder-field
  // Field: Required
  span Required-field
  // Field: Disabled
  span Disabled-field
  // Field: Value
  span Value-field
  // Button: Submit
  span Submit-button
</template>

<style lang="stylus" scoped>
.form-wrapper
  width 100%
  gap 12px
  display grid
  grid-template-columns 1fr
  // Span
  span
    min-height 48px
    background-color var(--color-border)
    display flex
    justify-content center
    align-items center
  // Adaptive
  // 475px
  @media screen and (min-width 475px)
    grid-template-columns repeat(2, 1fr)
  // 768px
  @media screen and (min-width 768px)
    grid-template-columns repeat(3, 1fr)
  // 980px
  @media screen and (min-width 980px)
    grid-template-columns repeat(4, 1fr)
  // 1080px
  @media screen and (min-width 1080px)
    grid-template-columns repeat(5, 1fr)
</style>
