<template>
    <button class="btnGreenShadow rounded-[7px] bg-[#37765A] hover:bg-[#2c5f48] active:brightness-90 text-white py-[18px] px-[32px]">
        <a class="text-[16px] leading-[20px] text-[white]" href="#">{{value}}</a>
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
.btnGreenShadow {
    box-shadow: inset 5px 5px 4px rgba(0, 0, 0, 0.2);
}
</style>