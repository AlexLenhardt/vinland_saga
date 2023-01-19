import './App.css';
import IconAvatar from "./components/IconAvatar/IconAvatar";
import Form from "./components/Form/Form";

function App() {
    const handleCreateCard = (evt) => {
      console.log(evt)
    }

    return (
        <div>
            <header>
                <div className="App">
                    <IconAvatar/>

                </div>
            </header>

            <body>
                <Form onCreateCard={evt => handleCreateCard(evt)}/>
            </body>

            <footer>

            </footer>
        </div>
    );
}

export default App;
