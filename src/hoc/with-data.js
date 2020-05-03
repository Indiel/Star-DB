import React from 'react';

import Spinner from '../components/spinner/spinner';
import ErrorIndicator from '../components/error-indicator/error-indicator';

const withData = (View) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: null,
        loading: true,
        error: false
      }
    };
  
    componentDidMount() {
      this.props.getData()
        .then((data) => {
          this.setState({
            data,
            error: false,
            loading: false
          });
        })
        .catch((err) => {
          this.setState({
            error: true,
            loading: false
          });
        });
    };

    render() {
      const { data, loading, error } = this.state;

      if (error) {
        return <ErrorIndicator />
      }

      if (loading) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  }
}

export default withData;
