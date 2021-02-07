import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
       this.state ={
           name: "",
           URL: ""
       }
    }

      //one way to solve the setState when it has two 
      //names:put the key in array
      handleChange = () =>{
        //    this.setState({[this.target.name]: this.target.value});
      }

     //2nd way:  create two specific fucn and call each other separately:
    
    handleNameChange = (event) => {
       this.setState({name:event.target.value}) 
    }
        
      handleURLChange =(event) =>{
     this.setState({URL: event.target.value});

      }

    onFormSubmit = (event) => {
    
        event.preventDefault();
        this.setState({name:'', URL:''})
       this.props.onSubmit(this.state)
    }

    render() {

        return(
            <form>
              
                <label> name</label> 
                <input type = 'text' name = "name" onChange={this.handleNameChange} value={this.state.name}></input>
                <label>URL</label>
                <input type = "text"  name = " URL" onChange={this.handleURLChange} value={this.state.URL}></input>
                <button onClick = {this.onFormSubmit}> Submit</button>
            </form>
        )
    
    }
}
export default Form;
