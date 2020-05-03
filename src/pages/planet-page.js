import React from 'react';
import { withRouter } from 'react-router-dom';

import ErrorBoundary from '../components/error-boundary/error-boundary';
import { PlanetList } from '../components/sw-components';

const PlanetPage = ({ history }) => {
  return(
    <ErrorBoundary>
      <PlanetList onItemSelected={(itemId) => {
        history.push(`/planets/${itemId}`);
      }} />
    </ErrorBoundary>
  );
};

export default withRouter(PlanetPage);
