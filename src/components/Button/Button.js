import "./Button.css"

const Button = (props) => {
    return (
        <button onClick={props.onClick} className="button-styled">{props.children}</button>
    )
}

export default Button