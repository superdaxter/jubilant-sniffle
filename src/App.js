import React, { useState } from "react";

// Import all components
// import LinkHub from "./components/LinkHub";
import Link from "./components/Link";

export default function App() {
  // const [links, setLinks] = useState([]);
  const data = [
    {
      text: "Twitch",
      link: "https://twitch.com/",
      icon: "twitch.ico"
    }
  ]
  return (
    <>
      <ul>{data.map(d => (<a key={d.text} href={d.link} className="btn">{d.text}</a>))}</ul >
    </>
  );
}
