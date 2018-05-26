<template>
    <div id="mainpage">
        <myheader></myheader>
        <el-header>
            <el-row>
                <el-col :span="5">
                <img src="../assets/logo.jpg" v-bind:class="logo"/>
                </el-col>
                <el-col :span="8">
                    <div class="demo-input-suffix">
                        <el-input
                            placeholder="请输入内容"
                            prefix-icon="el-icon-search"
                            v-model="input_search">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="4">
                    <el-button class="search" type="success">搜索</el-button>
                </el-col>
            </el-row>
        </el-header>
        <br/>
        <daohang></daohang>
        <el-container>
            <el-aside  width="250px"><category></category></el-aside>
            <el-main>
                <maincontent></maincontent></el-main>    
        </el-container>
    </div>
</template>
<script>
import daohang from './first/daohang'
import myheader from './first/header'
import category from './first/category'
import maincontent from './first/maincontent'
var logo={
    logo:true
}
export default {  
    data(){
        return{
            logo:logo,
            input_search:""
        }
    },
    components:{
        'myheader':myheader,
        'daohang':daohang,
        'category':category,
        'maincontent':maincontent   
    }
}
</script>
<style scoped>
#mainpage{
    position: relative;
}
.logo{
    width: 150px;
    height: 80px;
}
.demo-input-suffix{
    width: 350px;
    margin-top:20px;
    float: right;
}
.search{
    margin-top:20px;
    background-color: #03b995;
}
.line{
    height: 1px;
    border-bottom: 1px solid #363636;
}
.el-aside{
     height: 400px;
     margin-left: 60px;
     background-color: #e9e8e8;
     border-radius: 8px;
}
</style>

