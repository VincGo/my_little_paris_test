<template>
  <div class="container">
    <Title title="Informations personnelles"/>
    <form>
      <div>
        <div class="return" @click="toggleStep">
          <font-awesome-icon icon="angle-left" />
          <span>retour</span>
        </div>
        <div class="form-container">
          <label>Email</label>
          <input class="input" type="email" name="email" @change="getData">
        </div>
        <div class="form-container">
          <label>Date de naissance</label>
          <input class="input" type="date" name="birthDate" @change="getData">
        </div>
        <div>
          <input type="checkbox" name="optIn" @change="check">
          <label>Je souhaite recevoir des newsletter</label>
        </div>
      </div>
    </form>
    <div>
      <button class="btn-step btn-orange-outline" @click="send">Enregistrer</button>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft)

import Title from "@/components/Title";

export default {
  name: "PersonalData",
  components: {Title},
  props: {
    toggleStep: Function,
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
  form {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .form-container {
    margin-bottom: 15px;
  }
</style>