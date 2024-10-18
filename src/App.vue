<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App",
    mounted() {
      console.log("mounted");
    },
    methods: {},
    data() {
      return {};
    }
  };
</script>
<style lang="scss"></style>
