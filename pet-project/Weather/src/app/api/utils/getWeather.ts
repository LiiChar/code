export default async function getWeather(loc: string)  {
      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${loc}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "03618b3ae3msh3f0a015f36d4f65p1bd114jsnc8e01b9b16de",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
      } catch (error) {
        return null;
      }
}