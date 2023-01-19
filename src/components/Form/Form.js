import InputField from "../InputField/InputField";
import './Form.css'
import Button from "../Button/Button";
import {useState} from "react";
import InputList from "../InputList/InputList";

function Form(props) {
    const gender = [
        "Masculino",
        "Feminino"
    ]

    const [nameValue, setNameValue] = useState('Alex Lenhardt')
    const [birthValue, setBirthValue] = useState('2001-07-25')
    const [documentValue, setDocumentValue] = useState('05058129914')
    const [genderValue, setGenderValue] = useState("Masculino")

    const handleOnSubmit = () => {
        props.onCreateCard({
            nameValue,
            documentValue,
            birthValue,
            genderValue
        })
    }

    return (
        <form className="Form" onSubmit={evt => evt.preventDefault()}>
            <div>
                <InputField placeholder="Digite seu nome"
                            name="Nome"
                            required={true}
                            type="text"
                            onChange={value => setNameValue(value)}
                            value={nameValue}
                />
                <InputField placeholder="Informe sua data de nascimento"
                            name="Nascimento"
                            required={true}
                            type="date"
                            onChange={value => setBirthValue(value)}
                            value={birthValue}
                />
                <InputField placeholder="Digite seu CPF"
                            name="CPF"
                            required={true}
                            type="text"
                            onChange={value => setDocumentValue(value)}
                            value={documentValue}
                />
                <InputList name="Sexo"
                           required={false}
                           onChange={value => setGenderValue(value)}
                           value={genderValue}
                           list={gender}
                />
            </div>
            <Button onClick={handleOnSubmit}>Criar</Button>
        </form>
    );
}

export default Form;