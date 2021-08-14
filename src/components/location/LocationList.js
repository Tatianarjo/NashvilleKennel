import { useHistory, Link } from 'react-router-dom'
import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export const LocationList = () => {
  // This state changes when `getAnimals()` is invoked below

  const history = useHistory()
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
  }, [])


  return (
    <>
    <h2>Locations</h2>
    <button onClick={
      () => history.push("/locations/create")
    }>
      Add Location
    </button>
    <section className="locations">
      {
        locations.map(location => {
          return (
            <div className="location">
              <Link to={`/locations/detail/${location.id}`} key={location.id}>{location.name}</Link>
            </div>
          )
        })
      }
    </section>
    </>
  )
}