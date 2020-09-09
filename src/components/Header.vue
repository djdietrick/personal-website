<template>
    <div class="header">
        <div class="typewriter">
            <h1 class="typewriter__text">David Dietrick</h1>
            <br>
            <h2 class="typewriter__text text--primary">Software Developer</h2>
        </div>
        <div class="header__buttons">
            <a class="btn" href="http://www.github.com/djdietrick">
                <i class="fab fa-github btn__icon"></i>
                <div class="btn__text">Github</div>
            </a>
            <a class="btn" href="http://www.linkedin.com/in/djdietrick">
                <i class="fab fa-linkedin btn__icon"></i>
                <div class="btn__text">Linkedin</div>
            </a>
        </div>
        <div class="header__learn">
            <h3 class="text--primary">Learn More About Me</h3>
            <i class="fas fa-caret-down header__learn__icon"></i>
        </div>
    </div>
</template>

<style lang="scss">
@import "../styles/main.scss";

.header {
    height: 100vh;
    position: relative;

    &__buttons {
        position: absolute;
        @include absCenterHorizontal;
        bottom: 14rem;
        display: flex;
        align-items: stretch;

        .btn:not(:last-child) {
            margin-right: 2rem;
        }

        @media only screen and (max-width: $bp-small) {
            bottom: 15rem;
            flex-direction: column;

            .btn:not(:last-child) {
                margin-right: 0 !important;
                margin-bottom: 2rem;
            }
        }

        animation: fadeIn 1s ease-out;
        animation-delay: 3s;
        animation-fill-mode: backwards;

        
    }

    &__learn {
        position: absolute;
        @include absCenterHorizontal;
        bottom: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        animation: fadeIn 1s ease-out;
        animation-delay: 3.5s;
        animation-fill-mode: backwards;
        white-space: nowrap;

        &__icon {
            font-size: 4rem;
            color: $color-primary;
        }

         @media only screen and (max-width: $bp-small) {
            bottom: 1rem;
         }
    }
}

.typewriter {
    width: min-content;
    @include absCenterHorizontal;
    top: 30%;
}

</style>


