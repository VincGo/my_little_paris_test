<template>
  <div>
    <Title title="Informations personnelles" />
    <button @click="prevStep">Retour</button>
  </div>
</template>

<script>

import Title from "@/components/Title";
export default {
  name: "PersonalData",
  components: {Title},
  props: {
    prevStep: Function,
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