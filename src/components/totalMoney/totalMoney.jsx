import style from './totalMoney.module.scss'

export const TotalMoney = ({ totalValue }) => {
    return (
        <section className={style.sumContainer}>
            <div>
                <h2>Valor total:</h2>
                <span>{Number(totalValue).toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <p>O valor se refere ao saldo</p>
        </section>
    )
}