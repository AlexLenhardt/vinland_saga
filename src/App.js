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

    const removeValue = (evt) => {
        console.log("key -->", evt)
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
                <ListCard name="Mulheres" list={womanValue}/>
            </div>
            </body>

            <footer>

            </footer>
        </div>
    );
}

export default App;
