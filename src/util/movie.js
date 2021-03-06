export const adaptToClient = (movie) => {
  const adaptedMovie = Object.assign({}, movie, {
    posterImagePath: movie.poster_image,
    previewImagePath: movie.preview_image,
    backgroundImagePath: movie.background_image,
    backgroundColor: movie.background_color,
    videoUrl: movie.video_link,
    previewVideoUrl: movie.preview_video_link,
    score: movie.scores_count,
    runTime: movie.run_time,
    isFavorite: movie.is_favorite
  });

  delete adaptedMovie.poster_image;
  delete adaptedMovie.preview_image;
  delete adaptedMovie.background_image;
  delete adaptedMovie.background_color;
  delete adaptedMovie.video_link;
  delete adaptedMovie.preview_video_link;
  delete adaptedMovie.scores_count;
  delete adaptedMovie.run_time;
  delete adaptedMovie.is_favorite;

  return adaptedMovie;
};
