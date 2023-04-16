<template>
    <div class="myself">
        <div class="myself__container _container">
            <div class=" myself__body mb-[calc(70px+7.65vw)]">
                <Heading1 id="about">Обо мне</Heading1>
                <div class="max-[576px]:flex-col mb-[79px] flex gap-x-[46px]">
                    <MyTransitionRoot>
                        <Shadow>
                            <div class="myself__imageW"><img src="~/assets/img/myself/01.jpg" alt="myself"
                                    class="myself__image">
                            </div>
                        </Shadow>
                    </MyTransitionRoot>

                    <div class="max-w-[565px] flex flex-col ">
                        <Heading2 class="mb-[40px]">Меня зовут Виталий</Heading2>

                        <Paragraph>Я работаю по городу Строитель и Яковлевскому городскому округу Белгородской
                            области.<br><br>

                            Хорошо разбираюсь в компьютерном железе, сетях, операционных системах, программах и
                            устройствах.<br><br>

                            Являюсь самозанятым лицом, выдаю чеки и гарантию
                            на свою работу. Работаю как с физическими, так и с юридическими лицами, а так же индивидуальными
                            предпринимателями.<br><br>

                            У меня гибкий график работы, в основном работаю вечерами и на выходных. Поэтому, если днем вы на
                            работе, то я приеду вечером, в удобное для вас время.<br><br>

                            Оставляйте заявку на сайте или же звоните по телефону, как вам удобнее!<br><br>
                        </Paragraph>
                    </div>
                </div>
                <Heading2 class="text-center my-0 mx-auto">Мы решим вашу проблему!</Heading2>

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