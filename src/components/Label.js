export default function Label({ htmlFor, text }) {
    return (
        <label htmlFor={htmlFor}>
            {text}
        </label>
    );
}