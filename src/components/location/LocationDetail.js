import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
    const { locations } = useContext(LocationContext)
    const [ location, setLocation ] = useState({ employee: {}, animal: {} })

    /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
    const { locationId } = useParams();

    useEffect(() => {
        const thisLocation = locations.find(a => a.id === parseInt(locationId)) || { employee: {}, animal: {} }

        setLocation(thisLocation)
    }, [locationId])

    return (
    <section className="location">
        <h3 className="location__name">{ location.name }</h3>
        <div className="location__address">{ location.address }</div>
        <div className="location__employee">Employee: { location.employee.name }</div>
        <div className="location__animal">Animal: { location.animal.name }</div>
    </section>
    )
}