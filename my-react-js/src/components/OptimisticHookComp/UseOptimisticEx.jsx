import React from 'react'
import { useState,useOptimistic } from 'react';

const wait =(delay)=> new Promise((res) => setTimeout(res,delay));

export const UseOptimisticEx = () => {
    const [newName, setNewName] = useState("John Doe");
    const [optimisticName, setOptimisticName] = useOptimistic(newName, (current, newName) => newName);

  
  async function changeName(formData) { 
    

    const name = formData.get("name");
    setOptimisticName(name +" by Optimistic");
    await wait(3000);
    setNewName(name +" by SetName");
     // return formData;
    }

  return (  
    <>
    <h2>UseOptimisticEx</h2>

    <form action ={changeName}>
      <input type="text" placeholder="Enter new name" name='name' /><br /><br />
      <button type="submit">Change Name</button>
      <h3>Name: {optimisticName}</h3>
    </form>
    </>
  )
}

export default UseOptimisticEx 