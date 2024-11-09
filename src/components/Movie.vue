<script setup>
  import { useMovieStore } from "../stores/MovieStore";
  import { useSearchStore } from "../stores/SearchStore";

  const movieStore = useMovieStore();
  const searchStore = useSearchStore();

  const props = defineProps({
    movie: {
      type: Object,
      required: true,
      default: () => {},
    },
    isSearch: Boolean,
  });

  const toggleWatched = (id) => {
    movieStore.toggleWatched(id);
  };

  const deleteMovie = (movie) => {
    if (movie.added) movie.added = false;
    movieStore.deleteMovie(movie.id);
  };

  const addMovie = (movie) => {
    if (!movie.added) movie.added = true;
    searchStore.addMovies(movie);
  };
</script>

<template>
  <div class="movie">
    <div class="movie-img">
      <img
        :src="movie.img ? movie.img : '/empty.png'"
        :alt="movie.name"
      />
    </div>

    <div class="movie-content">
      <div class="movie-name">
        {{ movie.name }} ({{ movie.year }})
      </div>

      <div class="movie-desc">
        {{ movie.short_description || "Описание отсутствует" }}
      </div>

      <div
        v-if="!isSearch"
        class="movie-buttons"
      >
        <button
          class="btn movie-buttons-watched"
          @click="toggleWatched(movie.id)"
        >
          <span>
            {{ !movie.isWatched ? "Просмотрен" : "Не просмотрен" }}
          </span>
        </button>

        <button
          class="btn movie-buttons-delete"
          @click="deleteMovie(movie)"
        >
          Удалить
        </button>
      </div>

      <div
        v-else
        class="movie-buttons"
      >
        <button
          v-if="!movie.added"
          class="btn btn_green movie-buttons-add"
          @click="addMovie(movie)"
        >
          Добавить
        </button>

        <button
          v-else
          class="btn movie-buttons-delete"
          style="width: 100%"
          @click="deleteMovie(movie)"
        >
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .movie {
    display: flex;
    flex-direction: column;
    border: 2px solid #efefef;
    padding: 10px;
    border-radius: 10px;
    width: auto;
    max-width: 400px;

    @media (width < 490px) {
      max-width: 100%;
    }
  }

  .movie-img {
    width: 100%;
    height: 250px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }

    @media (width < 768px) {
      height: 200px;
    }

    @media (width < 490px) {
      height: 250px;
    }

    @media (768px < width < 1024px) and (orientation: landscape) {
      height: 130px;
    }
  }

  .movie-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .movie-name {
    font-size: 20px;
    margin: 10px 0 20px 0;
  }

  .movie-desc {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .movie-buttons {
    margin-top: auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 5px;
  }

  .btn {
    border: none;
    width: 50%;
    height: 35px;
    font-size: 12px;
    border-radius: 5px;
    cursor: pointer;
    background: #efefef;
  }

  .movie-buttons-add {
    width: 100%;
    background: #37df5c;
  }

  .movie-buttons-watched {
    color: #fff;
    background: #1eb4c3;
  }

  .movie-buttons-watched__icon {
    width: 15px;
    margin-left: 10px;
  }

  .movie-buttons-delete {
    color: #fff;
    background: #ff2a2a;
  }

  @media (hover: hover) {
    .btn:hover {
      opacity: 0.7;
    }
  }
</style>
