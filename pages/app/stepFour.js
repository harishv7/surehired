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
        this.onDrop = this.onDrop.bind(this);

        this.state = {
            loading: false,
            name: localStorage.getItem('name'),
            userId: localStorage.getItem('userId')
        }
    }

    async onDrop(acceptedFiles) {
        this.setState({
            loading: true
        })

        console.log(acceptedFiles);

        const url = 'api/v1/resources';
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);
        formData.append('type', 'cover-photo');
        formData.append('userId', this.state.userId);

        const rawResponse = await fetch('/api/v1/resources', {
            method: 'POST',
            body: formData
        });

        this.setState({
            loading: false
        });

        console.log(rawResponse);

        // if all good, navigate to step 3
        if (rawResponse.status == 200) {
            Router.push('/app/stepThree');
        } else {
            alert("Oops, something went wrong! :(");
        }
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
                                    callback={responseFacebook} />
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