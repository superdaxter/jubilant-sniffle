import LinkHub from "./components/LinkHub";
import bookmarks from "./data/LinkStorage.json";
import "./style.css";

export default function App() {
  var temp = {};
  var categories = [];

  for (var bookmark, i = 0; (bookmark = bookmarks[i++]); ) {
    var category = bookmark.Category;
    if (!(category in temp)) {
      temp[category] = 1;
      categories.push(category);
    }
  }

  return (
    <>
      <div className="container main-box">
        <div className="row">
          {categories.map((category, index) => {
            return (
              <>
                <div className="col-4">
                  <LinkHub key={index} data={bookmarks} title={category} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
