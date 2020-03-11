<template>
    <div>
        <div class="music-container" id="music-container">
        <div class="music-info">
            <h4 id="title"></h4>
            <div class="progress-container" id="progress-container">
            <div class="progress" id="progress"></div>
            </div>
        </div>

        <audio src="https://phish.in/audio/000/033/404/33404.mp3" id="audio"></audio>

        <div class="img-container">
            <img src="images/ukulele.jpg" alt="music-cover" id="cover" />
        </div>
        <div class="navigation">
            <button id="prev" class="action-btn">
            <i class="fas fa-backward"></i>
            </button>
            <button id="play" class="action-btn action-btn-big">
            <i class="fas fa-play"></i>
            </button>
            <button id="next" class="action-btn">
            <i class="fas fa-forward"></i>
            </button>
        </div>
        </div>
        <input v-model="currentShow" type="text">
        <div class="btn btn--white" v-on:click="getNewShow">Get Random Show</div>
    </div>
</template>

<script>
import axios from 'axios';

let audio, musicContainer, playBtn, prevBtn, nextBtn,
  progress, progressContainer, title, cover = null;
export default {
    mounted: function() {
      musicContainer = document.getElementById('music-container');
      playBtn = document.getElementById('play');
      prevBtn = document.getElementById('prev');
      nextBtn = document.getElementById('next');

      audio = document.getElementById('audio');
      progress = document.getElementById('progress');
      progressContainer = document.getElementById('progress-container');
      title = document.getElementById('title');
      cover = document.getElementById('cover');

      // Event listeners
      playBtn.addEventListener('click', () => {
        const isPlaying = musicContainer.classList.contains('play');

        if (isPlaying) {
          this.pauseSong();
        } else {
          this.playSong();
        }
      });

      // Change song
      // prevBtn.addEventListener('click', prevSong);
      // nextBtn.addEventListener('click', nextSong);

      // Time/song update
      audio.addEventListener('timeupdate', this.updateProgress);

      // Click on progress bar
      progressContainer.addEventListener('click', this.setProgress);

      // Song ends
      // audio.addEventListener('ended', nextSong);

      //this.getNewShow();
    },
    methods: {
      playSong: function() {
        musicContainer.classList.add('play');
        playBtn.querySelector('i.fas').classList.remove('fa-play');
        playBtn.querySelector('i.fas').classList.add('fa-pause');

        audio.play();
      },
      pauseSong: function() {
        musicContainer.classList.remove('play');
        playBtn.querySelector('i.fas').classList.add('fa-play');
        playBtn.querySelector('i.fas').classList.remove('fa-pause');

        audio.pause();
      },
      prevSong: function() {

      },
      updateProgress: function(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
      },
      setProgress: function(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;

        audio.currentTime = (clickX / width) * duration;
      },
      getNewShow: function() {
        console.log("getting new show");
        // const url = "http://phish.in/api/vi/random-show/";
        // this.$http.get(url).then((result) => {
        //   currentShow = result.data.date;
        // }).catch((err) => {
        //   console.log(err);
        // });
      }
    },
    data() {
      return {
        currentShow: "2018-12-31",
        tracks: [],
        currentIndex: 0
      }
    },
    watch: {
      currentShow: async function(newDate, oldDate) {
        const baseUrl = "http://phish.in/api/v1/show-on-date/";
        const url = baseUrl +  newDate;

        this.$http.get(url).then((result) => {
          console.log(result);
        }).catch((err) => {
          console.log(err);
        });

        this.currentIndex = 0;
        //const res = await axios.get(url);
        //console.log(res);
      }
    }
}
</script>

<style lang="scss">
.music-container {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 20px 20px 0 rgba(252, 169, 169, 0.6);
  display: flex;
  padding: 20px 30px;
  position: relative;
  margin: 100px 0;
  z-index: 10;
}

.img-container {
  position: relative;
  width: 110px;
}

.img-container::after {
  content: '';
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  bottom: 100%;
  left: 50%;
  width: 20px;
  height: 20px;
  transform: translate(-50%, 50%);
}

.img-container img {
  border-radius: 50%;
  object-fit: cover;
  height: 110px;
  width: inherit;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: rotate 3s linear infinite;

  animation-play-state: paused;
}

.music-container.play .img-container img {
  animation-play-state: running;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.action-btn {
  background-color: #fff;
  border: 0;
  color: #dfdbdf;
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
  margin: 0 20px;
}

.action-btn.action-btn-big {
  color: #cdc2d0;
  font-size: 30px;
}

.action-btn:focus {
  outline: 0;
}

.music-info {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px 15px 0 0;
  position: absolute;
  top: 0;
  left: 20px;
  width: calc(100% - 40px);
  padding: 10px 10px 10px 150px;
  opacity: 0;
  transform: translateY(0%);
  transition: transform 0.3s ease-in, opacity 0.3s ease-in;
  z-index: 0;
}

.music-container.play .music-info {
  opacity: 1;
  transform: translateY(-100%);
}

.music-info h4 {
  margin: 0;
}

.progress-container {
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  height: 4px;
  width: 100%;
}

.progress {
  background-color: #fe8daa;
  border-radius: 5px;
  height: 100%;
  width: 0%;
  transition: width 0.1s linear;
}
</style>