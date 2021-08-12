import { useHistory } from 'react-router-dom'
import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()
  }, [])



  return (
    <>
    <h2>Employees</h2>
    <button onClick={
      () => history.push("/employees/create")
    }>
      Add Employee
    </button>
    <section className="employees">
    <div className="employees">
      {
        employees.map(employee => {
          return (
            <div className="employee" id={`employee--${employee.id}`}>
              <div className="employee__name">
                Name: { employee.name }
              </div>
              <div className="employee__place">
                Address: { employee.locationId }
              </div>
            </div>
          )
        })
      }
    </div>
    </section>
    </>
  )
    }