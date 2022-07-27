<script setup>

import SideBar from './components/SideBar.vue';
import Main from './components/Main.vue';
</script>

<template>
  <div id="wrapper">
    <SideBar />
    <Main /> 
  </div>
</template>

<style>
#wrapper {
  display: flex;
  width: 800px;
}
</style>
