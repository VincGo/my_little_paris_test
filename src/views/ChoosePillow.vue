<template>
  <div>
    <Title title="Combien d'oreiller dans votre vie ?" />
    <img  :src="require(`@/assets/coussins/${choice}.png`)" alt="test">
    <button @click="choiceDown" v-if="choice > 1">-</button>
    <span>{{choice}}</span>
    <button @click="choiceUp" v-if="choice < 10">+</button>
    <button @click="nextStep">Suivant</button>
  </div>
</template>

<script>

import Title from "@/components/Title";

export default {
  name: "ChoosePillow",
  components: {Title},
  props: {
    nextStep: Function,
    choiceUp: Function,
    choiceDown: Function,
    choice: Number
  },
}
</script>

<style scoped>

</style>