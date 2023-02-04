import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./components/Home";

const App = () => {
    return (
        <>
            <Header></Header>
            <Main>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                </Switch>
            </Main>
        </>
    );
};
export default App;
