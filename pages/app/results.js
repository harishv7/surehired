import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import Head from '../../components/head'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import ReactLoading from 'react-loading';
import Router from 'next/router'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            name: localStorage.getItem('name'),
            userId: localStorage.getItem('userId')
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
                                <h2>Check out your analysis and results here!</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <h3>Resume score: </h3>
                                <p>Analysis comments: </p>
                            </div>
                            <div className="col-md-6">
                                <h3>Resume score: </h3>
                                <p>Analysis comments: </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Resume score: </h3>
                                <p>Analysis comments: </p>
                            </div>
                            <div className="col-md-6">
                                <h3>Resume score: </h3>
                                <p>Analysis comments: </p>
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