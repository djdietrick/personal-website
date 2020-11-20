<template>
    <div class="about" id="about">
        <h2 class="about__title text--primary">About me</h2>
        <div class="about__content">
            <div class="about__text">
                <p>
                    Hi! I'm David, a software engineer based out of Union City, NJ. I have a passion for backend development as well as a drive to learn
                    more about all areas of computer science. 
                </p>
                <p>
                    I attended <a href="http://www.stevens.edu">Stevens Institute of Technology</a> in Hoboken, New Jersey where I got my Masters in Computer Engineering and my Bachelors
                    in Mechanical Engineering. After Stevens I began working for <a href="http://www.rebarsys.com">Rebar Systems</a> building robust and efficient backends to support some of
                    the biggest hedge funds in the tristate area.
                </p>
            </div>
            <div class="about__image">
                <img src="@/assets/me_cropped.jpg" alt="Me" class="about__image__img">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../styles/main.scss";
.about {
    //height: minmax(75vh, min-content);
    min-height: 75vh;
    margin-top: 15rem;
    position: relative;
    text-align: center;

    &__title {
        margin-bottom: 5rem;
    }

    &__content {
        margin-left: 4rem;
        margin-right: 4rem;
        text-align: start;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;

        @media only screen and (max-width: $bp-largest) {
            grid-template-columns: 2fr 1fr;
        }

        @media only screen and (max-width: $bp-medium) {
            grid-template-columns: 1fr;
            grid-template-rows: 30rem min-content;
        }
    }

    &__text {
        margin-left: 4rem;
        @media only screen and (max-width: $bp-small) {
            margin-left: 0;
        }
        p:not(:last-child) {
            margin-bottom: 3rem;
        }
    }

    &__image {
        position: relative;
        
        &__img {
            //width: 75%;
            height: 100%;
            @include absCenter;
            border: 2px solid $color-primary;
            border-radius: 0.5rem;
            opacity: 0.7;
            transition: 0.2s ease-in-out;

            &:hover {
                opacity: 0.9;
            }

            @media only screen and (max-width: $bp-medium) {
                height: 30rem;
                width: 30rem;
            }
        }

        @media only screen and (max-width: $bp-medium) {
            grid-row: 1 / 2;
        }
    }
}

</style>

