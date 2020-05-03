import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import 'bootswatch/dist/darkly/bootstrap.min.css';

import ErrorBoundary from '../error-boundary/error-boundary';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';

import PeoplePage from '../../pages/people-page';
import PlanetPage from '../../pages/planet-page';
import StarshipPage from '../../pages/starship-page';
import { PlanetDetails } from '../sw-components';

import DummySwapiService from '../../services/dummy-swapi-service';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';

export default class App extends React.Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();
    this.dummySwapiService = new DummySwapiService();
  };

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <HashRouter>
            <div className="container stardb-app">
              <Header />
              <RandomPlanet />

              <Switch>
                <Route path="/" exact render={() => {
                  return <h1>Welcome to a StarDB</h1>;
                }} />

                <Route path="/people/:id?" exact component={PeoplePage} />

                <Route path="/planets" exact component={PlanetPage} />
                <Route path="/planets/:id" render={({ match }) => {
                  const { id } = match.params;
                  return <PlanetDetails itemId={id} />;
                }} />

                <Route path="/starships" component={StarshipPage} />
              
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </HashRouter>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
