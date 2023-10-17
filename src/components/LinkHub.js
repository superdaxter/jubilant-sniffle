import Link from "./Link";
import { ListGroup } from "react-bootstrap";

export default function LinkHub({ data, title }) {
  var filteredData = data.filter(function (e) {
    return e.Category === title;
  });

  //fix links for images
  for (let i = 0; i < filteredData.length; i++) {
    filteredData[i].icon = filteredData[i].Text.toLowerCase() + ".ico";
  }

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
      return null;
    });
    return images;
  }

  const images = importAll(
    require.context("../assets", false, /\.(png|ico|jpe?g|svg)$/)
  );

  const subSections = filteredData.map((d, index) => (
    <Link
      key={crypto.randomUUID()}
      logo={images[d.icon]}
      text={d.Text}
      link={d.link}
    />
  ));

  return (
    <>
      <h4 className="sub-title">{title}</h4>
      <ListGroup className="link-hub">{subSections}</ListGroup>
    </>
  );
}
