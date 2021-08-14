import React from "react"
import { Route } from "react-router-dom"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationDetail } from "./location/LocationDetail"
import { LocationForm } from "./location/LocationForm"
import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeForm } from "./employee/EmployeeForm"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ Thisis the NSS Kennels Link*/}
            <LocationProvider>
                <EmployeeProvider>
                    <AnimalProvider>
                        <CustomerProvider>


                            <Route exact path="/locations">
                                <LocationList />
                            </Route>

                            <Route exact path="/locations/create">
                                <LocationForm />
                            </Route>


                            {/* This is the Animals Link. When I add animals/create that button click changes the URLRender the animal list when http://localhost:3000/animals */}
                            <Route exact path="/animals">
                                <AnimalList />
                            </Route>

                            <Route path="/animals/create">
                                <AnimalForm />
                            </Route>
                         
                            <Route path="/animals/detail/:animalId(\d+)">
                                <AnimalDetail />
                            </Route>
                           
                           <Route exact path="/locations/detail/:locationId(\d+)">
                               <LocationDetail />
                           </Route>

                            <Route exact path="/customers">
                                <CustomerList />
                            </Route>

                            <Route exact path="/employees">
                                <EmployeeList />
                            </Route>

                            <Route path="/employees/create">
                                <EmployeeForm />
                            </Route>

                        </CustomerProvider>

                    </AnimalProvider>

                </EmployeeProvider>

            </LocationProvider>
        </>
    )
}