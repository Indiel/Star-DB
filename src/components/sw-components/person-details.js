import React from 'react';
import ItemDetails, { ItemField } from '../item-details/item-details';
import withSwapiService from '../../hoc/with-swapi-service';

let PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <ItemField label="Gender" field="gender" />
      <ItemField label="Birth Year" field="birthYear" />
      <ItemField label="Eye Color" field="eyeColor" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
};

export default withSwapiService(PersonDetails, mapMethodsToProps);

// const PersonDetails = ({ itemId, swapiService }) => {
//   const { getPerson, getPersonImage } = swapiService;

//   return (
//     <ItemDetails
//       itemId={itemId}
//       getData={getPerson}
//       getImageUrl={getPersonImage}
//     >
//       <ItemField label="Gender" field="gender" />
//       <ItemField label="Birth Year" field="birthYear" />
//       <ItemField label="Eye Color" field="eyeColor" />
//     </ItemDetails>
//   );
// };

// export default withSwapiService(PersonDetails);
