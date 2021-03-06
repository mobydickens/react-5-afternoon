import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../ducks/reducer'

class WizardEight extends Component {

    render(){
        return(
            <div className="parent-div">
                    <div className="vert-align">                    
                        <p>Have you had a bankruptcy or foreclosure in the past seven years? </p><br />
                    <div className="row">
                        <Link to="/wNine"><button value="Has never been in bankruptcy" onClick={() => this.props.history("No")}>No</button></Link>
                        <Link to="/wNine"><button value="Has had bankruptcy before" onClick={() => this.props.history("Bankruptcy")}>Bankruptcy</button></Link>
                        <Link to="/wNine"><button value="Has had a foreclosure before" onClick={() => this.props.history("Foreclosure")}>Foreclosure</button></Link>
                        <Link to="/wNine"><button value="Has had both a foreclosure and a bankruptcy" onClick={() => this.props.history("Both")}>Both</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
  return {
    history: state.history
  }
}
export default connect(mapStateToProps, {history})(WizardEight);