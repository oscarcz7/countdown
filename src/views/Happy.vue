<template>
  <div class="happy">
    <svg viewBox="0 0 800 600">
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="25%" class="text--line">
          Feliz
        </text>
        <text text-anchor="middle" x="50%" y="45%" class="text--line">
          Cumpleaños
        </text>
        <text text-anchor="middle" x="50%" y="68%" class="text--line">
          HERMOSA
        </text>
      </symbol>

      <g class="g-ants">
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
        <use xlink:href="#s-text" class="text-copy"></use>
      </g>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.happy {
  background: hsl(200, 70, 11);
  background-size: 0.12em 100%;
  font: 16em/1 Arial;
  height: 100%;
}

$colors: #360745, #d61c59, #e7d84b, #efeac5, #1b8798;

.text--line {
  font-size: 0.5em;
}

svg {
  position: absolute;
  width: 100%;
  height: 100%;
}

$max: 5;
$stroke-step: 7%;
.text-copy {
  fill: none;
  stroke: white;
  stroke-dasharray: $stroke-step $stroke-step * ($max - 1);
  stroke-width: 3px;

  animation: stroke-offset 9s infinite linear;

  @for $item from 1 through $max {
    $stroke-color: nth($colors, $item);

    &:nth-child(#{$item}) {
      stroke: $stroke-color;
      stroke-dashoffset: $stroke-step * $item;
    }
  }
}

@keyframes stroke-offset {
  50% {
    stroke-dashoffset: $stroke-step * $max;
    stroke-dasharray: 0 $stroke-step * $max * 2.5;
  }
}
</style>