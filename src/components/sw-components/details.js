import React from 'react';
import ItemDetails, { ItemField } from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';

const swapi = new SwapiService();
const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage,
} = swapi;

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <ItemField label="Gender" field="gender" />
      <ItemField label="Birth Year" field="birthYear" />
      <ItemField label="Eye Color" field="eyeColor" />
    </ItemDetails>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <ItemField label="Diameter" field="diameter" />
      <ItemField label="Population" field="population" />
      <ItemField label="Rotation period" field="rotationPeriod" />
    </ItemDetails>
  );
};

const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <ItemField label="Model" field="model" />
      <ItemField label="Length" field="length" />
      <ItemField label="Cost" field="costInCredits" />
    </ItemDetails>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
};
