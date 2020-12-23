import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'

import '../styles/home.css'
import Select from 'react-select'

class Home extends Component {
    constructor(){
        super()
        this.state = {toFentity:false , fentity: null, name:null}
    }
    handleChange = (event) => {
        console.log(event)
        this.setState({
            toFentity: true,
            fentity: event.value,
            name: event.label
        })
    }
    render() {
        if(this.state.toFentity){
            return <Redirect push to={`/directory/${this.state.fentity}/${this.state.name}`} />
        }
        return (
            <div>
                <div id="u-input">
                    <Select options={this.props.options} isSearchable={true} id='select' onChange={this.handleChange} onInputChange={this.onInputChange}/>
                    <div id="button" >Seek</div>
                </div>

                <h1 id="home-title">Your Adventure</h1>

                <div id="home-container">
                    <div id="world"><span className="main-directory-text">World</span></div>
                   
                    <div id="wizards">
                        <Link to='/directory/wizards'>
                            <span className="main-directory-text">Wizards</span>
                        </Link>
                    </div>
                    <div id="bestiary">
                        <Link to='/directory/bestiary'>
                            <span className="main-directory-text">Bestiary</span>
                        </Link>
                    </div>
                    <div id="potions"><span className="main-directory-text">Potions</span></div>
                    <div id="deities"><span className="main-directory-text">Deities</span></div>
                </div>
            </div>
        );
    }
}

export default Home;