<template>
  <div class="home">
    <h1>Visma Sitfup</h1>
    <SitupGrupper/>

    <img class="visma-logo" alt="Vismalogo" src="../assets/visma-logo.png">

  </div>
</template>

<script>
import SitupGrupper from "@/components/SitupGrupper.vue"; // @ is an alias to /src

export default {
  components: {
    SitupGrupper
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1 {
  margin: 20px 0 50px 0;
}
.visma-logo {
  margin-top: 80px;
  width: 100px;
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
