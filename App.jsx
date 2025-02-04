import { useState } from 'react'
import './App.css'
const FaqItem=({question,answer})=>{
  const[show,setShow]=useState(false)

  const toggleshow=()=>{
    setShow(!show)
  }

  return(
    <div className={`faq-item ${show ? 'active':''}`}>
      <div className="faq-item-header" onClick={toggleshow}>{question}</div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">
          {answer}
        </div>
      </div>
    </div>
  )
}
const FaqAccordian=({data})=>{
  return(
    <div className="faq-accordian">
      <h2>FAGs</h2>
      {data.map((item)=>(<FaqItem key={item.id} question={item.question} answer={item.answer}/>))}
    </div>
  )
}

const data=[
  {id:1,question:"What is React?",answer:'React is a front-end Javascript library for building user interfaces or UI components'},
  {id:2,question:'What are the benefits of React?',answer:'Some of the benefits of React are: It is fast,scalable,modular,easy to  debug,and supports server-side rendering.'},
  {id:3,question:'What are the main concepts of React?',answer:'Some of the main concepts of React are:Components,Props,state,Hooks,Lifecycle methods,and JSX.'},
  {id:4,question:'What are the 4 Hooks in React?',answer:'useState - Lets you track state changes,useEffect - Runs code after render,useContext - Accesses context data,useReducer - Manages complex state logic,useCallback - Caches functions,useMemo - Caches values,useRef - References DOM elements'}
]
function App() {
  return (
    <>
      <div className="app">
        <FaqAccordian data={data}/>
      </div>
    </>
  )
}

export default App
