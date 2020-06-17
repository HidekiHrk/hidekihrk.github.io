import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./templates/header";

const Router = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <Switch>
            <Route exact path="/">
                <h1>Home</h1>
            </Route>
            <Route path="/projects/:id?">
                <h1>Projects</h1>
            </Route>
            <Route path="/partners">
                <h1>Partners</h1>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Router;