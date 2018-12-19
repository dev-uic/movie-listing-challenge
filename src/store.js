const store = {
  apiKey: 'a395b9a66cdc24df88cfe18f7ca4e4fc',
  listTypes: [
    {
      title: 'Popular Movies',
      shortTitle: 'Popular',
      query: 'popular',
      type: 'collection',
      isCategory: true,
    },
    {
      title: 'Top Rated Movies',
      shortTitle: 'Top Rated',
      query: 'top_rated',
      type: 'collection',
      isCategory: true,
    },
    {
      title: 'Upcoming Movies',
      shortTitle: 'Upcoming',
      query: 'upcoming',
      type: 'collection',
      isCategory: true,
    },
    {
      title: 'Now Playing Movies',
      shortTitle: 'Now Playing',
      query: 'now_playing',
      type: 'collection',
      isCategory: true,
    },
    {
      title: 'Search Results',
      query: 'search',
      isCategory: false,
    },
    {
      title: 'Your Favorite Movies',
      query: 'favorite',
      isCategory: false,
    },
  ],
  categories: {},
};

// Create categories titles
store.listTypes.forEach((listType) => {
  store.categories[listType.query] = listType.title;
});

export default store;
