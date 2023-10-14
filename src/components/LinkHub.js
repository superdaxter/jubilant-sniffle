export default function LinkHub({ data, title }) {
  var filteredData = data.filter(function (e) {
    return e.Category === title;
  });

  return (
    <>
      <h4 className="sub-title">{title}</h4>
      <div className="col-align">
        <div className="link-hub">
          <ul>
            {filteredData.map((d) => (
              <a key={d.Link} href={d.Link} className="links">
                <img src="" alt="" />
                {d.Text}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
