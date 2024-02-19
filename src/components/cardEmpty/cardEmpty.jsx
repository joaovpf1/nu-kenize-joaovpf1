import style from './cardEmpty.module.scss'

export const CardEmpty = () => {
    return (
        <li className={style.emptyContainer}>
            <p>Você ainda não possui nenhum lançamento.</p>
        </li>
    )
}