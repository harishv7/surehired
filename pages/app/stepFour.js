import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import Head from '../../components/head'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import ReactLoading from 'react-loading';
import Router from 'next/router'
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
    console.log(response);
}

class App extends Component {
    constructor(props) {
        super(props);

        this.handleFacebookClick = this.handleFacebookClick.bind(this);

        this.state = {
            loading: false,
            name: localStorage.getItem('name'),
            userId: localStorage.getItem('userId')
        }
    }

    handleFacebookClick(response) {
        console.log(response);
        // save access token userid
        fetch('/api/v1/auth/facebook', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.response)
        });
        Router.push('/app/results');
    }

    render() {
        const isLoading = this.state.loading;
        return (
            <div>
                <Head title="Home" />
                <Nav />
                <div className="app-hero">
                    <div className="container">
                        <div className="row step-1">
                            <div className="col-md-12">
                                <h2>Step 3 | Facebook Analysis</h2>
                                <p>We're almost there!</p>
                                <p>Let's check how awesome is your Facebook.</p>
                                <p>We will analyse if there are any social posts which could be deemed as "bad" by your employers.</p>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <FacebookLogin
                                    appId="340465570008336"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    callback={this.handleFacebookClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;