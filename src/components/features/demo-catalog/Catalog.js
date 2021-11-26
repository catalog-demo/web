import React, { Component } from 'react'
import CatalogService from './CatalogService'

export default class Catalog extends Component {
    constructor(props){
        super(props)
    
        this.state = {   
            syntax: '',
            catalogs: [],
        }
        
        this.handleInputSyntax = this.handleInputSyntax.bind(this);
        this.searchBySyntax = this.searchBySyntax.bind(this);
        
    } 

    handleInputSyntax = (event) => {
        this.setState({syntax: event.target.value})
    }

    searchBySyntax = (event) => {
        event.preventDefault();
        CatalogService.getCatalogs(this.state.syntax).then(res => {
            console.log(res.data);
            this.setState({catalogs: res.data})
        })
    }

    render() {
        return (
            <div className="container my-4">
                <div class="form-group">
                    <label for="syntax-input">Syntax</label>
                    <input type="text" class="form-control" id="syntax-input" onChange={this.handleInputSyntax} aria-describedby="syntax" placeholder="Syntax" />
                    <small id="syntax" class="form-text text-muted">The syntax must be right syntax such as: 'description:airflow'</small>
                </div>
                <button class="btn btn-primary" onClick={this.searchBySyntax}>Search</button>
                <h1 className="text-center">Catalog</h1>
                <table className="table table-hover table-fixed">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Result Type</th>
                        <th scope="col">Result Sub Type</th>
                        <th scope="col">Relative Resource Name</th>
                        <th scope="col">Linked Resource</th>
                        <th scope="col">Modify Time</th>
                        <th scope="col">Integrated System</th>
                        <th scope="col">Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.catalogs.map(
                                (catalog, index) => 
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{catalog.searchResultType}</td>
                                    <td>{catalog.searchResultSubType}</td>
                                    <td><p className="col-2 text-truncate">{catalog.relativeResourceName}</p></td>
                                    <td><p className="col-6 text-truncate">{catalog.linkedResource}</p></td>
                                    <td>{catalog.modifyTime}</td>
                                    <td><p className="text-truncate">{catalog.integratedSystem}</p></td>
                                    <td><p className="text-truncate">{catalog.description}</p></td>
                                </tr> 
                            )
                        }
                    </tbody>
                </table>
                {/* <div className="row text-center">
                    <table className="table table-stripped table-bordered"> 
                        <thead>
                            <th>STT</th>
                            <th>Result Type</th>
                            <th >Result Sub Type</th>
                            <th >Relative Resource Name</th>
                            <th >Linked Resource</th>
                            <th >Modify Time</th>
                            <th >Integrated System</th>
                            <th >Description</th>
                        </thead>
                        <tbody >
                            {
                                this.state.catalogs.map(
                                    (catalog, index) => 
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{catalog.searchResultType}</td>
                                        <td>{catalog.searchResultSubType}</td>
                                        <td><p className="col-2 text-truncate">{catalog.relativeResourceName}</p></td>
                                        <td><p className="col-6 text-truncate">{catalog.linkedResource}</p></td>
                                        <td>{catalog.modifyTime}</td>
                                        <td><p className="text-truncate">{catalog.integratedSystem}</p></td>
                                        <td><p className="text-truncate">{catalog.description}</p></td>
                                    </tr> 
                                )
                            }
                        </tbody>
                    </table>
                </div> */}
            </div>
        )
    }
}
