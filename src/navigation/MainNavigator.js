import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import HomeScreen from "./Screens.js/HomeScreen";
import Quiz from "./Screens.js/Quiz";
import ResultsScreen from "./Screens.js/ResultScreen/ResultsScreen";
import { UserScreen } from "./Screens.js/UserScreen.js";
import AddQuizScreen from "./Screens.js/AddQuizScreen";
import TestDoneScreen from "./Screens.js/TestDoneScreen/TestDoneScreen";

export const Context = React.createContext();

function MainNavigator() {
  return (
    <Router>
      <Context.Provider>
        <Header />
        <Switch>
          <Route exact path="/">
            <UserScreen />
          </Route>
          <Route path="/home">
            <HomeScreen />
          </Route>
          <Route path="/add">
            <AddQuizScreen />
          </Route>
          <Route path="/quiz/:id">
            <Quiz />
          </Route>
          <Route path="/done/:id">
            <TestDoneScreen />
          </Route>
          <Route path="/results/">
            <ResultsScreen />
          </Route>
        </Switch>
      </Context.Provider>
    </Router>
  );
}
export default React.memo(MainNavigator);
