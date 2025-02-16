import React, { useState } from "react";

const Funfact = () => {
  //use effect
  const [facts, setFacts] = useState("");
  //make api request
  const getFact = async () => {
    const response = await fetch(
      "https://uselessfacts.jsph.pl/api/v2/facts/random",
      {
        method: "GET",
      }
    );
    const json = await response.json();
    const newFact = json.text;
    //console.log(facts);
    setFacts(newFact);
    return () => null;
  };

  React.useEffect(() => {
    getFact();
  }, []);
  //get response as state variable
  return (
    <div className="container">
      <div class="row justify-content-start">
        <div class="col-1">Fun fact : </div>
        <div class="col-11">{facts}</div>
      </div>
    </div>
  );
};
export default Funfact;
