<template>
  <div v-if="state.step === 1">
    <ChoosePillow :nextStep="nextStep"/>
  </div>
  <div v-if="state.step === 2">
    <PersonalData :state="state" :prevStep="prevStep"/>
  </div>
</template>

<script>
import ChoosePillow from "@/views/ChoosePillow";
import PersonalData from "@/views/PersonalData";
import {reactive} from "vue";

export default {
  name: "StepForm",
  components: {PersonalData, ChoosePillow},
  setup() {
    const state = reactive({
      step: 1,
      choice: 1,
      email: "",
      birthDate: "",
      optIn: false
    })

    function nextStep() {
      state.step++
    }

    function prevStep() {
      state.step--
    }

    return {
      state,
      nextStep,
      prevStep
    }
  }
}
</script>

<style scoped>

</style>