import { Button } from "react-bootstrap";

export default function Link({ logo, text, link }) {
  console.log({ text });
  return (
    <Button className="links">
      <a href={link}>
        <img src={logo} alt="" width={25} />
        {text}
      </a>
    </Button>
  );
}
