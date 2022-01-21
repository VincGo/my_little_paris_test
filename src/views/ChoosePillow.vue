<template>
  <div class="container">
    <Title title="Combien d'oreiller dans votre vie ?"/>
    <img :src="require(`@/assets/images/coussins/${choice}.png`)" alt="test">
    <section>
      <button @click="choiceDown" class="btn-choice">
        <font-awesome-icon icon="minus-circle" :class="{hidden: choice <= 1}" class="color-white"/>
      </button>
      <h2 class="color-orange">{{ choice }}</h2>
      <button @click="choiceUp" class="btn-choice">
        <font-awesome-icon icon="plus-circle" :class="{hidden: choice >= 10}" class="color-orange"/>
      </button>
    </section>
    <button class="btn-step btn-orange-outline" @click="toggleStep">
      Suivant
    </button>
  </div>

</template>

<script>

import Title from "@/components/Title";

export default {
  name: "ChoosePillow",
  components: {Title},
  props: {
    toggleStep: Function,
    choiceUp: Function,
    choiceDown: Function,
    choice: Number
  },
}
</script>

<style scoped lang="scss">
img {
  margin-top: 15px;
}

section {
  margin: 20px 0;
  display: flex;
  text-align: center;

  h2 {
    margin: 0 15px;
  }
}
</style>