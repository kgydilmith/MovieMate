import axios from 'axios'

export const getallmovies = async () => {
  const res = await axios.get("http://localhost:5001/movie")
    .catch((err) => console.log(err));

  if (!res || res.status !== 200) {
    return console.log("no data");
  }

  const data = await res.data;
  return data;
};
