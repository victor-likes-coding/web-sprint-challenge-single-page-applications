import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact></Route>
            </Switch>
        </>
    );
};
export default App;
