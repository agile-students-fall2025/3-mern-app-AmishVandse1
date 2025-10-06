import React, { useEffect, useState } from "react";

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5002/about") 
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>About Us</h1>
      <img src={data.imageUrl} alt={data.name} width="200" />
      <h2>{data.name}</h2>
      {data.bio.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

export default About;
