import React from 'react';
import { withRouter } from 'react-router-dom';

// import ItemList from '../components/item-list/item-list';
// import SwapiService from '../services/swapi-service';
// import ItemDetails, { ItemField } from '../components/item-details/item-details';

import ErrorBoundary from '../components/error-boundary/error-boundary';
import Row from '../components/row/row';
import {
  PersonList,
  PersonDetails
} from '../components/sw-components';

const PeoplePage = ({ match, history }) => {
  const { id } = match.params;

  return(
    <ErrorBoundary>
      <Row
        left={<PersonList onItemSelected={(id) => history.push(id)} />}
        right={<PersonDetails itemId={id} />}
      />
    </ErrorBoundary>
  );
};

export default withRouter(PeoplePage);

// export default class PeoplePage extends React.Component {
//   constructor() {
//     super();
//     this.swapiService = new SwapiService();

//     this.state = {
//       selectedPerson: null,
//     };
//   };

//   onPersonSelected = (id) => {
//     this.setState({
//       selectedPerson: id,
//     });
//   };

//   render() {
//     const itemList = (
//       <ItemList
//         onItemSelected={this.onPersonSelected}
//         getData={this.swapiService.getAllPeople}
//         renderItem={(item) => item.name}
//       />
//     );

//     const personDetails = (
//       <ItemDetails
//         itemId={this.state.selectedPerson}
//         getData={this.swapiService.getPerson}
//         getImageUrl={this.swapiService.getPersonImage}
//       >
//         <ItemField label="Gender" field="gender" />
//         <ItemField label="Birth Year" field="birthYear" />
//         <ItemField label="Eye Color" field="eyeColor" />
//       </ItemDetails>
//     );

//     return(
//       <ErrorBoundary>
//         <Row left={itemList} right={personDetails} />
//       </ErrorBoundary>
//     );
//   };
// }
