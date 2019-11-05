<template>
  <div>
    <div style="background:#fff;border-radius:10px;padding-bottom:10px;">
    <div class="library_one">图书管理</div>
    <el-tabs v-model="activeName" @tab-click="handleClick" style="padding:20px;font-size:20px;">
      <el-tab-pane label="全部图书" name="first"><left/></el-tab-pane>
      <el-tab-pane label="借阅信息" name="second"><right/></el-tab-pane>
    </el-tabs>
    </div>
  </div>
</template>

<script>
import left from '../routerr/page_one/left'
import right from '../routerr/page_one/right'
export default {
  components: {
    left,
    right
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
.library_one{
  font-size: 22px;
  padding: 20px;
}
</style>