import React, { Component } from 'react';
import './Home.css'
import Button from '../Button/Button';
import HomeContent from './HomeContent/HomeContent';
class Home extends Component {
    state = {
        homeContent: null,backgroundColor: "rgb(4,173,191)"
    }
    Clicked = () => {
        if (this.state.homeContent) {
            this.setState({ homeContent: null })
        }
        else {
            this.setState({
                homeContent: <HomeContent
                    BG={this.state.backgroundColor} className="Content"
                ></HomeContent>
            })
        };
    }

    render() {

        return (
            <div className="Home"
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <Button
                    value={"SecureTificate"}
                    Clicked={this.Clicked}
                    top={(1 * 7 + 1).toString() + "rem"}
                    BG={this.state.backgroundColor}
                />
                {this.state.homeContent}

            </div>
        )
    }
}
export default Home;