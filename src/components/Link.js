export default function Link({ text, link, icon }) {
    return (
        <a href={link}><img src='/src/assets/twitch.ico' />{text}</a>
    );
}