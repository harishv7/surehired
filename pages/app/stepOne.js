import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import Head from '../../components/head'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import ReactLoading from 'react-loading';
import Router from 'next/router'

const title = "SureHired"
const subtitle = ""
const description = ""

class App extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.onDrop = this.onDrop.bind(this);
        this.state = { loading: false, name: localStorage.getItem('name'), userId: localStorage.getItem('userId') }
    }

    async onDrop(acceptedFiles) {
        this.setState({
            loading: true
        })

        console.log(acceptedFiles);

        const url = 'api/v1/resources';
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);
        formData.append('type', 'resume');
        formData.append('userId', this.state.userId);

        const rawResponse = await fetch('/api/v1/resources', {
            method: 'POST',
            body: formData
        });

        this.setState({
            loading: false
        });

        console.log(rawResponse);

        // if all good, navigate to step 2
        if (rawResponse.status == 200) {
            Router.push('/app/stepTwo');
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
                                <h1>Welcome {this.state.name}!</h1>
                                <h2>Step 1 | Resume</h2>
                                <p>You're taking the first step in boosting your chances of getting hired.</p>
                                <p>Simply drag and drop your resume
                                    onto the box or click on it to upload your resume in PDF format.</p>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <Dropzone onDrop={this.onDrop}>
                                    {({ getRootProps, getInputProps }) => (
                                        <div {...getRootProps()}>
                                            <input {...getInputProps()} />
                                            <div className="dropzone text-center">
                                                <p>Click me to upload a file!</p>
                                                <div className="row">
                                                    <div className="col-md-12 text-center">
                                                        <span className="loading-bar">{isLoading ? <ReactLoading className="text-center loading-bar" type={"bars"} height={"3em"} width={"3em"} /> : <span />}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Dropzone>
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