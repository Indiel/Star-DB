import React from 'react';
import ItemDetails, { ItemField } from '../item-details/item-details';
import withSwapiService from '../../hoc/with-swapi-service';
// import { SwapiServiceConsumer } from '../swapi-service-context/swapi-service-context';

let StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <ItemField label="Model" field="model" />
      <ItemField label="Length" field="length" />
      <ItemField label="Passengers" field="passengers" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);

// const StarshipDetails = ({ itemId }) => {
//   return (
//     <SwapiServiceConsumer>
//       {
//         ({ getStarship, getStarshipImage }) => {
//           return (
//             <ItemDetails
//               itemId={itemId}
//               getData={getStarship}
//               getImageUrl={getStarshipImage}
//             >
//               <ItemField label="Model" field="model" />
//               <ItemField label="Length" field="length" />
//               <ItemField label="Cost" field="costInCredits" />
//             </ItemDetails>
//           );
//         }
//       }
//     </SwapiServiceConsumer>
//   );
// };

// export default StarshipDetails;
