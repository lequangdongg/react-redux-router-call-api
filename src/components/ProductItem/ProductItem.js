import React, { Component } from "react";
import { Link } from "react-router-dom";
class ProductItem extends Component {
  onDelete = id => {
    if (confirm("Ban chac chan muon xoa san pham nay?")) {   //eslint-disable-line
      this.props.onDelete(id);
    }
  };
  render() {
    let { product, index } = this.props;
    let statusName = product.status ? "Con Hang" : "Het Hang";
    let statusClass = product.status ? "warning" : "default";

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name} </td>
        <td>{product.price}</td>
        <td>
          <span className={`btn btn-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link to={`/product/${product.id}/edit`} className="btn btn-success">
            Update
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
