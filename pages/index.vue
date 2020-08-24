<template>
  <div class="wrapper">
    <p>{{$store.state.counter}}</p>
    <myButton />
    <resetButton />
    <ifTest v-if="$store.state.counter === 10" />
  </div>
</template>

<script>
import myButton from "~/components/myButton.vue";
import resetButton from "~/components/resetButton.vue";
import ifTest from "~/components/ifTest.vue";

export default {
  components: {
    myButton,
    ifTest,
    resetButton,
  },
};
</script>

<style>
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.wrapper p {
  font-size: 5rem;
}
</style>
