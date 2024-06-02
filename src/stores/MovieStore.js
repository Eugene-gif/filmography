import { defineStore } from "pinia";

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [
      // TODO: Переделать модель

      // Актуальная модель:
      // {
      //   id: "obj.id",
      //   name: 'obj.name',
      //   img: 'obj.poster.previewUrl',
      //   rating: 'obj.internalRating || obj.rating.kp',
      //   description: 'obj.description',
      //   short_description: 'obj.shortDescription',
      //   year: 'obj.year',
      // },

      {
        id: "1",
        name: 'Человек-паук',
        img: 'https://image.openmoviedb.com/kinopoisk-images/1946459/428e2842-4157-45e8-a9af-1e5245e52c37/x1000',
        rating: '7.7',
        description: 'Питер Паркер – обыкновенный школьник. Однажды он отправился с классом на экскурсию, где его кусает странный паук-мутант. Через время парень почувствовал в себе нечеловеческую силу и ловкость в движении, а главное – умение лазать по стенам и метать стальную паутину. Свои способности он направляет на защиту слабых. Так Питер становится настоящим супергероем по имени Человек-паук, который помогает людям и борется с преступностью. Но там, где есть супергерой, рано или поздно всегда объявляется и суперзлодей...',
        short_description: 'Школьник-неудачник Питер Паркер становится супергероем. Тоби Магуайр в культовом кинокомиксе Сэма Рэйми',
        year: 2002,
      },
      {
        id: "2",
        name: 'Бэтмен',
        img: 'https://image.openmoviedb.com/kinopoisk-images/6201401/e091e668-b8a3-416d-a6ea-25c1a17b781a/x1000',
        rating: '7.1',
        description: 'После двух лет поисков правосудия на улицах Готэма Бэтмен становится для горожан олицетворением беспощадного возмездия. Когда в городе происходит серия жестоких нападений на высокопоставленных чиновников, улики приводят Брюса Уэйна в самые тёмные закоулки преступного мира, где он встречает Женщину-Кошку, Пингвина, Кармайна Фальконе и Загадочника. Теперь под прицелом оказывается сам Бэтмен, которому предстоит отличить друга от врага и восстановить справедливость во имя Готэма.',
        short_description: 'Школьник-неудачник Питер Паркер становится супергероем. Тоби Магуайр в культовом кинокомиксе Сэма Рэйми',
        year: 2022,
      }
    ],
    activeTab: 2,
  }),

  // Getters рекомендуется использовать тогда, когда мы хотим что-то изменить
  // TODO: Т.е. totalCountMovies можно удалить, большого смысла в этом геттере нет
  getters: {
    watchedMovies() {
      return this.movies.filter((el) => el.isWatched)
    },
    totalCountMovies() {
      return this.movies.length
    }
  },

  // TODO: Actions - используется для изменения какого-нибудь состояния(state)
  // mutations - убрали и в pinia для синхронных и ассинхронных операций используются actions.
  actions: {
    setActiveTab(id) {
      this.activeTab = id;
    },
    toggleWatched(id) {
      const idx = this.movies.findIndex(el => el.id === id);
      this.movies[idx].isWatched = !this.movies[idx].isWatched;
    },
    deleteMovie(id) {
      this.movies = this.movies.filter(el => el.id !== id);
    }
  }
});
