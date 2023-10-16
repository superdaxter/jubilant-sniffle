export default function Link({ category, text, link }) {
  return (
    <a href={link}>
      <img src="/src/assets/twitch.ico" key={text} />
      {category + text}
    </a>
  );
}
