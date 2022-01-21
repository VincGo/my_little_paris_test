<template>
  <FadeTransition mode="out-in">
    <div v-if="step">
      <ChoosePillow :toggleStep="toggleStep" :choiceUp="choiceUp" :choiceDown="choiceDown" :choice="state.choice"/>
    </div>
    <div v-else>
      <PersonalData :toggleStep="toggleStep" :handleChange="handleChange" :checkForm="checkForm" :errors="errors"/>
    </div>
  </FadeTransition>
</template>

<script>
import ChoosePillow from "@/views/ChoosePillow";
import PersonalData from "@/views/PersonalData";
import {reactive, ref} from "vue";
import FadeTransition from "@/components/FadeTransition";
import crud from "@/services/crud";

export default {
  name: "StepForm",
  components: {FadeTransition, PersonalData, ChoosePillow},
  setup() {
    const step = ref(true)
    let errors = ref([])
    const state = reactive({
      choice: 1,
      email: null,
      birthDate: null,
      optIn: false
    })

    function toggleStep() {
      step.value = !step.value
    }

    function choiceUp() {
      if(state.choice < 10) {
        state.choice++
      }
    }

    function choiceDown() {
      if(state.choice > 1) {
        state.choice--
      }
    }

    function handleChange(name, value) {
      state[name] = value
      console.log(name, state[name])
    }

    function checkForm() {
      this.errors = []

      if (!state.birthDate) {
        this.errors.push("La date de naissance est requise.")
      }

      if (!state.email) {
        this.errors.push("L'email est requis.")
      } else if (!validateEmail(state.email)) {
        this.errors.push("Veuillez renseigner un email valide")
      }

      if (!this.errors.length) {
        crud.post(state)
            .then(() => console.log("success"))
            .catch(err => console.log(err))
      }
    }

    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    return {step, state, errors,toggleStep, choiceUp, choiceDown, handleChange, checkForm}
  }
}
</script>

<style scoped>

</style>