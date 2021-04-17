<template>
  <div>
    <Counter
      :year="2021"
      :month="3"
      :day="16"
      :hour="22"
      :minute="10"
      :second="0"
      :millisecond="0"
    />
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
export default {
  components: {
    Counter,
  },
};
</script>

<style lang="scss" >
body {
  background: #08222f;
  font-family: Arial;
  height: 100%;
  font-weight: 800;
}
</style>