<template>
  <li class="movies__card">
    <a href="#" class="movies__card-link">
      <img src="" alt="" class="movies__card-image" />
      <div class="movies__card-content">
        <h3 class="movies__card-title">{{ movie.title }}</h3>
        <span class="movies__card-genre"></span>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props: ['movie'],
};
</script>
