export const convertMinutesToHours = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return hours + 'ч ' + remainingMinutes + 'м';
};

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка ${res.status}`);
};

export const findMovies = (moviesList = [], input, checkbox) => {
  return moviesList.filter(
    (movie) =>
      ((!input && movie.nameEN.toLowerCase().includes(input.toLowerCase())) ||
        movie.nameRU.toLowerCase().includes(input.toLowerCase())) &&
      (!checkbox || movie.duration <= 40)
  );
};

export const calculateMovieSettings = () => {
  const viewportWidth = document.documentElement.clientWidth;
  let max = 0;
  let step = 0;

  if (viewportWidth > 1280) {
    max = 12;
    step = 3;
  } else if (viewportWidth > 768 && viewportWidth <= 1280) {
    max = 8;
    step = 2;
  } else {
    max = 5;
    step = 2;
  }

  return { max, step };
};
