<template>
  <div>
    <button @click="prevStep">Retour</button>
  </div>
</template>

<script>
export default {
  name: "PersonalData",
  props: {
    prevStep: Function
  }
}
</script>

<style lang="scss" scoped>
div {
  h1 {
    color: red;
  }
}
</style>