import React, { useState, useEffect } from "react";
import "./itemList.css";
import Spinner from "../spinner";
// import gotService from "../../services/gotService";
// import PropTypes from "prop-types";

function ItemList({ getData, onItemSelected, renderItem }) {
  const [itemList, updateList] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      updateList(data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderItems(arr) {
    return arr.map((item, i) => {
      const { id } = item;

      const label = renderItem(item);

      return (
        <li key={id} className="item" onClick={() => onItemSelected(id)}>
          {label}
        </li>
      );
    });
  }

  if (!itemList) {
    return <Spinner />;
  }

  const items = renderItems(itemList);

  return <ul>{items}</ul>;
}

export default ItemList

// ! классовый компонент

// export default class ItemList extends Component {
//   state = {
//     itemList: null,
//   };

//   renderItems(arr) {
//     return arr.map((item, i) => {
//       const { id } = item;

//       const label = this.props.renderItem(item);

//       return (
//         <li
//           key={id}
//           className="item"
//           onClick={() => this.props.onItemSelected(id)}
//         >
//           {label}
//         </li>
//       );
//     });
//   }

//   render() {
//     const { itemList } = this.state;

//     if (!itemList) {
//       return <Spinner />;
//     }

//     const items = this.renderItems(itemList);

//     return <ul>{items}</ul>;
//   }
// }
//   componentDidMount() {
//     const { getData } = this.props;

//     getData().then((itemList) => {
//       this.setState({ itemList });
//     });
//   }

// ItemList.defaultProps = {
//   onItemSelected: () => {}
// }

// ! компонент высшего порядка

// class ItemList extends Component {
//   static defaultProps = {
//     onItemSelected: () => {},
//   };

//   static propTypes = {
//     onItemSelected: PropTypes.func,
//   };

//   renderItems(arr) {
//     return arr.map((item) => {
//       const { id } = item;

//       const label = this.props.renderItem(item);

//       return (
//         <li
//           key={id}
//           className="item"
//           onClick={() => this.props.onItemSelected(id)}
//         >
//           {label}
//         </li>
//       );
//     });
//   }

//   render() {
//     const { data } = this.props;
//     const items = this.renderItems(data);

//     return <ul>{items}</ul>;
//   }
// }

// const withData = (View, getData) => {
//   return class extends Component {
//     state = {
//       data: null,
//     };

//     componentDidMount() {
//       getData().then((data) => {
//         this.setState({ data });
//       });
//     }

//     render() {
//       const { data } = this.state;

//       if (!data) {
//         return <Spinner />;
//       }
//       return <View {...this.props} data={data} />;
//     }
//   };
// };

// const {getAllCharacters} = new gotService()
// export default withData(ItemList, getAllCharacters);
