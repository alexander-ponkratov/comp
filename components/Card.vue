<template>
    <div class="flex max-[576px]:flex-col gap-x-[93px]">
        <div class="my-auto card__imageW"><img :src="useAsset(ImageSrc + '')" :alt="ImageAlt" class="card__image"></div>
        <div class="flex flex-col gap-y-[19px]">
            <Heading2>{{ HeadingText }}</Heading2>
            <div class="flex max-w-[670px]">
                <slot></slot>
            </div>
        </div>
    </div>
</template>


<!-- component script -->
<script lang="ts">
export default {
    /* passed props */
    props: {
        ImageSrc: String,
        ImageAlt: String,
        HeadingText: String,
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
<script setup lang="ts">
function useAsset(path: string): string {
    const assets = import.meta.glob('~/assets/**/*', {
        eager: true,
        import: 'default',
    })
    // @ts-expect-error: wrong type info
    return assets['/assets/' + path]
}
</script>

<!-- component style -->
<style scoped lang="scss">
</style>