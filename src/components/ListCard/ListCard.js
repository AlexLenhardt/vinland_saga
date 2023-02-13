import './ListCard.css'

const ListCard = (props) => {
    return (
        <div>
            <span>{props.name}</span>
            <ul>
                {props.list.map(person => {
                    return (person.key !== undefined) &&
                        <li key={person.key} id={person.key}>{person.nameValue}
                            <span className="delete">
                                <button
                                    onClick={() => props.onRemove(person.genderValue, person.key)}>X</button>
                            </span>
                        </li>
                })}
            </ul>
        </div>
    )
}

export default ListCard