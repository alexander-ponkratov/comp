<template>
    <div class="services">
        <div class="services__container _container">
            <div class="mb-[calc(60px+7.5vw)] services__body">

                <Heading1 id="services" class="mb-6 text-right">Услуги</Heading1>

                <div class="flex flex-col gap-y-[35px]">
                    <Card ImageSrc="img/services/01.jpg" ImageAlt="remont"
                        HeadingText="Ремонт компьютеров, ноутбуков, оргтехники">
                        <div class="flex card__listW">
                            <ul class="card__list">
                                <li class="text-[18px] leading-[22px] list-disc list-inside card__item">диагностика и
                                    выявление
                                    неисправных элементов;</li>
                                <li class="text-[18px] leading-[22px] list-disc list-inside card__item">ремонти устранение
                                    неисправностей, техническое обслуживание, чистка, замена термопасты;</li>
                                <li class="text-[18px] leading-[22px] list-disc list-inside card__item">подключение и
                                    настройка
                                    принтеров, факсов и другой оргтехники, замена картриджей принтеров;</li>
                                <li class="text-[18px] leading-[22px] list-disc list-inside card__item">обновление
                                    компонентов
                                    компьютера на более мощные и современные, увеличение мощности компьютеров и ноутбуков;
                                </li>
                            </ul>
                        </div>
                    </Card>

                    <Card ImageSrc="img/services/02.jpg" ImageAlt="ustanovka"
                        HeadingText="Установка и настройка операционных систем">
                        <div class="flex card__listW">
                            <ul class="card__list">
                                <li class="text-[18px] leading-[22px] list-disc list-inside card__item">переустановка
                                    Windows, Linux и других систем, восстановление системы и ускорение работы компьютера;
                                </li>
                                <li class="text-[18px] leading-[22px] list-disc list-inside card__item">установка драйверов,
                                    чистка от вирусов и вредоносных программ, оптимизация дисков и работы системы;</li>
                                <li class="text-[18px] leading-[22px] list-disc list-inside card__item">удаление рекламных
                                    баннеров и мешающей рекламы, исправление отображения видео и другие работы;</li>
                            </ul>
                        </div>
                    </Card>


                    <Card ImageSrc="img/services/03.jpg" ImageAlt="ustanovka2"
                        HeadingText="Установка программного обеспечения и сети">
                        <div class="flex card__listW">
                            <ul class="card__list">
                                <li class="text-[18px] leading-[22px] list-disc list-inside card__item">настройка Wifi роутера;</li>
                                <li class="text-[18px] leading-[22px] list-disc list-inside card__item">установка офиса, системных и прикладных программ, а также эксклюзивных профессиональных программ;</li>
                                <li class="text-[18px] leading-[22px] list-disc list-inside card__item">регистрация в госуслугах, налоговой и других системах,  помощь с созданием аккаунтов в социальных сетях, мессенджерах и т.д.;</li>
                                <li class="text-[18px] leading-[22px] list-disc list-inside card__item">обучение работе в различных программах и системах;</li>
                           </ul>
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    </div>
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
<style lang="scss"></style>