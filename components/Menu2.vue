<template>
    <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="header__menu collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link text-light active" aria-current="page" href="#">Главная</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Обо&nbspмне</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Услуги</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Цены</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Для&nbspбизнеса</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Контакты</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<!-- component script -->
<script lang="ts">
export default {
    /* passed props */
    props: {
        ImageSrc: String,
        ImageAlt: String,
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
.navbar-toggler {
    background-color: white;
}
.navbar-toggler-icon {
    background-color: white;
}

.navbar-nav {
    display: flex;
    width: 100%;
    max-width: 886px;
    justify-content: space-between;
}

.navbar-expand-md {
    flex-wrap: wrap;
}

</style>