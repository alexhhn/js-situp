<template>
  <div class="situp-group">
    <img class="ikon" alt="ikon" src="../assets/football-ikon.png">
        <h2>{{gruppeNavn}}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SitupGruppe extends Vue {
  @Prop() private gruppeNavn!: string;
}
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
