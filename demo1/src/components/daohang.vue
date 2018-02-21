<template>
 <div class="ul_daohang">
    <h1>msg</h1>
    <ul>
      <li>
        <a
          target="_blank"
        >
          首页
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          分类
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          特价租书
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          考试专区
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'daohang',
  data () {
    return {
      msg: '易书'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
