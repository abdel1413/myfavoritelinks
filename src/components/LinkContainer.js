import React from 'react';
 import Table from './Table';
 import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            favLinks:[]
        }
        
    }

    removeLinks = (index )=> {
    
        const copyLink = this.state.favLinks.slice(); //copy array Favlinks
        copyLink.splice(index,1);  //remove a row
        this.setState({favLinks:copyLink}) //update array favLinks

    };

    handleSubmit = favLink => {
       this.setState({favLinks:this.state.favLinks.concat(favLink)});
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                <Table linkData = {this.state.favLinks} removeLink = {this.removeLinks}/>
                <br/>
                <h3>Add New</h3>
                <Form  onSubmit ={this.handleSubmit}/>
            </div>
        );
    }
}

export default LinkContainer;