import './App.css';
import IconAvatar from "./components/IconAvatar/IconAvatar";
import Form from "./components/Form/Form";
import ListCard from "./components/ListCard/ListCard";
import {useState} from "react";

function App() {
    const handleCreateCard = (evt) => {
        switch (evt.genderValue) {
            case "Masculino":
                setManValue([...manValue, evt])
                break;
            case "Feminino":
                setWomanValue([...womanValue, evt])
                break;
            default:
                console.log("Error in object -->", evt)
        }
    }

    const removeValue = (gender, key) => {
        switch (gender) {
            case "Masculino":
                setManValue([...manValue.filter(item => item.key !== key)])
                break;
            case "Feminino":
                setWomanValue([...womanValue.filter(item => item.key !== key)])
                break;
            default:
                console.log("Error in object -->", key)
        }
    }

    const [manValue, setManValue] = useState([])
    const [womanValue, setWomanValue] = useState([])

    return (
        <div>
            <header>
                <div className="App">
                    <IconAvatar/>
                </div>
            </header>

            <body>
            <Form onCreateCard={evt => handleCreateCard(evt)}/>
            <div className="Card">
                <ListCard name="Homens" list={manValue} onRemove={removeValue}/>
                <ListCard name="Mulheres" list={womanValue} onRemove={removeValue}/>
            </div>
            </body>

            <footer>

            </footer>
        </div>
    );
}

export default App;
