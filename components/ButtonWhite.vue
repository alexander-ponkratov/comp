<template>
    <button class="btnWhiteShadow border-solid border border-[#37765A] active:brightness-90 rounded-[7px] bg-white hover:bg-gray-100 text-white py-[18px] px-[32px] ">
        <a class="text-[16px] leading-[20px] text-[#37765A]" href="tel:+7(951) 152-31-81"><slot></slot></a>
    </button>
</template>


<!-- component script -->
<script>
export default {
    /* passed props */
    props: {
        value: {
            type: String,
            default: 'Button'
        }
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
<style lang="scss">
.btnWhiteShadow {
    box-shadow: inset 5px 5px 4px rgba(0, 0, 0, 0.2);
}
</style>