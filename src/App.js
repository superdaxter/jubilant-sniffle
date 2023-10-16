import LinkHub from "./components/LinkHub";
import bookmarks from "./data/LinkStorage.json";
import { Col } from "react-bootstrap";

export default function App() {
  let categories = {};

  for (let i = 0; i < bookmarks.length; i++) {
    if (!(bookmarks[i].Category in categories)) {
      categories[bookmarks[i].Category] = 1;
    }
  }

  const sections = Object.keys(categories).map((category) => (
    <Col key={"div_" + category}>
      <LinkHub key={category} data={bookmarks} title={category} />
    </Col>
  ));

  return (
    <>
      <div className="container main-box">
        <div className="row">{sections}</div>
      </div>
    </>
  );
}
