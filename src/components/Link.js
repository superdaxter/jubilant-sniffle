export default function Link({ text, link, icon }) {
    return (
        <a href={link}><img src={icon} />{text}</a>
    );
}