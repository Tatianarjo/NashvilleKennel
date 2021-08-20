import { useHistory, Link } from 'react-router-dom'
import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalList = () => {
  // Invoke the useHistory() hook function
  
  const history = useHistory()
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getAnimals()
  }, [])


  return (
    <>
    <h2>Animals</h2>
    <button onClick={
      () => history.push("/animals/create")
    }>
          Make Reservation
    </button>
     <section className="animals">
        {
          animals.map(animal => {
            return (
              <div className="animal"> 
               <Link to={`/animals/detail/${animal.id}`} key={animal.id}>{animal.name}</Link>
              </div>
             
            )
          })
        }
      </section>
    </>
  )
}
