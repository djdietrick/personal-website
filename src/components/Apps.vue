<template>
    <div class="apps">
        <h2 class="apps__title text--primary">Apps</h2>
        <div class="apps__text">
            <!-- <p>I've built a few apps that you are welcome to use and share with your friends!</p> -->
            <h3 class="text--primary">One account works across all of the apps!</h3>
        </div>
        <div class="apps__content">
            <div v-if="user">
                
            </div>
            <div v-else>
                <Auth :loginFunction="loginWithEmail"
                    :signupFunction="signupWithEmail"/>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    computed: {
        ...mapGetters({user: 'getUser'})
    },
    methods: {
        ...mapActions(['loginWithEmail', 'signupWithEmail'])
    }
}
</script>

<style lang="scss">
@import "../styles/main.scss";
.apps {
    min-height: 75vh;
    margin-top: 15rem;
    text-align: center;

    &__title {
        margin-bottom: 5rem;
    }

    &__text > h3 {
        margin-bottom: 2rem;

        &:last-child {
            margin-bottom: 5rem;
        }
    }

}
</style>