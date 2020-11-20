<template>
    <div class="projects" id="projects">
        <h2 class="projects__title text--primary">Projects</h2>
        <div class="projects__container">
            <div class="projects__list">
                <div v-for="(project, i) in featuredProjects" :key="i" class="projects__list__entry"
                    @click="selectedProjectIndex = i"
                    :class="{ selected: selectedProjectIndex === i}">
                    <p class="text--primary">{{project.title}}</p>
                </div>
            </div>
            <transition name="fade" mode="out-in">
                <ProjectDetails :project="selectedProject" :key="selectedProject.title"/>
            </transition>
        </div>
        <div class="projects__other">
            <div class="projects__other__title" @click="showOtherProjects = !showOtherProjects" >
                <i class="fas fa-caret-down projects__other__title__icon" :class="{open: showOtherProjects}"></i>
                <h3 class="projects__other__title__text">
                    {{showOtherProjects ? 'Less' : 'More'}} projects
                </h3>
            </div>
            <transition name="slide" mode="in-out">
                <div v-if="showOtherProjects" class="projects__other__content">
                    <div class="projects__other__project" v-for="(project, i) in otherProjects" :key="i">
                        <p class="text--primary">{{project.title}}</p>
                        <p class="projects__other__project__description">{{project.description}}</p>
                        <a v-if="project.git" :href="project.git" class="projects__link projects__link--small">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import ProjectDetails from './ProjectDetails.vue';
export default {
    components: {
        ProjectDetails
    },
    data() {
        return {
            projects: [
                {
                    title: "Bullet Journal",
                    description: `Task tracker and calendar system based on the pen and paper method. Rapidly log tasks, events, and notes
                            as they happen and track them at daily, monthly, and yearly levels.`,
                    technologies: ["NodeJS", "Vue", "Sass", "Cloud Run", "Docker"],
                    link: "https://journal.dietrick.dev",
                    git: "https://github.com/djdietrick/bulletJournal",
                    img: "journal.png",
                    featured: true
                },
                {
                    title: "Dash Homepage",
                    description: `Cloud based homepage built using Vue and Firebase Cloud Functions.  Fetches current weather for your location,
                        tracks stock prices, and saves links for later use to save on memory and tabs`,
                    technologies: ["Vue", "Firebase", "Serverless", "Sass"],
                    link: "https://homepage.dietrick.dev",
                    git: "https://github.com/djdietrick/dash-homepage",
                    img: "homepage.png",
                    featured: true
                },
                {
                    title: "Phish.in Player",
                    description: `Anyone who knows me knows I'm a huge Phish fan, and they have a huge amount of fan recorded music on the web.
                        I built a simple audio player that fetches either a random or requested Phish show from a public recording API.`,
                    technologies: ["Vue", "Firebase", "REST API", "Sass"],
                    link: "https://phish.dietrick.dev",
                    git: "https://github.com/djdietrick/phishin-player",
                    img: "phish.png",
                    featured: true
                },
                {
                    title: "Peppy",
                    description: `Stat tracking app for Super Smash Bros Melee. Automatically reads gameplay files generated from the Slippi Gamecube
                     emulator and keep statistics of your play across opponents, characters, stages, and more.`,
                    technologies: ["Electron", "Node", "Vue"],
                    git: "https://github.com/djdietrick/peppy",
                    featured: true
                },
                {
                    title: "Chap App",
                    description: "Simple chat application using a websocket server written with Node and a Vue client",
                    technologies: ["Node", "Websockets", "Vue", "Sass"],
                    git: "https://github.com/djdietrick/chat-app"
                },
                {
                    title: "Noise Monitor",
                    description: `Arduino node network equipped with microphones and radio transceivers that record sound level readings 
                        and report to a central RaspberryPi node. Reports are uploaded to a RESTful API built with Django and can be viewed on a webapp.`,
                    technologies: ["Python", "Django", "Arduino/C", "SQLite", "REST API"] ,
                    git: "https://github.com/djdietrick/djangoNoiseMonitoring"
                },
                {
                    title: "Reference",
                    description: "Collection of references and notes for all different kinds of languages and frameworks.",
                    technologies: ["Rust", "Typescript"],
                    git: "https://github.com/djdietrick/reference"
                },
                {
                    title: "Dash-auth",
                    description: "Models, routes, middleware, and front-end components used for authentication.",
                    technologies: ["Node", "MongoDB", "Express", "Vue"],
                    git: "https://github.com/djdietrick/dash-auth"
                },
                {
                    title: "Dash-scss",
                    description: "NPM utility for initializing an SCSS scaffold in a new project from defaults",
                    technologies: ["Node", "NPM", "SCSS"],
                    git: "https://github.com/djdietrick/dash-scss"
                },
                {
                    title: "Theme Tester",
                    description: `Application that demonstrates all colors, texts, and other theme components to quickly iterate and find
                     and find new color schemes for applications.`,
                    technologies: ["Vue", "SCSS"],
                    git: "https://github.com/djdietrick/theme-tester"
                },
                {
                    title: "Dash-vue",
                    description: "Collection of vue components with some base styling and behavior, but mostly meant to be reusable and customizable using slots",
                    technologies: ["Vue", "SCSS", "Javascript"],
                    git: "https://github.com/djdietrick/dash-vue"
                }
            ],
            selectedProjectIndex: 0,
            showOtherProjects: false
        }
    },
    computed: {
        featuredProjects() {
            return this.projects.filter(project => { if(project.featured) return project; });
        },
        otherProjects() {
            return this.projects.filter(project => { if(!project.featured) return project; });
        },
        selectedProject() {
            return this.featuredProjects[this.selectedProjectIndex];
        }
    }
}
</script>

