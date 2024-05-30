import { defineStore } from "pinia";

const url = "https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=";

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    loader: false,
    movies: []
  }),

  actions: {
    async getMovies(search) {
      this.loader = true;
      const res = await fetch(`${url}${search}`, {
        headers: {
          'X-API-KEY': 'T4Z1TPA-PAT4SN1-PW58S2K-J4400F0'
        }
      })
      const data = await res.json();
      console.log(data);
      this.movies = data.docs.map((obj) => {
        return {
          id: obj.id,
          name: obj.name,
          img: obj.poster.previewUrl,
          rating: obj.internalRating,
          description: obj.description,
          short_description: obj.shortDescription,
          year: obj.year
        }
      });

      console.log('Movies: ', this.movies);
      this.loader = false;
    }
  }
});


// Модель:
// {
//   id: "obj.id",
//   name: 'obj.name',
//   img: 'obj.poster.previewUrl',
//   rating: 'obj.internalRating',
//   description: 'obj.description',
//   short_description: 'obj.shortDescription',
//   year: 'obj.year',
// }
