<template>
    <footer class="bg-[#2B3A40] min-h-[382px] footer">
        <div class="footer__container _container">
            <div class="footer__body">
                <div class="mt-[16px] md:flex justify-between footer__content">

                    <div class="header__logoW"><img src="~/assets/img/logo.svg" alt="logo" class="p-2 header__logo">
                    </div>

                    <div class="gap-y-[20px] p-2 flex flex-col">

                        <Heading2>Навигация</Heading2>

                        <div class="flex footer__menuW">
                            <ul class="flex flex-col gap-y-[20px] footer__menu">
                                <li class="footer__item"><a href="#">Главная</a></li>
                                <li class="footer__item"><a href="#">Обо мне</a></li>
                                <li class="footer__item"><a href="#">Услуги</a></li>
                                <li class="footer__item"><a href="#">Цены</a></li>
                                <li class="footer__item"><a href="#">Для бизнес</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-2 max-w-[369px] gap-y-[20px] flex flex-col">

                        <Heading2 id="contacts" >Контакты</Heading2>

                        <div class="flex">
                            <ul class="gap-y-[20px] flex flex-col">
                                <li>
                                    <Paragraph>Адрес: Белгородская область, г.Строитель ул.Кривошеина д.5
                                        кв.301</Paragraph>
                                </li>
                                <li>
                                    <Paragraph>Телефон: <a href="tel:+7(951) 152-31-81">+7(951) 152-31-81</a>
                                    </Paragraph>
                                </li>
                                <li>
                                    <Paragraph>Telegram: <a href="https://t.me/komp_maestro">@komp_maestro</a>
                                    </Paragraph>
                                </li>
                                <li>
                                    <Paragraph>Вконтакте: <a href="https://vk.com/komp_maestro">komp_maestro</a>
                                    </Paragraph>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div class="p-2 gap-y-[20px] flex flex-col">

                        <Heading2>Обратная связь</Heading2>

                        <ButtonWhite>Оставить заявку</ButtonWhite>
                    </div>

                </div>
            </div>
        </div>
    </footer>
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
h1,
h2,
p,
ul,
li,
a {
    color: white;
}
</style>