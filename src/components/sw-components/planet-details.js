import React from 'react';
import ItemDetails, { ItemField } from '../item-details/item-details';
import withSwapiService from '../../hoc/with-swapi-service';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <ItemField label="Diameter" field="diameter" />
      <ItemField label="Population" field="population" />
      <ItemField label="Rotation period" field="rotationPeriod" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);

// const PlanetDetails = ({ itemId, swapiService }) => {
//   const { getPlanet, getPlanetImage } = swapiService;

//   return (
//     <ItemDetails
//       itemId={itemId}
//       getData={getPlanet}
//       getImageUrl={getPlanetImage}
//     >
//       <ItemField label="Diameter" field="diameter" />
//       <ItemField label="Population" field="population" />
//       <ItemField label="Rotation period" field="rotationPeriod" />
//     </ItemDetails>
//   );
// };

// export default withSwapiService(PlanetDetails);
