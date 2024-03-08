import axios from "axios";

export const getAllMusic = async () => {
    const options = {
        method: 'GET',
        url: 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/',
        params: {id: '2396871'},
        headers: {
          'X-RapidAPI-Key': '03618b3ae3msh3f0a015f36d4f65p1bd114jsnc8e01b9b16de',
          'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}
