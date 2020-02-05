<template>
  <div class="home">
    <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle">

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <!--<div class="navigation__background">&nbsp;</div>-->

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="" class="navigation__link">Home</a></li>
                    <li class="navigation__item"><a href="/games" class="navigation__link">Games</a></li>
                </ul>
            </nav>
        </div>
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
                    <div class="col-1-of-2">
                        <img src="@/assets/me_cropped.jpg" alt="Me" class='section-about__photo'>
                    </div>
                    <div class="col-1-of-2 section-about__text">
                        <p class="paragraph--about">
                            I am a developer who loves to build cool shit!
                        </p>
                        <p class="paragraph--about">
                            I attended Stevens Institute of Technology in Hoboken, New Jersey where I got my Masters in Computer Engineering and my Bachelors
                            in Mechanical Engineering. I'm originally from Cape Cod, Massachusetts and am now living in Jersey City, New Jersey.
                        </p>
                        <p class="paragraph--about">
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
                            <i class='fas fa-book project-box__icon'></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Bullet Journal</h3>
                            <p class="paragraph">Task tracker and calendar system based on the pen and paper method. Rapidly log tasks, events, and notes
                              as they happen and track them at daily, monthly, and yearly levels. Learn more about the method <a href="https://bulletjournal.com/pages/learn">here</a>.
                            </p>
                            <p class="paragraph">Technogies used: NodeJS, VueJS, Sass</p>
                            <a href="https://github.com/djdietrick/bulletJournal"><i class="fab fa-github project-box__gitLink"></i></a>
                        </div>
                    </div>
                    
                </div>
            </section>
        </main>
  </div>
</template>

<script>
export default {
}
</script>
