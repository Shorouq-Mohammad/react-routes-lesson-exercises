import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom';
import '../styles/fentity.css'


class Fentity extends Component {
    render() {
        const {fentities, name} = this.props.match.params
        const fentity = this.props.state[fentities].find(f => f.name === name) 
        if(fentity){
            return (
                <div id="creature-container">
                    <h1>{fentity.name}</h1>
                    <img src={fentity.imgUrl} alt=""/>
                    <div className="title">Power:</div>
                    <div className="power text"> {fentity.power}</div>
                    <div className="other text">{fentity.other}</div>
                    <Link to={`/directory/${fentities}`}>Prev</Link>
                </div>
            )
        }else{
            return <Redirect to={`/directory/${fentities}`} />
        }
    }
}

export default Fentity;
