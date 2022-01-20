<template>
  <button @click="nextStep">Suivant</button>
</template>

<script>

export default {
  name: "ChoosePillow",
  props: {
    nextStep: Function
  },

  setup() {

    return {}
  }
}
</script>

<style scoped>

</style>