<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App",
    async created() {
      console.log(await this.init()); // 阻塞执行
      console.log("mounted 异步测试");
    },
    methods: {
      async init() {}
    },
    data() {
      return {};
    }
  };
</script>
<style lang="scss"></style>
