<template>
  <div>
    <Pop
      :year="2050"
      :month="9"
      :day="20"
      :hour="7"
      :minute="0"
      :second="0"
      :millisecond="0"
    />
    <div class="text-center m-5 text-xl ">
      <p class="text-white">THIS IS A COUNTDOWN</p>
      <P class="text-white">MADE WITH VUE AND TAILWIND CSS</P>
    </div>
    
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
