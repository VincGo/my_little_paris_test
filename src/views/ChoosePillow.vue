<template>
  <div class="container">
    <Title title="Combien d'oreiller dans votre vie ?"/>
    <img :src="require(`@/assets/images/coussins/${choice}.png`)" alt="test">
    <section>
      <div @click="choiceDown" :class="{hidden: choice <= 1}" class="btn-orange-outline btn-choice">
        <span>-</span>
      </div>
      <h2 class="color-orange">{{ choice }}</h2>
      <div @click="choiceUp" :class="{hidden: choice >= 10}" class="btn-orange-outline btn-choice">
        <span>+</span>
      </div>
    </section>
    <button class="btn-step btn-orange-outline" @click="toggleStep">
      Suivant
    </button>
  </div>

</template>

<script>

import Title from "@/components/Title";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

library.add(faLongArrowAltRight)

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
  justify-content: center;

  h2 {
    margin: 0 15px;
  }

  div {
    //color: var(--orange);
    //border: 2px solid var(--orange);
    //border-radius: 30px;
    //width: 30px;
    //height: 30px;
    //font-size: 25px;
    //background-color: white;
    //cursor: pointer;

    span {
      font-weight: bold;
    }
  }
}
</style>