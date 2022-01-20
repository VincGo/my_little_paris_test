<template>
  <div v-if="step === 1">
    <ChoosePillow />
  </div>
  <div v-if="step === 2">
    <PersonalData />
  </div>
</template>

<script>
import ChoosePillow from "@/views/ChoosePillow";
import PersonalData from "@/views/PersonalData";
export default {
  name: "StepForm",
  components: {PersonalData, ChoosePillow},
  setup() {
    const step = 2

    return {
      step
    }
  }
}
</script>

<style scoped>

</style>