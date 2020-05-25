import fetchData from './Data/fetchData';

const showData = async () => {
  const music = await fetchData('./music.json');
  const cinema = await fetchData('./cinema.json');

  console.log(music);
  console.log(cinema);
}

showData();
