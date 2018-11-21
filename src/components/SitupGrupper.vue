<template>
<div>
  <div class="situp-grupper-container">
        <SitupGruppe v-for="gruppe in grupper" :gruppe = 'gruppe' :key="gruppe.id"/>
        
    </div>
    <gruppe-form @onSubmit='addGruppe'/>
    </div>
</template>

<script>
import FotballImg from "@/assets/football-ikon.png";
import SitupGruppe from "./SitupGruppe";
import GruppeForm from "@/components/GruppeForm";

export default {
  components: {
    SitupGruppe,
    GruppeForm
  },

  methods: {
    addGruppe(gruppeName, gruppeImgSrc) {
      const genericId = this.grupper[this.grupper.length - 1].id + 1;
      this.grupper.push({
        id: genericId,
        name: gruppeName,
        imgSrc: gruppeImgSrc
      });
    }
  },

  data() {
    return {
      title: "Situp Grupper",

      grupper: [
        { id: 0, name: "Fotball", imgSrc: FotballImg },
        { id: 1, name: "Basketball", imgSrc: FotballImg },
        { id: 2, name: "Brettspill", imgSrc: FotballImg }
        // Singel, cageball, Klarting, Casino
      ]
    };
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
