<template>
  <div id="category">
      <el-row class="cate_1">
        <h5>{{category_m}}</h5>
      </el-row>
      <el-row class="cate_1">
          <el-col :span="12">
              {{category_c_1}}
          </el-col>
          <el-col :span="12">
              {{category_c_2}}
          </el-col>
      </el-row>
       <el-row class="cate_1">
          <el-col :span="8">
              {{category_c_3}}
          </el-col>
          <el-col :span="8">
              {{category_c_4}}
          </el-col>
          <el-col :span="8">
              {{category_c_5}}
          </el-col>
      </el-row>
       <el-row class="cate_2">
        <h5>{{category_m}}</h5>
      </el-row>
      <el-row class="cate_2">
          <el-col :span="12">
              {{category_c_1}}
          </el-col>
          <el-col :span="12">
              {{category_c_2}}
          </el-col>
      </el-row>
       <el-row class="cate_2">
          <el-col :span="8">
              {{category_c_3}}
          </el-col>
          <el-col :span="8">
              {{category_c_4}}
          </el-col>
          <el-col :span="8">
              {{category_c_5}}
          </el-col>
      </el-row>
      <el-row class="cate_1">
        <h5>{{category_m}}</h5>
      </el-row>
      <el-row class="cate_1">
          <el-col :span="12">
              {{category_c_1}}
          </el-col>
          <el-col :span="12">
              {{category_c_2}}
          </el-col>
      </el-row>
       <el-row class="cate_1">
          <el-col :span="8">
              {{category_c_3}}
          </el-col>
          <el-col :span="8">
              {{category_c_4}}
          </el-col>
          <el-col :span="8">
              {{category_c_5}}
          </el-col>
      </el-row>
       <el-row class="cate_2">
        <h5>{{category_m}}</h5>
      </el-row>
      <el-row class="cate_2">
          <el-col :span="12">
              {{category_c_1}}
          </el-col>
          <el-col :span="12">
              {{category_c_2}}
          </el-col>
      </el-row>
       <el-row class="cate_2">
          <el-col :span="8">
              {{category_c_3}}
          </el-col>
          <el-col :span="8">
              {{category_c_4}}
          </el-col>
          <el-col :span="8">
              {{category_c_5}}
          </el-col>
      </el-row>
      <el-row class="cate_1">
        <h5>{{category_m}}</h5>
      </el-row>
      <el-row class="cate_1">
          <el-col :span="12">
              {{category_c_1}}
          </el-col>
          <el-col :span="12">
              {{category_c_2}}
          </el-col>
      </el-row>
       <el-row class="cate_1">
          <el-col :span="8">
              {{category_c_3}}
          </el-col>
          <el-col :span="8">
              {{category_c_4}}
          </el-col>
          <el-col :span="8">
              {{category_c_5}}
          </el-col>
      </el-row>
  </div>
</template>
<script>
export default {
  data(){
      return{
          category_m:"小说",
          category_c_1:"侦探/悬疑",
          category_c_2:"侦探/悬疑",
          category_c_3:"侦探/悬疑",
          category_c_4:"侦探/悬疑",
          category_c_5:"侦探/悬疑"
      }
  }
}
</script>
<style scoped>
.el-row h5{
    font-size: 13px;
    margin: 15px;
}
.el-row .el-col{
    font-size: 13px;
    padding-left: 5px;
}
.cate_1{
    background-color: #e2e2e2;
}
.cate_2{
    background-color: #d4d4d4;
}
</style>



