// import imageTest from "../assets/twitch.ico";

import { ListGroup, ListGroupItem } from "react-bootstrap";

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
    });
    return images;
  }

  const images = importAll(
    require.context("../assets", false, /\.(png|ico|jpe?g|svg)$/)
  );

  return (
    <>
      <h4 className="sub-title">{title}</h4>
      <div className="col-align">
        <div className="link-hub">
          <ListGroup>
            {filteredData.map((d, index) => (
              <ListGroupItem key={d.Text}>
                <a href={d.Link}>
                  <img src={images[d.icon]} alt="" width={25} />
                  {d.Text}
                </a>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
    </>
  );
}
