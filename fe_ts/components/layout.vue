<template>
  <div class="main_div">
    <div>
      <div v-if="showLoader">
        Loading...
      </div>
      <div v-if="! showLoader">
        <Menu />
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'layout',
  props : ["showLoader"]
}
</script>
<style>
.main_div {
  font-family: Arial;
  text-align: center;
}
</style>
