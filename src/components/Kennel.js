import React from "react";
// import { Animal } from "./animal/Animal"
import "./Kennel.css";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";

export const Kennel = () => (
    <> 
    <Route
        render={() => {
            if (localStorage.getItem("kennel_customer")) {
                return (
                    <>
                     <NavBar />
                        <ApplicationViews />
                    </>
                );
            } else {
                return <Redirect to="/login" />;
            }
        }}
        />
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
);