import { useState } from "react";

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Table from "./components/Table";

function App() {

  const [input,setInput] = useState({
    initialInvestment:15000,
  annualInvestment:1200,
  expectedReturn:6,
  duration:10,
 })

 const handleChange = (value, field) => {
    setInput(prevInput => ({
      ...prevInput,
      [field]: +value
    }));
  };

  return (
    <>
    <Header/>
    <UserInput input={input} handleChange={handleChange}/>
    <Table input={input}/>
    </>
  )
}

export default App
