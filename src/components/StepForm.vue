<template>
  <div v-if="step === 1">
    <ChoosePillow :nextStep="nextStep" :choiceUp="choiceUp" :choiceDown="choiceDown"  :choice="state.choice"/>
  </div>
  <div v-if="step === 2">
    <PersonalData :prevStep="prevStep" :handleChange="handleChange" :send="send"/>
  </div>
</template>

<script>
import ChoosePillow from "@/views/ChoosePillow";
import PersonalData from "@/views/PersonalData";
import {reactive, ref} from "vue";
import crud from "@/services/crud";

export default {
  name: "StepForm",
  components: {PersonalData, ChoosePillow},
  setup() {
    const step = ref(1)
    const state = reactive({
      choice: 1,
      email: "",
      birthDate: "",
      optIn: false
    })

    function nextStep() {
      step.value++
    }

    function prevStep() {
      step.value--
    }

    function choiceUp() {
      state.choice++
    }

    function choiceDown() {
      state.choice--
    }

    function handleChange(name, value) {
      state[name] = value
      console.log(name, state[name])
    }

    function send() {
      crud.post(state)
      .then(() => console.log("success"))
      .catch(err => console.log(err))
    }

    return {step, state, nextStep, prevStep, choiceUp, choiceDown, handleChange, send}
  }
}
</script>

<style scoped>

</style>