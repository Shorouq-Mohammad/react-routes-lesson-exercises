import React, { Component } from 'react';
import { Link , Redirect} from 'react-router-dom'
import '../styles/fentity-directory.css'

class Fentities extends Component {
    render() {
        const fentityName = this.props.match.params.fentities
        if(this.props.state[fentityName]){
            const fentities = this.props.state[fentityName]
            return (
                <div>
                    <h1 id="fentities-title">{/*Get from `match`*/}</h1>
                    <div id="fentities-container">
                    <h1 id="fentities-title">{this.props.match.params.fentities}</h1>
                        {fentities.map(f => {
                            return (
                            <Link to={`/directory/${fentityName}/${f.name}`}  key={f.name}>
                                <div className="mini">
                                    <img className="directory-img" src={f.imgUrl} alt="" />
                                    <span>{f.name}</span>
                                </div>
                            </Link>
                            )
                        })}
                    </div>
                </div>)
            
        }else{
            return <Redirect to='/' />
        }
    }
}

export default Fentities