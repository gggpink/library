<template>
  <div class="hello">
    <div class="all">
      <div class="left">
        <div class="logo">LOGO</div>
        <div class="bar">
          <div
            v-for="(item,index) in arr"
            :key="index"
            :class="id==index?'actives one':'one'"
            :title="item.name"
            @click="one(item.router),id=index"
          >{{item.name}}</div>
          <!-- <div :class="id==1?'actives one':'one'" title="图书管理" @click="one('/HelloWorld/twoson'),id=1">图书管理</div>
          <div :class="id==2?'actives one':'one'" title="图书管理" @click="one('/HelloWorld/threeson'),id=2">图书管理</div>
          <div :class="id==3?'actives one':'one'" title="图书管理" @click="one('/HelloWorld/fourson'),id=3">图书管理</div>-->
        </div>
      </div>
      <div class="right">
        <div class="top">
          <div class="title">
            <a href="#" class="government">政府管理系统</a>
          </div>
          <ul class="title-right" @click="openVersion">
            <li class="fankui" title="反馈">反馈</li>
            <li class="help" title="帮助">帮助</li>
            <!-- 弹出框 -->
            <!-- <el-popover
              ref="popover1"
              placement="top-start"
              title="退出"
              width="200"
              trigger="hover"
            ></el-popover>
            <el-button v-popover:popover1>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURcHBwb+/v7+/v76+vujo6OHh4cnJydTU1IOqnXYAAAADdFJOUxPppyMYpxkAAAD6SURBVEjH7dfbDYIwFAbguoHRCYwTKLcBOIUBaHQAIAxQwvwSEQpyaH/FFxP+5y89vacV4uQBOQix86DsxRmDV3HE4EV4YDa4QQRWSjYILKnNzQ0jekY7Yd3B1AVDeiV3wKCHsQPWPUwdkIbYYWSgtsLAwMwKfQNjFCZWWPwBhEcNz+NoZfLfrLXZPYkD+gtd/H6H97UT5+EK0FPY1ZbABaDYygysuTEvtqg9sI9AiyV/o8xgRNj0DLtHaiuszOahxgJLGueeL8Gpa8vnPHx30yEZGKo5lBwMiEnGwIKDKQMVB+UaSGzWwO2psMGPIfxgh78A8KcC/aY8ACmMo3JtJ3ljAAAAAElFTkSuQmCC"
                alt
                style="display: block;max-width: none;height:40px;opacity: 1;width: 40px;margin-left: 0px;margin-top: 0px;"
              />
              <div
                class="trans"
                style="position:relative;display:inline-block;width:60px;color:#fff"
              >淘小宝技术部</div>
            </el-button> -->
            <li class="login" @mouseover="over" @mouseleave="leave">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURcHBwb+/v7+/v76+vujo6OHh4cnJydTU1IOqnXYAAAADdFJOUxPppyMYpxkAAAD6SURBVEjH7dfbDYIwFAbguoHRCYwTKLcBOIUBaHQAIAxQwvwSEQpyaH/FFxP+5y89vacV4uQBOQix86DsxRmDV3HE4EV4YDa4QQRWSjYILKnNzQ0jekY7Yd3B1AVDeiV3wKCHsQPWPUwdkIbYYWSgtsLAwMwKfQNjFCZWWPwBhEcNz+NoZfLfrLXZPYkD+gtd/H6H97UT5+EK0FPY1ZbABaDYygysuTEvtqg9sI9AiyV/o8xgRNj0DLtHaiuszOahxgJLGueeL8Gpa8vnPHx30yEZGKo5lBwMiEnGwIKDKQMVB+UaSGzWwO2psMGPIfxgh78A8KcC/aY8ACmMo3JtJ3ljAAAAAElFTkSuQmCC"
                alt
                style="display: block;max-width: none;height:40px;opacity: 1;width: 40px;margin-left: 0px;margin-top: 0px;"
              />
              <div
                class="trans"
                style="position:relative;display:inline-block;width:60px;color:#fff"
              >淘小宝技术部</div>
              <div class="drop_out" v-if="out">退出</div>
            </li>
          </ul>
        </div>
        <div class="active">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      arr: [
        { name: "图书管理", router: "/HelloWorld/oneson",boolean:true},
        { name: "图书借阅", router: "/HelloWorld/twoson" },
        { name: "图书推荐", router: "/HelloWorld/threeson" },
        { name: "图书借阅", router: "/HelloWorld/fourson" }
      ],
      out: false
    };
  },
  name: "HelloWorld",
  methods: {
    one(i) {
      this.$router.push(i);
    },
    over() {
      this.out = true;
    },
    leave() {
      this.out = false;
    },
    openVersion(){
      //if(typeof(this.ids) != 'undefined' && this.ids.length == 1){
        this.$router.push({ path: '/login'});
     // }else{
       // this.$Message.danger('请选择一条数据');
      //}
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul,
li {
  list-style: none;
}
.all {
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.left {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 240px;
  height: 100%;
  padding-top: 10px;
  box-shadow: 4px 1px 12px rgba(48, 128, 254, 0.1);
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #3080fe;
  font-weight: 700;
  font-size: 36px;
}
.bar > div {
  text-indent: 2em;
  padding: 10px 0;
}
.bar > div:hover {
  color: #3080fe;
}
.right {
  margin-left: 240px;
  background: #F2F2F2;
  flex: 1;
}
.top {
  background: #3080fe;
}
.top::after {
  content: "";
  display: block;
  clear: both;
}
.title {
  float: left;
  text-decoration: none;
  color: #fff;
  height: 62px;
  line-height: 62px;
  padding: 0 20px;
}
.government {
  display: block;
  width: 180px;
  overflow: hidden;
  color: #fff;
  font-size: 24px;
  white-space: nowrap;
  text-decoration: none;
  text-overflow: ellipsis;
}
.title-right {
  float: right;
  padding-right: 20px;
}
li {
  float: left;
  margin-right: 20px;
}
.login {
  display: flex;
}
.login img {
  margin-right: 10px;
}
.fankui,
.help {
  width: 64px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  text-align: center;
  color: #fff;
}
.fankui:hover,
.help:hover {
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.drop_out {
  position: absolute;
  top: 77px;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 6px 40px;
  background: #fff;
  color: #666;
}

.actives {
  background-color: #f2f3f7;
  color: #3080fe;
  font-weight: 700;
}
</style>
