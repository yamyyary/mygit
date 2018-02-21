<template>
<div>
    <div class="header">
        <h5>{{ msg }}</h5>
        <div  v-bind:class="{header_ul:header_ul}">
        <ul>
            <li><a>登录</a></li>
            <li><a>注册</a></li>
            <li><a>我的易书</a>
                <ul v-bind:class="{header_yishu_ul:header_yishu_ul}">
                    <li>账号主体</li>
                </ul>
            </li>
            <li><a>购物车</a></li>
            <li><a>收藏夹</a></li>
        </ul>
        </div>
    </div>
    <img src="../assets/logo.png" v-bind:class="logo"/>
    <div class="header">
        <el-row>
            <el-col :span="24">
              <el-menu default-active="5" class="el-menu-demo" mode="horizontal">
                <el-menu-item index="1">高级插件</el-menu-item>
                <el-menu-item index="2">在线商城</el-menu-item>
                <el-menu-item index="3">客户管理</el-menu-item>
                <el-menu-item index="4">系统设置</el-menu-item>
                <el-menu-item index="5">活动发布</el-menu-item>
              </el-menu>
            </el-col>
        </el-row>
    </div>
</div>
</template>
<script>
export default {
        data(){
            return{
                msg:'欢迎来到易书',
                header_ul:true
            }
        }
}
</script>
<style lang="scss">
@import '../style/_header';
</style>