<template>
  <div>
    <Pop
      :year="2021"
      :month="10"
      :day="20"
      :hour="7"
      :minute="00"
      :second="0"
      :millisecond="0"
    />
  </div>
</template>

<script>
import Pop from "@/components/Pop.vue";
export default {
  components: {
    Pop,
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
