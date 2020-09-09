<template>
    <div class="contact">
        <div class="contact__content">
            <h2 class="contact__title text--primary">Get in touch</h2>
            <form class="form" @submit.prevent="formatAndSubmit">
                <!-- <transition name="fade">
                    <div v-if="error" class="form__error">{{error}}</div>
                </transition>
                <transition name="fade">
                    <div v-if="success" class="form__success">{{success}}</div>
                </transition>
                <div class="form__group">
                    <div class="form__label">Email</div>
                    <input class="form__input" type="text" v-model="email">
                </div>
                <div class="form__group">
                    <div class="form__label">Name</div>
                    <input class="form__input" type="text" v-model="name">
                </div>
                <div class="form__group">
                    <div class="form__label">Message</div>
                    <textarea class="form__input form__textarea" v-model="message" cols="30" rows="10"></textarea>
                </div> -->
                <a class="btn contact__btn" href="mailto:djdietrick@gmail.com">
                    <div class="btn__text">Send Me an Email</div>
                </a>
            </form>
        </div>

        <a class="contact__footer" href="https://github.com/djdietrick/personal-website">
            Designed and Built by David Dietrick
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
            error: '',
            success: ''
        }
    },
    methods: {
        formatAndSubmit() {
            this.error = '';

            

            this.success = 'Message Sent!'
            setTimeout(() => {this.success = ''}, 3000);
        }
    }
}
</script>

<style lang="scss">
@import "../styles/main.scss";

.contact {
    text-align: center;
    margin: 0 auto;
    margin-top: 20rem;
    height: 40vh;
    width: 50vw;

    &__content {
        margin-bottom: 10rem;
    }

    &__btn {
        width: 20rem;
        align-self: center;
        margin-top: 5rem;
    }

    &__footer {
        display: inline-block;
        margin-bottom: 3rem;
        color: $color-grey-1;
        transition: 0.2s ease-in-out;

        &:hover {
            color: $color-primary;
        }
    }
}

</style>


