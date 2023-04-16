<template>
    <div class="block1">
        <div class="block1__container _container">
            <div class="sm:flex mb-[calc(84px+8.54vw)] justify-between block1__body">

                <div class="max-w-[644px]">

                    <Heading1>Компью<wbr>терный<br> мастер</Heading1>

                    <Paragraph class="mb-[42px]">Выполняю работы по техническому обслуживанию и ремонту
                        компьютеров, ноутбуков, переустановке
                        операционной системы(Windows, Linux), установке программ, чистке и антивирусной защите
                        компьютера.<br><br>

                        Так же могу помочь выбрать компьютер при покупке, можем собрать вариант из отдельных компонентов
                        либо выбрать по необходимым вам параметрам.<br><br>

                        Если вам нужна помощь, оставьте заявку, и мастер сам с вами свяжется и обсудит все детали.
                        Вы так же можете позвонить по телефону, написать в мессенджерах Telegram или Вконтакте.</Paragraph>

                    <div class="mb-3 flex gap-x-[22px] button__group">
                        <ButtonGreen value="Оставить заявку"></ButtonGreen>
                        <ButtonWhite value="Позвонить по телефону">Позвонить по телефону</ButtonWhite>
                    </div>

                </div>

                <MyTransitionRoot>
                    <Shadow>
                        <div class="master__imgW"><img src="~/assets/img/master/01.jpg" alt="master" class="master__img">
                        </div>
                    </Shadow>
                </MyTransitionRoot>

            </div>
        </div>
    </div>
</template>


<!-- component script -->
<script>

export default {
    /* passed props */
    props: {},
    /*     data: () => ({
        }), */
    /* js code */
    mounted() {
    },
    methods: {},
    components: {}
}
</script>

<!-- component style -->
<style lang="scss"></style>