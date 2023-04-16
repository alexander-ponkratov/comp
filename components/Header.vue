<template>
    <header class="bg-[#2B3A40] mb-[calc(31px+4.32vw)]">
        <div class="header__container _container">
            <div class="flex items-center justify-between min-h-[145px] max-w-[1116px] flex-nowrap header__body">
                <div class="header__logoW"><img src="~/assets/img/logo.svg" alt="logo" class="w-full header__logo">
                </div>
                <Menu class=""></Menu>
                <!--<Menu2 class="col-auto col-sm-10"></Menu2> -->
            </div>
        </div>
    </header>
</template>


<!-- component script -->


<!-- component style -->
<style lang="scss">
/* ----------------reset css--------------------- */
/* * {
    outline: 1px solid tomato;
} */
@charset "UTF-8";

@font-face {
    font-family: 'MontserratMedium';
    /* no ~ before assets! */
    src: url('assets/fonts/Montserrat-Medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "MontserratSemiBold";
    src: url("assets/fonts/Montserrat-SemiBold.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: #2B3A40;
}

ul,
ol,
li {
    list-style: none;
    color: #2B3A40;
}

img {
    vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: inherit;
    font-size: inherit;
    color: #2B3A40;
}

h1 {
    font-size: 32px;
    line-height: 1.5;
}

html,
body {
    height: 100%;
    font-family: "MontserratMedium";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
}

/* -----------------reset css------------------- */
/* --------------------------------------------- */
.wrapper {
    min-height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

._container {
    max-width: 1315px;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: content-box;
}

/* --------------------------------------------- */
</style>
<style lang="scss">
p {
    color: #2B3A40;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
}
</style>