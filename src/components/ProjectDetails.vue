<template>
    <div class="projects__details">
        <div class="projects__details__container" :class="{ big : project.img === undefined}">
            <h3 class="projects__details__title text--primary">{{project.title}}</h3>
            <p class="projects__details__description">{{project.description}}</p>
            <div class="projects__details__techs">
                <div class="projects__details__tech" 
                    v-for="tech in project.technologies" :key="tech">{{tech}}</div>
            </div>
            <div class="projects__details__links">
                <a v-if="project.link" :href="project.link" class="projects__link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a v-if="project.git" :href="project.git" class="projects__link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
        <img v-if="project.img" :src="`img/${project.img}`" :alt="project.img" class="projects__details__img"/>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            default: {
                title: '',
                description: '',
                technologies: [],
                img: ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";
.projects__details {
    text-align: start;
    position: relative;
    &__title {
        margin-bottom: 2rem;
        font-weight: 300;
    }

    &__container {
        background-color: rgba($color-area, 0.8);
        width: 50%;
        padding: 2rem;
        border-radius: 0.5rem;
        position: relative;
        opacity: 0.8;
        z-index: 3;
        
        @media only screen and (max-width: $bp-small) {
            width: 100%;
        }

    }

    &__description {
        @media only screen and (max-width: $bp-small) {
            width: 100%;
        }
    }

    &__techs {
        display: flex;
        margin-top: 2rem;
    }
    &__tech {
        padding: 0.5rem;
        background-color: $color-grey-6;
        border-radius: 4px;
        opacity: 0.7;
        color: $color-primary;
        font-size: 1.2rem;

        &:not(:last-child) {
            margin-right: 5px;
        }
    }

    &__img {
        opacity: 0.7;
        //width: 50vw;
        height: 35vh;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.3s ease-in-out;
        border-radius: 0.5rem;
        z-index: 0;

        @media only screen and (max-width: $bp-medium) {
            width: 90vw;
            top: 60%;
            @include absCenterHorizontal;
        }

        @media only screen and (min-width: $bp-medium) {
            &:hover {
                z-index: 5;
                opacity: 1;
                transform: scale(1.25) 
                    translateY(-40%) 
                    translateX(-15%);
            }
        }
    }

    &__links {
        display: flex;
        margin-top: 2rem;
        text-align: center;
    }
}

.big {
    width: 100%;
}
</style>


