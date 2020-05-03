import React from 'react';
import ItemList from '../item-list/item-list';
import withData from '../../hoc/with-data';
import withSwapiService from '../../hoc/with-swapi-service';
// import SwapiService from '../../services/swapi-service';

// const swapi = new SwapiService();
// const {
//   getAllPeople,
//   getAllStarships,
//   getAllPlanets,
// } = swapi;

const withChildrenFunction = (Wrapper, fn) => {
  return (props) => {
    return (
      <Wrapper {...props}>
        {fn}
      </Wrapper>
    );
  };
};

const renderName = (item) => item.name;
const renderNameAndDiameter = ({ name, diameter }) => `${name} (Diameter: ${diameter})`;

const mapPersonMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
};
const mapPlanetsMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
};
const mapStarshipsMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
};

const PersonList = withSwapiService(
  withData(withChildrenFunction(ItemList, renderName)),
  mapPersonMethodToProps
);

const PlanetList = withSwapiService(
  withData(withChildrenFunction(ItemList, renderNameAndDiameter)),
  mapPlanetsMethodToProps
);

const StarshipList = withSwapiService(
  withData(withChildrenFunction(ItemList, renderName)),
  mapStarshipsMethodToProps
);

export {
  PersonList,
  PlanetList,
  StarshipList,
};
