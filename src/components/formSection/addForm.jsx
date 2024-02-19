import style from './addForm.module.scss'
import { useState } from 'react'

export const AddForm = ({ addCard }) => {

    const [name, setName] = useState('')
    const [value, setNewValue] = useState('')
    const [type, setType] = useState('Entrada')

    const submit = (event) => {
        event.preventDefault();
        addCard({ name, value, type });
        setName('');
        setNewValue('');
    }

    return (
        <div className={style.formContainer}>
            <form onSubmit={submit}>

                <label>Descrição</label>
                <input type="text" placeholder="Digite aqui sua descrição" value={name} onChange={(e) => setName(e.target.value)} />
                <p>Ex: Compra de roupas</p>

                <label>Valor(R$)</label>
                <input type="number" placeholder="1" value={value} onChange={(e) => setNewValue(e.target.value)} />

                <label>Tipo de valor</label>
                <select name="valor" id="valor" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="Entrada">Entrada</option>
                    <option value="Saida">Saída</option>
                </select>
                <button type="submit">Inserir valor</button>
            </form>
        </div>
    )
}