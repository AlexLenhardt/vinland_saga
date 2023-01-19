import './InputField.css'

function InputField(props) {
    return (
        <div className="input-field">
            <span>{props.name}</span>
            <input type={props.type}
                   placeholder={props.placeholder}
                   required={props.required}
                   onChange={evt => props.onChange(evt.target.value)}
                   value={props.value}
            />
        </div>
    );
}

export default InputField;