<template>
<div>
  <!-- <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle">

        <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
        </label>

        <nav class="navigation__nav">
            <ul class="navigation__list">
                <li class="navigation__item"><a href="" class="navigation__link">Home</a></li>
                <li class="navigation__item"><a href="http://phish.dietrick.dev" class="navigation__link">Phish Player</a></li>
                <li class="navigation__item"><a href="" class="navigation__link">More Coming Soon!</a></li>
            </ul>
        </nav>
    </div> -->
  
  <div class="home">
     <header class="header">
            <div class="header__text-box u-center-text">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">David Dietrick</span>
                    <span class="heading-primary--sub">Software Developer</span>
                </h1>
                <div class="linkList">
                    <a href="https://github.com/djdietrick/" class="linkList__link"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/djdietrick/" class="linkList__link"><i class="fab fa-linkedin"></i></a>
                    <a href="https://www.phish.net/user/djdietrick/" class="linkList__link"><i class="fas fa-fish"></i></a>
                </div>

            </div>
        </header>

        <main>
            <section class="section-about">
                <div class="u-center-text u-margin-bottom-medium">
                    <h2 class="heading-secondary">
                        About me
                    </h2>
                </div>
                <div class="section-about__container">
                    <div class="section-about__text">
                        <p class="paragraph paragraph--about">
                            Hi! I'm David, a software engineer based out of Jersey City, NJ. I have a passion for backend development as well as a drive to learn
                            more about all areas of computer science. 
                        </p>
                        <p class="paragraph paragraph--about">
                            I attended <a href="http://www.stevens.edu">Stevens Institute of Technology</a> in Hoboken, New Jersey where I got my Masters in Computer Engineering and my Bachelors
                            in Mechanical Engineering. After Stevens I began working for <a href="http://www.rebarsys.com">Rebar Systems</a> building robust and efficient backends to support some of
                            the biggest hedge funds in the tristate area.
                        </p>
                        <!-- <p class="paragraph--about">
                            I'm also a huge fan of live music and you can usually find me at any local Phish show!
                        </p> -->
                    </div>
                    <img src="@/assets/me_cropped.jpg" alt="Me" class='section-about__photo'>
                </div>
            </section>

            <section class="section-projects">
                <div class="u-center-text">
                    <h2 class="section-projects__header heading-secondary heading-secondary--white">Projects</h2>
                </div>
                <div class="section-projects__container">
                    <div class="project-box">
                        <i class='fas fa-book project-box__icon'></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Bullet Journal</h3>
                        <p class="paragraph">Task tracker and calendar system based on the pen and paper method. Rapidly log tasks, events, and notes
                            as they happen and track them at daily, monthly, and yearly levels. Learn more about the method <a href="https://bulletjournal.com/pages/learn">here</a>.
                        </p>
                        <p class="paragraph">Technogies used: NodeJS, VueJS, Sass</p>
                        <div class="project-box__links">
                            <a href="https://journal.dietrick.dev"><i class="far fa-eye project-box__link"></i></a>
                            <a href="https://github.com/djdietrick/bulletJournal"><i class="fab fa-github project-box__link"></i></a>
                        </div>
                    </div>
                    <div class="project-box">
                        <i class='fas fa-gamepad project-box__icon'></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">SSBM Stat Tracker</h3>
                        <p class="paragraph">Super Smash Bros Melee stat tracker desktop application. Keeps track of a player's win-loss record versus other players, against 
                            different characters, stage statistics, and more. Uses Slippi file API to automatically parse games and extract stats. Work in progress!</p>
                        <p class="paragraph">Technogies used: Electron, NodeJS, VueJS, Sass</p>
                        <div class="project-box__links">
                            <a href="https://github.com/djdietrick/meleeStatTracker"><i class="fab fa-github project-box__link"></i></a>
                        </div>
                    </div>
                    <div class="project-box">
                        <i class='fas fa-microphone project-box__icon'></i>
                        <h3 class="heading-tertiary u-margin-bottom-small">Noise Monitor</h3>
                        <p class="paragraph">Arduino node network equipped with microphones and radio transceivers that record sound level readings 
                            and report to a central RaspberryPi node. Reports are uploaded to a RESTful API built with Django and can be viewed on a webapp.</p>
                        <p class="paragraph">Technogies used: Python (Django), C (Arduino), SQLite, REST</p>
                        <div class="project-box__links">
                            <a href="https://github.com/djdietrick/djangoNoiseMonitoring"><i class="fab fa-github project-box__link"></i></a>
                        </div>
                    </div>            
                </div>
            </section>

            <!-- <section class="section-resume">
                <div class="u-center-text u-margin-bottom-medium u-margin-top-medium">
                    <h2 class="heading-secondary">
                        Resume
                    </h2>
                </div>
                <div class="resume">
                    <div class="resume__section" id="education">
                        <h2 class="resume__header">Education</h2>
                        <h3 class="resume__header--sub" id="education__header">Stevens Institute of Technology</h3>
                        <p class="resume__text">Masters of Engineering in Computer Engineering, Class of 2017</p>
                        <p class="resume__text">Bachelors of Engineering in Mechanical Engineering, Class of 2017</p>
                        <img src="@/assets/stevens.png" alt="Me" id="education__img">
                    </div>
                </div>
            </section> -->
        </main>
  </div>
</div>
</template>

<script>
export default {
}
</script>
