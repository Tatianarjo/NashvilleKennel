import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import "./Location.css"
import { useHistory } from 'react-router-dom';

export const LocationForm = () => {
  const { addLocation } = useContext(LocationContext)
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { animals, getAnimals } = useContext(AnimalContext)

  /*
  With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

  Define the intial state of the form inputs with useState()
  */

  const [location, setLocation] = useState({
    name: "",
    address: "",
    employeeId: 0,
    animalId: 0
  });

  const history = useHistory();

  /*
  Reach out to the world and get customers state
  and locations state on initialization.
  */
  useEffect(() => {
    getEmployees().then(getAnimals)
  }, [])

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newLocation = { ...location }
    /* Location is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newLocation[event.target.id] = event.target.value
    // update state
    setLocation(newLocation)
  }

  const handleClickSaveAnimal = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    const employeeId = parseInt(location.employeeId)
    const animalId = parseInt(location.animalId)

    if (employeeId === 0 || animalId === 0) {
      window.alert("Please select an employee and an animal")
    } else {
      //Invoke addAnimal passing the new animal object as an argument
      //Once complete, change the url and display the animal list

      const newLocation = {
        name: location.name,
        address: location.address,
        employeeId: employeeId,
        animalId: animalId
      }
      addLocation(newLocation)
        .then(() => history.push("/locations"))
    }
  }

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location Name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Location name" value={location.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location address:</label>
          <input type="text" id="address" required autoFocus className="form-control" placeholder="Location address" value={location.address} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employee">Assign Employee: </label>
          <select name="employeeId" id="employeeId" className="form-control" value={location.employeeId} onChange={handleControlledInputChange}>
            <option value="0">Select an Employee</option>
            {employees.map(e => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalId">Animal: </label>
          <select name="animal" id="animalId" className="form-control" value={location.animalId} onChange={handleControlledInputChange}>
            <option value="0">Select an animal</option>
            {animals.map(a => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveAnimal}>
        Save Location
          </button>
    </form>
  )
}
