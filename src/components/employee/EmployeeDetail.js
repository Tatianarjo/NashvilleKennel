import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams } from "react-router-dom"

export const EmployeeDetail = () => {
    const { employees } = useContext(EmployeeContext)
    const [ employee, setEmployee ] = useState({ location: {}, customer: {} })

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { employeeId } = useParams();

    useEffect(() => {
        const thisEmployee = employees.find(a => a.id === parseInt(employeeId)) || { location: {}}

        setEmployee(thisEmployee)
    }, [employeeId])

    return (
    <section className="animal">
        <h3 className="employee__name">{ employee.name }</h3>
        <div className="employee__place">{ employee.place }</div>
        <div className="employee__location">Location: { employee.location.name }</div>
    </section>
    )
}