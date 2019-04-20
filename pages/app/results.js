import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import Head from '../../components/head'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import ReactLoading from 'react-loading';
import Router from 'next/router'
import Cookies from 'js-cookie'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            name: Cookies.get('name'),
            userId: Cookies.get('userId'),
            jobId: Cookies.get('jobId')
        }
    }

    componentDidMount() {
        this.getJobDetails();
    }

    getJobDetails() {
        fetch('/api/v1/jobs?jobId=' + Cookies.get('jobId'), {
            method: 'GET'
        }).then((response => {
            return response.json();
        })).then(list => {
            console.log(list);
            if (scores in list) {
                if (segmented in list.scores) {
                    if (resume in list.scores.segmented) {
                        this.setState({
                            resume: list.scores.segmented.resume
                        });
                    }
                    if (coverLetter in list.scores.segmented) {
                        this.setState({
                            coverLetter: list.scores.segmented.coverLetter
                        })
                    }
                    if (profilePicture in list.scores.segmented) {
                        this.setState({
                            profilePicture: list.scores.segmented.profilePicture
                        })
                    }
                    if (socialMedia in list.scores.segmented) {
                        this.setState({
                            socialMedia: list.scores.segmented.socialMedia
                        })
                    }
                }
            }
            this.setState({
                jobInfo: list
            })
        });
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
                        {JSON.stringify(this.state.jobInfo)}
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