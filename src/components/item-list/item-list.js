import React from 'react';
import PropTypes from 'prop-types';
import './item-list.css';

// import Spinner from '../spinner/spinner';
// import ErrorIndicator from '../error-indicator/error-indicator';

const ItemList = (props) => {
  const { data, onItemSelected } = props;

  const items = data.map((item) => {
    const label = props.children(item);

    return (
      <li className="list-group-item"
        key={item.id}
        onClick={() => onItemSelected(item.id)}
      >
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
}

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};

export default ItemList;

// class ItemList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       itemList: null,
//     }
//   };

//   componentDidMount() {
//     const { getData } = this.props;

//     getData()
//       .then((itemList) => {
//         this.setState({
//           itemList,
//           error: false,
//         });
//       })
//       .catch((err) => {
//         this.setState({
//           error: true,
//         });
//       });
//   };

//   renderItems(arr) {
//     return arr.map((item) => {
//       const label = this.props.renderItem(item);

//       return (
//         <li className="list-group-item"
//           key={item.id}
//           onClick={() => this.props.onItemSelected(item.id)}
//         >
//           {label}
//         </li>
//       );
//     });
//   }

//   render() {
//     const { itemList, error } = this.state;

//     if (error) {
//       return <ErrorIndicator />
//     }

//     if (!itemList) {
//       return <Spinner />;
//     }

//     const items = this.renderItems(itemList);

//     return (
//       <ul className="item-list list-group">
//         {items}
//       </ul>
//     );
//   };
// }
