<template>
  <div class="movies__wrapper">
    <ul class="movies__list">
      <li v-for="movie in movies" :key="movie.id" :movie="movies" class="movies__card">
        <a href="#" class="movies__card-link">
          <img src="" alt="" class="movies__card-image" />
          <div class="movies__card-content">
            <h3 class="movies__card-title">{{ movie.title }}</h3>
            <span class="movies__card-genre"></span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
// import MovieCard from './MovieCard.vue';

export default {
  // components: { MovieCard },
  props: ['movie'],
  data() {
    return {
      movies: [],
      pages: '',
      results: '',
    };
  },
  created() {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a395b9a66cdc24df88cfe18f7ca4e4fc&language=en-GB&page=1')
      .then((res) => {
        this.movies = res.data.results;
        console.table(this.movies);
      })
      .catch(error => console.log(error));
  },
};
</script>
