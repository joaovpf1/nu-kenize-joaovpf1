import style from './cardList.module.scss'

export const CardList = ({ name, value, type, removeCard, id }) => {
    return (
        <li className={type === "Entrada" ? style.cardContainer : style.cardContainerGrey}>
            <div className={style.cardDescription}>
                <h2>{name}</h2>
                <p>{type}</p>
            </div>

            <div className={style.cardValue}>
                <p>{Number(value).toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })}</p>
                <button type='submit' onClick={() => removeCard(id)}>Excluir</button>
            </div>
        </li>
    )
}