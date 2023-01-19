import "./InputList.css"

const InputList = (props) => {
    return (
        <div className="input-list">
            <span>{props.name}</span>
            <select onChange={evt => props.onChange(evt.target.value)}>
                {props.list.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}
export default InputList