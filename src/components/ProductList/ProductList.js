import React, { Component } from "react";

class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Danh sach san pham</h3>
        </div>
        <div className="panel-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Ma San Pham</th>
                <th scope="col">Ten San Pham</th>
                <th scope="col">Gia San Pham </th>
                <th scope="col">Trang Thai</th>
                <th scope="col">Hanh Dong</th>
              </tr>
            </thead>
            <tbody>
             {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
