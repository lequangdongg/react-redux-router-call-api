import React, { Component } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  actFetchProductsRequest,
  actDeleteProductRequest,
} from "./../../actions/index";
class ProductListPage extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
  };

  onDelete = id => {
    // let { products } = this.state;
    // callApi(`products/${id}`, "DELETE", null).then(res => {
    //   if (res.status === 200) {
    //     let index1 = this.findIndex(products, id);
    //     if (index1 !== -1) {
    //       products.splice(index1, 1);
    //       this.setState({
    //         products
    //       });
    //     }
    //   }
    // });
    this.props.onDeleteProduct(id);
  };

  render() {
    let { products } = this.props;

    return (
      <div className="container">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/product/add" className="btn btn-success">
            Add Product
          </Link>
          <ProductList>{this.showProduct(products)}</ProductList>
        </div>
      </div>
    );
  }
  showProduct = products => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  };
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: id => {
      dispatch(actDeleteProductRequest(id));
    },
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
