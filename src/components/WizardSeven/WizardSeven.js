import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { credit } from '../../ducks/reducer';

class WizardSeven extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>Estimate your credit score</p> <br />
                    
                    <div className="row">
                        <Link to="/wEight"><button onClick={(e) => this.props.credit("Excellent")}>Excellent</button></Link>
                        <Link to="/wEight"><button onClick={(e) => this.props.credit("Good")}>Good</button></Link>
                        <Link to="/wEight"><button onClick={(e) => this.props.credit("Fair")}>Fair</button></Link>
                        <Link to="/wEight"><button onClick={(e) => this.props.credit("Poor")}>Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps( state ) {
  return {
    credit: state.credit
  }
}
export default connect(mapStateToProps, {credit})(WizardSeven);