import { useHistory, Link } from 'react-router-dom'
import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalDetail } from "./AnimalDetail"
import "./Animal.css"

export const AnimalList = () => {
  // Invoke the useHistory() hook function
  
  const history = useHistory()
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext)

  //since you are no longer ALWAYS displaying all of the animals
  const [ filteredAnimals, setFiltered ] = useState([])


  //empty dependency array - useEffect only runs after first render
  useEffect(() => {
    getAnimals()
  }, [])

  //useEffect dependency array with dependencies - will run if dependency changes (state)
  //searTerms will cause a change
  useEffect(() => {
    if (searchTerms !=="") {
      //if the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      //if the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])


  return (
    <>
    <h2>Animals</h2>
    <button onClick={
      () => history.push("/animals/create")
    }>
          Add Animal
    </button>
     <section className="animals">
        {
          filteredAnimals.map(animal => {
            return <AnimalDetail key={animal.id} animal={animal} />
          })
        }
        </section>
      </>
      )
      }
