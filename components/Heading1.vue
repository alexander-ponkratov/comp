<template>
  <h1 class="break-words font-['MontserratSemiBold'] font-[600] text-[64px] leading-[78px]">
    <slot></slot>
  </h1>
</template>


<!-- component script -->
<script>
export default {
  /* passed props */
  props: {
  },
  /*     data: () => ({
      }), */
  /* js code */
  mounted() {
  },
  methods: {
  }
}
</script>

<!-- component style -->
<style scoped lang="scss">
h1::before {
  transform: scaleX(0);
  transform-origin: bottom right;
}

h1:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

h1::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  inset: 0 0 0 0;
  background: hsl(200 100% 80%);
  z-index: -1;
  transition: transform .3s ease;
}

h1 {
  display: inline-block;
  position: relative;
}</style>