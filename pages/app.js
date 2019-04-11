import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

import Head from '../components/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import About from '../components/about'
import Footer from '../components/footer'

class App extends Component {

    onDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
    }

    render() {
        return (
            <div>
                <Head title="Home" />
                <Nav />
                {/* <Hero title={title} subtitle={subtitle} description={description} /> */}
                <div className="row">
                    <div className="col-md-12">
                        <h1>Welcome Harish!</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
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
                <Footer />
            </div>

        );
    }
}

export default App;