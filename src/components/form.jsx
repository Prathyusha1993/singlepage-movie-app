import React, { Component } from 'react';

class Form extends Component {

    render() { 
        return ( 
            
        <form onSubmit={this.props.handleFormSubmit}>
         <div className="form-group">
          <label>Id </label>
          <input type="number" name="id" id="id" value={this.props.newId} onChange={ this.props.handleChange} />
         </div>
         <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" id="title" value={this.props.newTitle} onChange={ this.props.handleChange} />
         </div>
         <div className="form-group">
          <label>Stock</label>
          <input type="number" name="stock" id="stock" value={this.props.newStock} onChange={this.props.handleChange} />
         </div>
         <div className="form-group">
          <label>Rate</label>
          <input type="number" name="rate" id="rate" value={this.props.newRate} onChange={this.props.handleChange} />
         </div>
         <button type="submit" className="btn btn-secondary btn-sm m-2" value="submit">Add</button>
        </form>
         );
    }
}
 
export default Form;