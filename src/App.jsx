import { useState } from 'react'
import { Header } from './components/headerSection/header.jsx'
import { AddForm } from './components/formSection/addForm.jsx'
import { TotalMoney } from './components/totalMoney/totalMoney.jsx'
import { CardList } from './components/cardList/cardList.jsx'
import { CardEmpty } from './components/cardEmpty/cardEmpty.jsx'

function App() {
  const [cardList, setCardList] = useState([
    {
      id: 0,
      name: "Salário - Mês: julho",
      value: 1000,
      type: "Entrada"
    },
    {
      id: 1,
      name: "Internet - Mês: julho",
      value: 200,
      type: "Saida"
    },
  ])

  const addCard = (newInfo) => {
    if (newInfo.name !== '' && newInfo.value !== '') {
      const newCard = { ...newInfo, id: crypto.randomUUID() };
      setCardList([...cardList, newCard])
    }
  }

  const removeCard = (removeId) => {
    const filteredList = cardList.filter((card) => card.id !== removeId);
    setCardList(filteredList);
  }

  const sumValue = cardList.reduce((prevValue, card) => {
    return (
      card.type === "Entrada" ? Number(prevValue) + Number(card.value) : Number(prevValue) - Number(card.value)
    )
  }, 0)

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section className='formSection'>
          <AddForm addCard={addCard} />
          {cardList.length > 0 ? (<TotalMoney totalValue={parseFloat(sumValue)} />) : false}
        </section>
        <aside>
          <h1 className='cardList-title'>Resumo financeiro</h1>
          {cardList.length > 0 ? (<ul>
            {cardList.map((card) => {
              return <CardList key={card.id} name={card.name} value={card.value} type={card.type} id={card.id} removeCard={removeCard} />
            })}
          </ul>) :
            (<CardEmpty />)}
        </aside>
      </main>
    </>
  )
}

export default App
