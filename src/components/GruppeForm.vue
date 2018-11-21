<template>
  <!-- the submit event will no longer reload the page -->

  <form v-on:submit.prevent="onSubmit(name, imgSrc);">
    <input
      v-model="name"
      type="text"
      name="title"
      value=""
      placeholder="Gruppenavn"
    />
    <button type="submit" name="button">Legg til Gruppe</button>
  </form>
</template>
<script>
import FotballImg from "@/assets/football-ikon.png";

export default {
  name: "GruppeForm",
  data() {
    return {
      name: "",
      imgSrc: FotballImg
    };
  },
  methods: {
    onSubmit(name, imgSrc) {
      this.$emit("onSubmit", name, imgSrc);
    }
  }
};
</script>
