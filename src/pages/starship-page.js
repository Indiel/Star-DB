import React from 'react';
import ErrorBoundary from '../components/error-boundary/error-boundary';
import Row from '../components/row/row';

import {
  StarshipList,
  StarshipDetails
} from '../components/sw-components';

export default class StarshipPage extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedItem: null,
    };
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    const { selectedItem } = this.state;

    return(
      <ErrorBoundary>
        <Row
          left={<StarshipList onItemSelected={this.onItemSelected} />}
          right={<StarshipDetails itemId={selectedItem} />}
        />
      </ErrorBoundary>
    );
  };
}
