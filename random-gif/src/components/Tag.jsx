import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useGif from '../hooks/useGif';

const Tag = () => {
  const [tag, setTag] = useState('');
  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState(false);
  // const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

  // async function fetchData() {
  //   try {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     const { data } = await axios.get(url);
  //     const imageSource = data.data.images.fixed_width_small.url;
  //     setGif(`${imageSource}?${Date.now()}`);
  //   } catch (error) {
  //     console.error("Error fetching GIF:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchData(); // initial fetch without tag
  // }, []);

 const{gif, loading, fetchData } = useGif(tag);

  function clickHandler(tag) {
    fetchData(); // fetch based on current input tag
    console.log("Button clicked with tag:", tag);
  }

  return (
    <div className="w-1/2 bg-blue-950 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold text-white">RANDOM {tag} GIF</h1>

      {loading ? (
        <img src="https://i.gifer.com/YCZH.gif" alt="Loading..." width="100" />
      ) : (
        gif && <img src={gif} width="450px" alt="Random Gif" />
      )}

      <input
        className="w-10/12 text-center text-lg py-2 rounded-lg mb-[3px] bg-amber-50"
        placeholder="Enter a tag like cat, dance, smile..."
        value={tag}
        onChange={(event) => setTag(event.target.value)}
      />

      <button
        onClick={clickHandler}
        className="mb-[20px] w-10/12 bg-blue-300 py-2 text-lg rounded-lg"
      >
        Get Random GIF
      </button>
    </div>
  );
};

export default Tag;
