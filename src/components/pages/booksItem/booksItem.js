import React, {Component} from 'react';
import gotService from '../../../services/gotService';
import ItemDetails, {Field}  from '../../itemDetails/itemDetails';

export default class BooksItem extends Component {
  gotService = new gotService();

  render() {
    return (
      <ItemDetails
        itemId={this.props.bookId}
        getDetails={this.gotService.getBook}
      >
        <Field field="numberOfPages" label="Number of pages" />
        <Field field="publisher" label="Publisher" />
        <Field field="released" label="Released" />
      </ItemDetails>
    )
  }

} 