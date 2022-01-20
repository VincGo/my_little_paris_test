<template>
  <div>
    <Title title="Informations personnelles"/>
    <form action="">
      <input type="email" placeholder="E-mail" name="email" @change="getData">
      <input type="date" name="birthDate" @change="getData">
      <input type="checkbox" name="optIn" @change="check">
    </form>
    <button @click="prevStep">Retour</button>
    <button @click="send">Enregistrer</button>
  </div>
</template>

<script>

import Title from "@/components/Title";

export default {
  name: "PersonalData",
  components: {Title},
  props: {
    prevStep: Function,
    handleChange: Function,
    send: Function
  },

  setup(props) {
    function getData(e) {
      props.handleChange(e.target.name, e.target.value)
    }

    function check(e) {
      props.handleChange(e.target.name, e.target.checked)
    }

    return {
      getData,
      check
    }
  }
}
</script>

<style lang="scss" scoped>
</style>