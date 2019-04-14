import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

import Head from '../components/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import About from '../components/about'
import Footer from '../components/footer'

import FacebookAuth from 'react-facebook-auth';


const title = "SureHired"
const subtitle = ""
const description = ""

const MyFacebookButton = ({ onClick }) => (
    <button onClick={onClick}>
        Login with facebook
    </button>
);

const authenticate = (response) => {
    console.log(response);
    // Api call to server so we can validate the token
};

class App extends Component {

    async onDrop(acceptedFiles) {
        console.log(acceptedFiles);

        const url = 'api/v1/resources';
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);

        const rawResponse = await fetch('/api/v1/resources', {
            method: 'POST',
            body: formData
        });

        console.log(rawResponse);
    }

    render() {
        return (
            <div>
                <Head title="Home" />
                <Nav />
                <Hero title={title} subtitle={subtitle} description={description} />
                <div className="row">
                    <div className="col-md-12">
                        <h1>Welcome Harish!</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Dropzone onDrop={this.onDrop}>
                                {({ getRootProps, getInputProps }) => (
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        Click me to upload a file!
                                </div>
                                )}
                            </Dropzone>
                        </div>
                    </div>
                    <h1>Facebook Auth</h1>
                    <FacebookAuth
                        appId="340465570008336"
                        callback={authenticate}
                        component={MyFacebookButton}
                    />
                </div>
                <Footer />
            </div>

        );
    }
}

export default App;