import React,{Component} from 'react';

import './App.css';


class App extends Component
{
    myCompany =()=>'ITI'
    render()
    {
        const name='Akramul'
        const myName=()=>'Ali'

        const loading=false;

        const showName=false;


        return(

            <div className="App">
            {loading ? <h4>loading........</h4>:
            
            <h1>Hello {showName && name}</h1>}
               
            </div>

        );
    }
}

export default App;