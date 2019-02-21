<template>
  <div class="situp-gruppe">
    <img class="ikon" :src="gruppe.url">
    <h2 v-on:click="showEdit = !showEdit;">{{ gruppe.name }}</h2>
    <div v-if="showEdit">
      <input v-on:keyup.enter="updateUrl" v-model="newUrl" placeholder="New url :D">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gruppe: Object
  },
  data: () => {
    return {
      showEdit: false,
      newUrl: ""
    };
  },
  methods: {
    updateUrl() {
      this.$data.showEdit = false;
      this.$store
        .dispatch("UPDATE_URL", {
          name: this.$props.gruppe.name,
          url: this.$data.newUrl
        })
        .catch(err => {
          alert(err);
        });
    }
  }
};
</script>

<style scoped lang="less">
.situp-gruppe {
  min-width: 200px;
  padding: 20px;
}

.ikon {
  width: 100px;
}
</style>
