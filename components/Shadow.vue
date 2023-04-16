<template>
    <div class="card better"><slot></slot></div>
</template>


<!-- component script -->
<script lang="ts">
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
<!-- About Nuxt 3 bug: https://github.com/nuxt/nuxt/issues/14766 -->
<!--usage <img :src="useAsset(ImageSrc + '')"  :alt="ImageAlt" class="collection__image"> -->
<script lang="ts">
</script>

<!-- component style -->
<style scoped lang="scss">
.card {
  box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
  
  background: hsl(0 0% 100%);
  color: hsl(200 50% 20%);
  display: flex;
  place-items: center;
  text-align: center;
  border-radius: 2ch;
}
 
.better {
  box-shadow: 0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
}
</style>