import React, { useState } from "react";
import bookmarks from './data/LinkStorage.json';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import all components
// import LinkHub from "./components/LinkHub";
import Link from "./components/Link";

export default function App() {
  return (
    <>
      <div>
        <ul>{bookmarks.map(d => (<a key={d.Link} href={d.Link} className="links">{d.Text}</a>))}</ul >
      </div>
    </>
  );
}
