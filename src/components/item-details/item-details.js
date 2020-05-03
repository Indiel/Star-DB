import React from 'react';
import './item-details.css';

import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class ItemDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null,
      image: null,
      loading: true,
    }
  };

  componentDidMount() {
    this.updateItem();
  };

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      this.setState({
        loading: false,
      });
      return;
    }

    this.setState({
      loading: true,
    });

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item),
          loading: false,
          error: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
        })
      });
  };

  render() {
    if (this.state.error) {
      return <ErrorIndicator />
    }

    const noItem = !(this.state.item || this.state.loading)
      ? <p className="item-details__no-item">Select a item from a list</p>
      : null;
    const spinner = this.state.loading
      ? <Spinner/>
      : null;
    const content = this.state.item && !this.state.loading
      ? <ItemView children={this.props.children} item={this.state.item} image={this.state.image} />
      : null;

    return (
      <section className="item-details jumbotron">
        {noItem}
        {spinner}
        {content}
      </section>
    );
  }
}

const ItemView = (props) => {
  const { image, children } = props;
  const { name } = props.item;

  return (
    <React.Fragment>
      <img
        className="item-details__img"
        src={image}
        alt=""
      />
      <div>
        <h3>{name}</h3>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(children, (child, i) => {
              return React.cloneElement(child, { item: props.item });
            })
          }
        </ul>
      </div>
    </React.Fragment>
  );
}

const ItemField = ({ label, field, item }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}: </span>
      <span>{item[field]}</span>
    </li>
  );
}

export { ItemField };
