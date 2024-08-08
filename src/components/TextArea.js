export default function TextArea({ name, ...rest }) {
    return (
        <textarea name={name} {...rest} ></textarea>
    );
}