<style lang="scss">
@import "../styles/main.scss";

.projects {
    margin: 5rem;
    position: relative;
    height: min-content;
    text-align: center;

    @media only screen and (max-width: $bp-small) {
        margin-top: 15rem;
    }

    &__title {
        margin-bottom: 5rem;
    }

    &__container {
        display: grid;
        grid-template-columns: 1fr 4fr;
        grid-gap: 4rem;
        
        @media only screen and (max-width: $bp-small) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 2.3fr;
        }

    }

    &__list {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-items: stretch;

        &__entry {
            text-align: center;
            padding: 2rem;
            transition: 0.1s ease-in-out;
            border: 1px solid rgba($color-primary, 0.3);
            border-radius: 0.5rem;
            cursor: pointer;

            &:not(:last-child) {
                margin-bottom: 1rem;
            }

            &:hover {
                border: 1px solid rgba($color-primary, 0.5);
                background-color: rgba($color-primary, 0.1);
            }
        }
    }

    &__other {

        &__title {
            color: $color-primary;
            margin-bottom: 3rem;
            margin-top: 5rem;
            cursor: pointer;
            transition: 0.2s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;

            &__text {
                color: $color-primary;
                transition: 0.2s ease-in-out;
                &:hover {
                    color: $color-white;
                }
            }

            &__icon {
                font-size: 2rem;
                margin-right: 1.5rem;
                transition: 0.2s ease-in-out;
                transform: rotate(-90deg);
            }

            &:hover {
                color: $color-white;
                transform: scale(1.03);
            }
        }

        &__content {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 2rem;
            margin-top: 4rem;

            @media only screen and (max-width: $bp-small) {
                grid-template-columns: 1fr;
            }
        }
        
        &__project {
            padding: 2rem;
            //border: 1px solid rgba($color-primary, 0.5);
            background-color: rgba($color-area, 0.8);
            box-shadow: 0 0.5rem 1rem rgba($color-black,.2);
            border-radius: 0.5rem;
            transition: 0.2s ease-in-out;
            position: relative;

            &:hover {
                transform: translateY(-3px);
                background-color: rgba($color-area, 1);
                box-shadow: 0 1rem 2rem rgba($color-black,.2);
            }

            &__description {
                margin-top: 0.5rem;
                font-size: 1.4rem;
                text-align: start;
            }
        }
    }

    &__link {
        font-size: 2.7rem;
        transition: all 0.2s;
        opacity: 0.7;

        &--small {
            font-size: 2rem;
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            @include clearfix;
        }

        &:hover {
            color:white;
        }
        
        &:not(:last-child) {
            margin-right: 2rem;
        }
    }
}

.selected {
    border: 1px solid rgba($color-primary, 0.5);
    background-color: rgba($color-primary, 0.2);
}

.open {
    transform: rotate(0deg)
}


</style>
