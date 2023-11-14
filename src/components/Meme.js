import React from "react";

const Meme = () => {
  // init state management for user input
  const [meme, setMeme] = React.useState({
    topText: "top text",
    bottomText: "bottom text",
    randomImage: "https://i.imgflip.com/25w3.jpg",
  });

  // init state management for data returned from api call
  const [allMemes, setAllMemes] = React.useState([]);

  // api call to get data from meme api ~ top 100 random meme imgs
  // third party libraries to call api - axios {npm install ?} || fetch()
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes))
      .catch((err) => console.log(`Some error occured accessing the server.`));
  }, []);

  console.log(allMemes);

  // event handler functions

  // input fields event handler
  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  // event handler function for button
  function getMemeImage(e) {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    // set rand img to the user state
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form-input"
          placeholder="top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-input"
          placeholder="bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form-button" onClick={getMemeImage}>
          Select a random meme image
        </button>
      </div>

      {/* display section of the meme app */}
      <div className="meme">
        <img src={meme.randomImage} alt="" className="meme-image" />
        <h2 className="meme-text-top">{meme.topText}</h2>
        <h2 className="meme-text-bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
