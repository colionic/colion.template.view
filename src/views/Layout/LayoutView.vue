<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "LayoutView"
  };
</script>

<style scoped lang="scss">
  #app > .el-container {
    width: 100%;
    height: 100%;
  }
  .el-header {
  }
  .el-aside {
    background-color: #ffffff;
    color: #333;
  }
  .el-main {
    background-color: #e9eef3;
    color: #333;
  }
</style>
