import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import Head from '../../components/head'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import ReactLoading from 'react-loading';

const title = "SureHired"
const subtitle = ""
const description = ""

class App extends Component {
    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);
        this.state = { loading: false }
    }

    async onDrop(acceptedFiles) {
        this.setState({
            loading: true
        })

        console.log(acceptedFiles);

        const url = 'api/v1/resources';
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);
        formData.append('type', 'cover-letter');

        const rawResponse = await fetch('/api/v1/resources', {
            method: 'POST',
            body: formData
        });

        this.setState({
            loading: false
        });

        console.log(rawResponse);

        // if all good, navigate to step 2

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
                                <h2>Step 2 | Cover Photo</h2>
                                <p>Good job! Your cover letter is in safe hands.</p>
                                <p>Now let's getting you looking awesome!</p>
                                <p>Same same, drag or upload your cover photo below.</p>
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