import axios from "axios";

export const fetchFabrizo = async () => {
  const options = {
    method: "GET",
    url: "https://twitter154.p.rapidapi.com/user/tweets",
    params: {
      username: "FabrizioRomano",
      limit: "40",
      include_replies: "false",
      include_pinned: "false",
    },
    headers: {
      "X-RapidAPI-Key": "82387cf1damsh116d052c22df5efp141526jsn6bf172d5abe0",
      "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
    },
  };
  let filteredData;
  try {
    const response = await axios.request(options);
    const tweetData = response.data.results;
    filteredData = tweetData.map((tweet) => {
      return {
        news: tweet.text,
        source: tweet.source, //
        createdAt: tweet.creation_date,
        mediaUrl: tweet.media_url,
      };
    });
  } catch (error) {
    console.error(error);
  }
  return filteredData;
};
