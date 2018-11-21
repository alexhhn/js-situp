<template>
    <div class="situp-gruppe">
        <img class="ikon" :src="gruppe.imgSrc"/>
        <h2>{{gruppe.name}}</h2>
    </div>
</template>

<script>
export default {
  props: {
    gruppe: Object
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
