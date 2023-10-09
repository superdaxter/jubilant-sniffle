import LinkHub from './components/LinkHub';
import bookmarks from './data/LinkStorage.json';
import './style.css';

export default function App() {
  var temp = {};
  var categories = [];

  for (var bookmark, i = 0; (bookmark = bookmarks[i++]);) {
    var category = bookmark.Category;
    if (!(category in temp)) {
      temp[category] = 1;
      categories.push(category);
    }
  }

  const linkHubs = []
  for (let i = 0; i < categories.length; i++) {
    linkHubs.push(<LinkHub data={bookmarks} title={categories[i]} />)
  }

  return (
    <>
      <div className="container main-box">
        {categories.map((category, index) => {
          return <LinkHub key={category} data={bookmarks} title={category} />
        })}
      </div>
    </>
  );
}
