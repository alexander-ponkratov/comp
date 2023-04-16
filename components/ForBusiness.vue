<template>
    <div class="business">
        <div class="business__container _container">
            <div class="mb-[66px] business__body">

                <Heading1 id="business" class="mb-[21px] text-left">Для бизнеса</Heading1>

                <div class="max-[576px]:flex-col flex gap-x-[134px]">

                    <div class="business__imgW">
                        <Shadow>
                            <MyTransitionRoot>
                                <img src="~/assets/img/bs/01.jpg" alt="business" class="business__img">
                            </MyTransitionRoot>
                        </Shadow>
                    </div>


                    <div class="max-w-[542px] flex flex-col">
                        <Heading2 class="mb-[13px]">Если вы юридическое лицо, индивидуальный предприниматель</Heading2>

                        <Paragraph>Работа со мной может быть для вас очень выгодна!<br><br>

                            Я могу выполнять для вас все те же услуги по ремонту и
                            настройке компьютерной техники, организации и настройке сети, настройке рабочих мест, установку
                            необходимого программного обеспечения.<br><br>

                            Так как я являюсь самозанятым лицом, вам не нужно держать меня в своем штате и платить мне
                            зарплату с различными отчислениями, вы оплачиваете только конкретные выполненные услуги, которые
                            заказываете по мере необходимости.<br><br>

                            Мы так же можем заключить с вами договор, на выполненные услуги выдается платежный документ.
                        </Paragraph>

                    </div>
                </div>
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
}
</script>

<!-- component style -->
<style lang="scss"></style>