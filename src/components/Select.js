import Option from "./Option";

export default function Select({ name, ...rest }) {

    const options = [
        { value: 'alicante', text: 'Alicante' },
        { value: 'madrid', text: 'Madrid' },
        { value: 'sevilla', text: 'Sevilla' },
        { value: 'valencia', text: 'Valencia' }
    ];

    return (
        <select name={name} {...rest} >
            {options.map((option, index) => (
                <Option key={index} value={option.value} text={option.text} />
            ))}
        </select>
    );
}