<template>
  <div>
    <div class="situp-grupper-container">
      <SitupGruppe v-for="gruppe in grupper" :gruppe="gruppe" :key="gruppe.name"/>
    </div>
    <gruppe-form @onSubmit="addGruppe"/>
  </div>
</template>

<script>
import SitupGruppe from "./SitupGruppe";
import GruppeForm from "@/components/GruppeForm";
import GruppeService from "@/services/GruppeService";

export default {
  components: {
    SitupGruppe,
    GruppeForm
  },

  computed: {
    grupper() {
      return this.$store.getters.getGrupper;
    }
  },

  mounted() {
    this.getGrupper();
  },

  methods: {
    async addGruppe(gruppeName, gruppeImgSrc) {
      await this.$store
        .dispatch("ADD_GRUPPE", { name: gruppeName, url: gruppeImgSrc })
        .catch(err => {
          console.log(err);
        });
      this.getGrupper();
    },

    getGrupper() {
      console.log("getting grupp");
      this.$store.dispatch("FETCH_GRUPPE").catch(err => {
        console.log(err);
      });
    }
  }
};
</script>

<style scoped lang="less">
.situp-grupper-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

a {
  color: #42b983;
}
</style>
