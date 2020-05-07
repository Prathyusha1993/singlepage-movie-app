import React, { Component } from 'react';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            id:'',
            title: '',
            stock: '',
            rate:'',
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.title,
            msg: nextProps.msg,
        });
    }

    idHandler(e) {
        this.setState({ id: e.target.value });
    }

    titleHandler(e) {
        this.setState({ title: e.target.value });
    }

    stockHandler(e) {
        this.setState({ stock: e.target.value });
    }

    rateHandler(e) {
        this.setState({ rate: e.target.value })
    }

    handleSave() {
        const item = this.state;
        this.props.saveEditMode(item)
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Jewel</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">Id:</span><input value={this.state.id} onChange={(e) => this.idHandler(e)} /></p>
                            <p><span className="modal-lable">Title:</span><input value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p>
                            <p><span className="modal-lable">Stock:</span><input value={this.state.stock} onChange={(e) => this.stockHandler(e)} /></p>
                            <p><span className="modal-lable">Rate:</span><input value={this.state.rate} onChange={(e) => this.rateHandler(e)} /></p>
                        
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;