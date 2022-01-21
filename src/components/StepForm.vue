<template>
  <FadeTransition mode="out-in">
    <div v-if="step">
      <ChoosePillow :toggleStep="toggleStep" :choiceUp="choiceUp" :choiceDown="choiceDown" :choice="state.choice"/>
    </div>
    <div v-else>
      <PersonalData :toggleStep="toggleStep" :handleChange="handleChange" :send="send"/>
    </div>
  </FadeTransition>
</template>

<script>
import ChoosePillow from "@/views/ChoosePillow";
import PersonalData from "@/views/PersonalData";
import {reactive, ref} from "vue";
import crud from "@/services/crud";
import FadeTransition from "@/components/FadeTransition";

export default {
  name: "StepForm",
  components: {FadeTransition, PersonalData, ChoosePillow},
  setup() {
    const step = ref(true)
    const state = reactive({
      choice: 1,
      email: "",
      birthDate: "",
      optIn: false
    })

    function toggleStep() {
      step.value = !step.value
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

    return {step, state, toggleStep, choiceUp, choiceDown, handleChange, send}
  }
}
</script>

<style scoped>

</style>