import React from "react"
import { Route } from "react-router-dom"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { AnimalForm } from "./animal/AnimalForm"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ Thisis the NSS Kennels Link*/}
            <LocationProvider>
                <EmployeeProvider>
                    <AnimalProvider>
                        <CustomerProvider>


                            <Route path="/">
                                <LocationList />
                            </Route>


                            {/* This is the Animals Link.Render the animal list when http://localhost:3000/animals */}
                            <Route exact path="/animals">
                                <AnimalList />
                            </Route>

                            <Route path="/animals/create">
                                <AnimalForm />
                            </Route>

                            <Route path="/customers">
                                <CustomerList />
                            </Route>

                            <Route path="/employees">
                                <EmployeeList />
                            </Route>
                        </CustomerProvider>

                    </AnimalProvider>

                </EmployeeProvider>

            </LocationProvider>
        </>
    )
}