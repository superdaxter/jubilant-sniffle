import LinkHub from "./components/LinkHub";
import bookmarks from "./data/LinkStorage.json";
import "./style.css";

export default function App() {
  let categories = {};

  for (let i = 0; i < bookmarks.length; i++) {
    if (!(bookmarks[i].Category in categories)) {
      categories[bookmarks[i].Category] = 1;
    }
  }
  console.log(categories);

  return (
    <>
      <div className="container main-box">
        <div className="row">
          {Object.keys(categories).map((category, index) => {
            return (
              <>
                <div className="col-4" key={crypto.randomUUID()}>
                  <LinkHub key={category} data={bookmarks} title={category} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
