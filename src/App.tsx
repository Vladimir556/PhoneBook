import {useState} from "react";
import {ContactCard, GamepadCircle, Header} from "./Components";
import useModal from "./hooks/useModal";


function App() {

  const [gamePad, toggleGamePad] = useModal()

  return (
    <>
      <Header/>
      <div style={{display: 'flex', flexDirection: 'column', gap: '2px', margin: '12px 24px'}}>
        {
          Array(20).fill(1).map(el =>
            <ContactCard
              imgSrc={'https://techspaceship.com/img/ninja-background-128.png'}
              name={'Джон Сноу'}
              phone={'+79225351219'}
              address={'Санкт-Петербург ул. Салова д. 4 кв 23'}
              email={'12342@mail.com'}
            />
          )
        }
      </div>
    </>
  )
}

export default App
