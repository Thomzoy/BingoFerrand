<template>
  <main>
    <h1>
      <span>
        <a style="color:#244d66;" href="https://www.franckferrand.com/" title="Franck Ferrand" rel="home">B<span style="color:#728294;">INGO</span> FERRAND</a>
      </span>
    </h1>
    <p>Cliquer pour aligner 5 expressions de notre brave Franck Ferrand !</p>
    <p>Rechargez la page pour mélanger les cartes</p>
    <div class="board">
      <CellButton :word="item" v-for="(item, index) in words" :key="`word-${index}`" />
    </div>
    <span class="test-podcast">
      {{ podcast }}
    </span>
    <iframe v-if="loaded" title='le-podcast' frameborder="0" loading="lazy" id="ausha-vuVx" height="220" style="border: none; width:100%; height:220px" src="https://player.ausha.co/index.html?podcastId=B4ePjTpOYnd4&v=3&playerId=ausha-vuVx"></iframe>
  </main>
</template>

<script>

import axios from 'axios';
import CellButton from '@/components/Cell.vue';

export default {
  name: 'App',
  components: { CellButton },
  data() {
    return {
      podcast: null,
      words: [
        'Un livre qui vient de paraître',
        'Si vous me passez l\'expression',
        'C\'est ce qui s\'appelle avoir ...',
        'Commentaire sur la tenue de Christian Morin',
        'La suite, vous la connaissez !',
        'Est-ce que j\'ai besoin de vous le dire ?',
        'C\'est pas un rigolo !',
        'Vous l\'avez, reconnu...',
        'Anecdote de Christian Morin deja dîte',
        '..., que l\'on salue',
        'L\'orchestre de la Scala de Milan était dirigé par Riccardo Mutti',
        'Aux éditions Perrin',
        'Qui a préparé cette émission',
        'J\'avais déjà eu l\'occasion de vous raconter cette hitoire',
        'Et là, un homme',
        'Ca commence à sentir le roussi !',
        'Il faut l\'imaginer',
        'Dans Historia',
        'Si je puis dire',
        'Ca devient chaud!',
        'Que j\'ai toujours plaisir à citer',
        'Ca ne s\'invente pas',
        'Cela pourra faire l\'objet d\'une prochaine émission',
        'On dirait aujourd\'hui que ...',
        'Le tout-Paris',
      ],
      iframe: {
        src: window.location.href,
        style: null,
        wrapperStyle: null,
      },
    };
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length;
      let randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        // eslint-disable-next-line no-plusplus
        currentIndex--;

        // And swap it with the current element.
        // eslint-disable-next-line no-param-reassign
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    },
    getPodcast() {
      const URL = 'https://www.radioclassique.fr/radio/emissions/franck-ferrand-raconte/';
      axios.get(URL)
        .then((response) => {
          this.podcast = response.status;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    testPod() {
      console.log(axios.get('https://cors-anywhere-herokuapp.com/https://www.radioclassique.fr/radio/emissions/franck-ferrand-raconte/', {
        headers: {
        },
      }).data);
    },
  },
  mounted() {
    const player = document.createElement('script');
    player.setAttribute('src', 'https://player.ausha.co/ausha-player.js');
    document.head.appendChild(player);
    const jq = document.createElement('script');
    jq.setAttribute('src', 'http://code.jquery.com/jquery-latest.min.js');
    document.head.appendChild(jq);
    this.words = this.shuffle(this.words);
    this.testPod();
    this.loaded = true;
  },
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');

* { box-sizing: border-box }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-family: 'League Gothic';
  font-size: 8rem;
  margin: 0;
  line-height: 1.2;
  background-image: linear-gradient(to left,
      #0dc4b7,
      #9a2654,
      #2a47d5,
      #19d519,
      #e9ff00,
      #ff8000,
      #f30a0a
  );
  -webkit-background-clip: text;
  color: transparent;
}
.board {
  margin: 30px auto;
  border: 3px solid black;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
  width: 160 * 5px;
}
</style>
