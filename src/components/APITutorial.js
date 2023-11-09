import React from "react";

// star wars API: https://swapi.dev/api/people
// get data from an API -- fetch(), axios (install axios with npm or yarn)
// when you call a function for event listeners - event parameter
// http ==> (req, res)

const APITutorial = () => {
  const [starWarsData, setStarWarsData] = React.useState({});
  // a variable called counter

  React.useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => setStarWarsData(data))
      .catch((err) => console.log(`Some error occured accessing the server.`));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};

export default APITutorial;
