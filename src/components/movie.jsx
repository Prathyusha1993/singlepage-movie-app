import React, { Component } from 'react';
import Form from './form';
import Edit from './edit.jsx';

class Movie extends Component {
  constructor(props){
    super(props);

    this.handleEditMode = this.handleEditMode.bind(this);
    this.saveEditMode = this.saveEditMode.bind(this);

    this.state={
      id:'',
      title:'',
      stock:'',
      rate:'',
      requiredItem:0,
        rows: [{"id":1,"title":'Okadu', "stock":'3', "rate":'4.5'},
             {"id":2, "title":'SLNE', "stock":'4', "rate":'4'},
             {"id":3, "title":'Gameover', "stock":'10', "rate":'2'},
             {"id":4,"title":'Evaru', "stock":'8', "rate":'3.5'},
             {"id":5, "title":'Sahoo', "stock":'9', "rate":'3'}],
    
        headings: ['id','title','stock','rate']
    }
  }

      saveEditMode = (item) => {
        const requiredItem = this.state.requiredItem;
        let row = this.state.rows;
        row[requiredItem]=item;
        this.setState({rows : row})
      }
    
      handleEditMode = (index) => {
        this.setState({
          requiredItem: index
        })
        
      }

      handleDeleteRow = (index) => {
        const copy = Object.assign([], this.state.rows);
        copy.splice(index, 1);
        this.setState({rows: copy});
        };
          
      handleChange = (e) => {
        let input = e.target;
        let name = e.target.name;
        let value = input.value;
        this.setState({[name]: value})
      };

      handleFormSubmit = (e) => {
        e.preventDefault();
        let rows = [...this.state.rows];
        rows.push({
          id:this.state.id,
          title: this.state.title,
          stock:this.state.stock,
          rate:this.state.rate
        });
        this.setState({rows, id:'', title:'',stock:'',rate:''});
      };
    
      /*handleTableData =  () => {
        return this.state.rows.map((row, index)=>{
          //const {id, title, stock, rate} = row //object destructing
          return(
            
            <tr key={index} >
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.stock}</td>
              <td>{row.rate}</td>
              <td>
                <button onClick={() => this.handleEditMode(index)} className="btn btn-secondary btn-sm m-2">Edit</button>
                <button onClick={this.handleDeleteRow.bind(this, index)} className="btn btn-danger btn-sm m-2">Delete</button>
              </td>
              </tr> 
            
        )
        })
      }*/
    
      handleTableHeader = () => {
        return this.state.headings.map((key, index)=>{
          return <th key={index}>{key}</th>
        })
      }
    
     render() { 
      const rows = this.state.rows.map((row, index)=>{
        return(
          <tr key={index}>
            <td>{row.id}</td>
            <td>{row.title}</td>
            <td>{row.stock}</td>
            <td>{row.rate}</td>
            <td>
              <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                 onClick={() => this.handleEditMode(index)}>Edit</button>
              <button className="btn btn-danger btn-sm m-2" onClick={ this.handleDeleteRow.bind(this, index)}>Delete</button>
            </td>
          </tr>
        )
      });

       const requiredItem = this.state.requiredItem;
       let editData = this.state.rows[requiredItem];
          return (
            <div>
            <table className="table table-hover">
            <tbody>
                <tr>{this.handleTableHeader()}</tr>
                {rows}
           </tbody>
        </table>
        <Form handleFormSubmit = {this.handleFormSubmit}
          handleChange={this.handleChange}
          newId={this.state.id}
          newTitle={this.state.title}
          newStock={this.state.stock}
          newRate={this.state.rate}
        />
        <Edit  
          id={editData.id}
          title={editData.title}
          stock={editData.stock}
          rate={editData.rate}
          saveEditMode={this.saveEditMode}
        />
        </div> 
          )
    }
    
}
export default Movie;