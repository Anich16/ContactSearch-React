import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsList from "./components/ContactsList.js"





class App extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <ContactsList />
            </div>
        );
    }


}

export default App;
