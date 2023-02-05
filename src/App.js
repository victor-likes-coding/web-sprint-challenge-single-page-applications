import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./components/Home";
import { places } from "./data/places";

const App = () => {
    const [foodPlaces] = useState(places);
    return (
        <>
            <Header></Header>
            <Main>
                <Switch>
                    <Route path="/" exact>
                        <Home data={foodPlaces} />
                    </Route>
                </Switch>
            </Main>
        </>
    );
};
export default App;
