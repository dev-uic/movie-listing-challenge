<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MovieList />
  </div>
</template>

<script>
import store from '../store';
import MovieList from '@/components/MovieList.vue';

export default {
  name: 'home',
  components: {
    MovieList,
  },
  props: ['movie'],
  data() {
    return {
      listTypes: store.listTypes,
    };
  },
};
</script>
