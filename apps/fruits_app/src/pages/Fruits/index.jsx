import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Fruits = () => {
  const [fruits, setFruits] = useState([]);


  useEffect(()=>{
    axios({
        method: "GET",
        url: "/server/fruits",
    }).then((res)=>{
        console.log(res.data);
        setFruits(res.data)
    })

},[])
  return (
    <div>Show all fruits:
      {fruits.map((fruit) => <div key={JSON.stringify(fruit)}>
      <div>{fruit.name}</div>
      <div>{fruit.color}</div>
      <div>{fruit.age}</div>
      </div>)}
       </div>
  )
}

export default Fruits