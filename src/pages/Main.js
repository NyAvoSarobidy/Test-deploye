import React from "react";
import NavBar from "../composant/NavBar";

import PageAccueil from "./PageAccueil.js"


import Footer from '../composant/Footer'
import Header from '../composant/Header'

function Main(){
    return(
    
        <>
            <NavBar/>
             <PageAccueil />
             <Footer />
            <Header /> 
        </>

    )

}
export default Main;
