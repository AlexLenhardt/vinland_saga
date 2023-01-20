import './ListCard.css'

const ListCard = (props) => {
    return (
        <div>
            <span>{props.name}</span>
            <ul>
                {props.list.map(person => {
                    return <li key={person.key}>{person.nameValue}
                        <span className="delete">
                            <button onClick={props.onRemove(person.key)}>X</button>
                    </span>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ListCard