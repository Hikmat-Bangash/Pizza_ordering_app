import React, { useState } from 'react'
import Add from './Add';
import AddButton from './Addbutton';


const AddNewPizza = () => {
    const [close, setClose] = useState(true);
    useState
  return (
    <>
      {<AddButton setClose={setClose} />}
     {!close && <Add setClose={setClose} />}

    </>
  )
}

export default AddNewPizza