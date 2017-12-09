<template>
  <div id="app">
    <el-container>
      <el-aside class="main-aside">
         <el-menu class="el-menu-vertical-demo">
            <el-menu-item index="1">
               <i class="el-icon-location"></i>
               <span slot="title">Action 1</span>
            </el-menu-item>
            <el-menu-item index="2">
               <i class="el-icon-location"></i>
               <span slot="title">Action 2</span>
            </el-menu-item>
         </el-menu>
      </el-aside>
      <el-container>
         <el-header class="main-header">
            <el-tabs @tab-click="onNavbarClick">
               <el-tab-pane label="Crusovice" name="crusovice"></el-tab-pane>
               <el-tab-pane label="Holsten" name="holsten"></el-tab-pane>
               <el-tab-pane label="Staropramen" name="staropramen"></el-tab-pane>
            </el-tabs>
         </el-header>
         <el-main class="main-content">
            <transition name="el-fade-in-linear" mode="out-in" appear>
               <router-view></router-view>
            </transition>
         </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
   name: 'app',
   data () {
      return {
      };
   },
   methods: {
      onNavbarClick(tab) {
         this.$router.push(`${tab.name}`);
      }
   }
}
</script>

<style>
   .main-aside {
      padding-top: 50px;
   }
   .main-content {
      display: flex;
      color: #409EFF;
   }
</style>
