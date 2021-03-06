import React from 'react';
import { SwapiServiceConsumer } from '../components/swapi-service-context/swapi-service-context';

const withSwapiService = (Wrapped, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            const serviceProps = mapMethodsToProps(swapiService);
            return (
              // <Wrapped {...props} swapiService={swapiService} />
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
