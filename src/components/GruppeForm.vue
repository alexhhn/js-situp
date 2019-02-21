<template>
  <!-- the submit event will no longer reload the page -->
  <form v-on:submit.prevent="onSubmit(name, url);">
    <input v-model="name" type="text" name="title" value placeholder="Gruppenavn">
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
      url: FotballImg
    };
  },
  methods: {
    onSubmit(name, url) {
      this.$emit("onSubmit", name, url);
    }
  }
};
</script>
