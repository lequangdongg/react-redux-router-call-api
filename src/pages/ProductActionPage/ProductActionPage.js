import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  actAddProductRequest,
  actGetProductRequest,
  actUpdateProductRequest
} from " ./../../src/actions/index";
import { connect } from "react-redux";
class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: ""
    };
  }

  componentDidMount = () => {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;
      // callApi(`products/${id}`).then(res => {
      //   let data = res.data;
      //   this.setState({
      //     id: data.id,
      //     txtName: data.name,
      //     txtPrice: data.price,
      //     chkbStatus: data.status
      //   });
      // });
      this.props.onEditProduct(id);
    }
  };

  UNSAFE_componentWillReceiveProps = nextProps => {
    if (nextProps && nextProps.itemEditting) {
      let { itemEditting } = nextProps;
      this.setState({
        id: itemEditting.id,
        txtName: itemEditting.name,
        txtPrice: itemEditting.price,
        chkbStatus: itemEditting.status
      });
    }
  };

  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  onSave = e => {
    e.preventDefault();
    let { id, txtName, txtPrice, chkbStatus } = this.state;
    let { history } = this.props;
    let product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    };
    if (id) {
      // callApi(`products/${id}`, "PUT", {
      //   name: txtName,
      //   price: txtPrice,
      //   status: chkbStatus
      // }).then(res => {
      //   history.goBack();
      // });
      this.props.onUpdateProduct(product);
    } else {
      this.props.onAddProduct(product);
    }
    history.goBack();
  };

  render() {
    let { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Product Name : </label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Price : </label>
            <input
              type="number"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trang Thai : </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={chkbStatus}
                name="chkbStatus"
                onChange={this.onChange}
                checked={chkbStatus}
              />
              Con Hang
            </label>
          </div>
          <Link to="/product-list" className="btn btn-secondary">
            Back
          </Link>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemEditting: state.itemEditting
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: product => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: id => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct: product => {
      dispatch(actUpdateProductRequest(product));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
