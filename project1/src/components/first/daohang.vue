<template>
  <div class="daohang">
    <header class="header">
        <el-row>
            <el-col :span="6">
              <h4 class="header_category">图书分类</h4>
            </el-col>
            <el-col :span="18">
              <el-menu default-active="1" class="el-menu-demo" mode="horizontal"  @select="handleSelect" 
              active-text-color="#00c29a">
                <el-menu-item index="1">易书首页</el-menu-item>
                <el-menu-item index="2">热门租书</el-menu-item>
                <el-menu-item index="3">电子书</el-menu-item>
                <el-menu-item index="4">网络文学</el-menu-item>
                <el-menu-item index="5">活动发布</el-menu-item>
              </el-menu>
            </el-col>
        </el-row>
    </header>
    <hr/>
  </div>
</template>

<script>
var daohang_ul={
  daohang_ul:true
}
export default {
  name: 'daohang',
  data () {
    return {
      daohang_ul:daohang_ul
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header_category{
  margin-top: 20px;
  margin-left: 80px;
}
.el-menu-demo{
  border:none;
}
.el-menu .el-menu-item{
  padding-bottom: 0px;
}
hr{
  height:1px;
  border:none;
  border-top:1px solid #8d8c8c;
}
</style>
