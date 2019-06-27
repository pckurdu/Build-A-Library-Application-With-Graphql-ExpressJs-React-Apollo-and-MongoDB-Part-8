//import the necessary modules to create a component
import React,{Component} from 'react';

//query for gql module
import {gql} from 'apollo-boost';

//for export
import {graphql} from 'react-apollo';
//Access the queries file
import {getAuthorsQuery} from '../queries/queries';


class AddBook extends Component{

    //for getting authors in props
    getAuthors(){
        //the datas is in the data object in props
        var datas=this.props.data;

        //retrieval of data from mlab in progress
        if(datas.loading){
            return (<option disabled>Authors loading</option>)
        }else{//when data retrieval is complete
            return datas.authors.map(author=>{
                return(
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            })
        }

    }
    render(){
        console.log(this.props);
        
        return(
            // We will create forms that will add books
            <form id="add-book">
                
                <div className="field">
                    <label>Book Name:</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label>Type:</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label>Select Author:</label>
                    <select>
                        <option >Authors</option>
                        {this.getAuthors()}
                    </select>
                </div>
                <button>Add</button>
            </form>
        )
    }
}

//Let's export to access from another component.
export default graphql(getAuthorsQuery)(AddBook);