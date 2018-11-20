<template>
  <div class="situp-group">
    <img class="ikon" alt="ikon" src="../assets/football-ikon.png">
        <h2>{{gruppeNavn}}</h2>
  </div>
</template>


<script>
export default {
  props: "gruppeNavn"
};
</script>

<style scoped lang="less">
.ikon {
  width: 100px;
}

h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
