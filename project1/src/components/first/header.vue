<template>
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
<style scoped>
.header{
    /*border: 1px solid #000000;*/
    margin: 0px;
    height: 30px;
    background-color: rgb(241, 238, 238);
}
h5{
    color: dimgray;
    margin-left: 80px;
    margin-top: 0px;
    font-family: '宋体';
    font-weight: lighter;
    line-height: 30px;
    /*border: 1px solid #000000;*/
    float: left;
}
.header_ul{    
    float:right;
    width:400px;
    height:30px;
    margin-right: 80px; 
}
.header_ul ul{
    list-style-type: none;
    margin:0;   
}
.header_ul ul li{
    margin-top:0;
    margin-left: 0px;
    font-size: 10px;
    color: dimgray;
    line-height: 30px;
    display: inline-block;
    /*border: 1px solid #000000;*/
}
.header_ul ul li a{
    padding: 13px;
}
.header_ul ul li ul{
    display: none;
}
.header_ul ul li:hover ul{
    display:block;
}

</style>