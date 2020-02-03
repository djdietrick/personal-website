<template>
  <div class="home">
     <header class="header">
            <div class="header__text-box u-center-text">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">David Dietrick</span>
                    <span class="heading-primary--sub">Software Developer</span>
                </h1>
                <!--<hr>-->
                <div class="linkList">
                    <a href="https://github.com/djdietrick/" class="linkList__link"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/djdietrick/" class="linkList__link"><i class="fab fa-linkedin"></i></a>
                    <a href="https://www.phish.net/user/djdietrick/" class="linkList__link"><i class="fas fa-fish"></i></a>
                </div>

                <!--<a href="#section-tours" class="btn btn--white btn--animated">Discover our tours</a>-->
            </div>
        </header>

        <main>
            <section class="section-about">
                <div class="u-center-text u-margin-bottom-medium">
                    <h2 class="heading-secondary">
                        About me
                    </h2>
                </div>

                <div class="row">
                    <div class="col-1-of-2 section-about__photo">
                        <img src="me.jpg" alt="Me" class='section-about__photo'>
                    </div>
                    <div class="col-1-of-2 section-about__text">
                        <p class="paragraph">
                            I am a developer who loves to build cool shit!
                        </p>
                        <p class="paragraph">
                            I attended Stevens Institute of Technology in Hoboken, New Jersey where I got my Masters in Computer Engineering and my Bachelors
                            in Mechanical Engineering. I'm originally from Cape Cod, Massachusetts and am now living in Jersey City, New Jersey.
                        </p>
                        <p class="paragraph">
                            I'm a huge fan of Phish and all live music
                        </p>
                    </div>
                </div>
            </section>

            <section class="section-projects">
                <div class="u-center-text u-margin-bottom-medium">
                    <h2 class="heading-secondary heading-secondary--white">Projects</h2>
                </div>

                <div class="row">
                    <div class="col-1-of-3">
                        <div class="project-box">
                            <i class='fas fa-gamepad project-box__icon'></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">SSBM Stat Tracker</h3>
                            <p class="paragraph">Super Smash Bros Melee stat tracker. Keeps track of a player's win-loss record versus other players, against 
                                different characters, stage statistics, and more. Uses Slippi file API to automatically upload games and extract stats. Work in progress!</p>
                            <p class="paragraph">Technogies used: NodeJS, VueJS, Sass</p>
                            <a href="https://github.com/djdietrick/meleeStatTracker"><i class="fab fa-github project-box__gitLink"></i></a>
                        </div>
                    </div>
                    <div class="col-1-of-3">
                        <div class="project-box">
                            <i class='fas fa-microphone project-box__icon'></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Noise Monitor</h3>
                            <p class="paragraph">Arduino node network equipped with microphones and radio transceivers that record sound level readings 
                                and report to a central RaspberryPi node. Reports are uploaded to a RESTful API built with Django and can be viewed on a webapp.</p>
                            <p class="paragraph">Technogies used: Python (Django), C (Arduino), SQLite, REST</p>
                            <a href="https://github.com/djdietrick/djangoNoiseMonitoring"><i class="fab fa-github project-box__gitLink"></i></a>
                        </div>
                    </div>
                    <div class="col-1-of-3">
                        <div class="project-box">
                            <i class='fas fa-globe project-box__icon'></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Personal Website</h3>
                            <p class="paragraph">This website! Isn't it nice?!</p>
                            <p class="paragraph">Technogies used: Sass, VueJS, HTML</p>
                            <a href="https://github.com/djdietrick/personalWebsite"><i class="fab fa-github project-box__gitLink"></i></a>
                        </div>
                    </div>
                    
                </div>
            </section>
        </main>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
