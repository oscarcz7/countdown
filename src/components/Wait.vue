<template>
  <div class="mt-20">
    <!-- <div class="hit-the-floor">COUNTDOWN!</div> -->

    <section>
      <div class="area mb-52"> ESTAS LISTA</div>
      
    </section>
  </div>
</template>

<script>
export default {
  name: "Wait",
};
</script>

<style lang="scss" >
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
body {
  background-color: #dbf6e9;
  background: url("http://subtlepatterns.subtlepatterns.netdna-cdn.com/patterns/noisy_net.png")
    repeat;
  font-family: "Open Sans", Impact;
}

.hit-the-floor {
  color: #fff;
  font-size: 10em;
  font-weight: bold;
  font-family: Helvetica;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
}

.hit-the-floor {
  text-align: center;
}

.area {
  text-align: center;
  font-size: 6.5em;
  color: #fff;
  letter-spacing: -7px;
  font-weight: 700;
  text-transform: uppercase;
  animation: blur 0.95s ease-out infinite;
  text-shadow: 0px 0px 5px #fff, 0px 0px 7px #fff;
}

@keyframes blur {
  from {
    text-shadow: 0px 0px 10px #fff, 0px 0px 10px #fff, 0px 0px 25px #fff,
      0px 0px 25px #fff, 0px 0px 25px #fff, 0px 0px 25px #fff, 0px 0px 25px #fff,
      0px 0px 25px #fff, 0px 0px 50px #fff, 0px 0px 50px #fff,
      0px 0px 50px #7b96b8, 0px 0px 150px #7b96b8, 0px 10px 100px #7b96b8,
      0px 10px 100px #7b96b8, 0px 10px 100px #7b96b8, 0px 10px 100px #7b96b8,
      0px -10px 100px #7b96b8, 0px -10px 100px #7b96b8;
  }
}
</style>