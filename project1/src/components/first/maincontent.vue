<template>
  <div id="maincontent">
      <el-carousel trigger="click" height="400px">
        <el-carousel-item>
            <img src="../../assets/mainpic.jpg"/>
        </el-carousel-item>
        <el-carousel-item>
            <img src="../../assets/mainpic1.jpg"/>
        </el-carousel-item>
        <el-carousel-item>
            <img src="../../assets/mainpic2.jpg"/>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>
<script>
export default {
  data(){
      return{

      }
  }
}
</script>
<style scoped>
.el-carousel{
     width:700px;
}
img{
    width: 700px;
    height: 400px;
}
</style>


