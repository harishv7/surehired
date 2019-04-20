import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import Head from '../../components/head'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import ReactLoading from 'react-loading';
import Router from 'next/router'
import Cookies from 'js-cookie'
import Charts from '../../components/charts'
import Jumbotron from '../../components/jumbotron'

const title = "Analytics Results"
const subtitle = "View the analysis here!"
const description = "Your documents have been processed!"

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
            // console.log(list);
            if (list.length > 0 && "scores" in list[0]) {
                if ("segmented" in list[0].scores) {
                    if ("resume" in list[0].scores.segmented) {
                        this.setState({
                            resume: list[0].scores.segmented.resume
                        });
                    }
                    if ("coverLetter" in list[0].scores.segmented) {
                        this.setState({
                            coverLetter: list[0].scores.segmented.coverLetter
                        })
                    }
                    if ("profilePicture" in list[0].scores.segmented) {
                        this.setState({
                            profilePicture: list[0].scores.segmented.profilePicture
                        })
                    }
                    if ("socialMedia" in list[0].scores.segmented) {
                        this.setState({
                            socialMedia: list[0].scores.segmented.socialMedia
                        })
                    }
                }
            }
        });
    }

    render() {
        const isLoading = this.state.loading;
        var resumeData = [];
        if (this.state.resume) {
            console.log(this.state.resume);
            resumeData = [
                {
                    value: this.state.resume.SentimentScore.Positive,
                    color: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "Positive"
                },
                {
                    value: this.state.resume.SentimentScore.Negative,
                    color: "#22e214",
                    highlight: "#5AD3D1",
                    label: " Negative"
                },
                {
                    value: this.state.resume.SentimentScore.Neutral,
                    color: "#8e4e00",
                    highlight: "#FFC870",
                    label: "Neutral"
                },
                {
                    value: this.state.resume.SentimentScore.Mixed,
                    color: "#1c0de8",
                    highlight: "#FFC870",
                    label: "Mixed"
                }
            ];
        }

        var coverLetterData = [];
        if (this.state.coverLetter) {
            console.log(this.state.coverLetter);
            coverLetterData = [{
                value: this.state.coverLetter.SentimentScore.Positive,
                color: "#F7464A",
                highlight: "#FF5A5E",
                label: "Positive"
            },
            {
                value: this.state.coverLetter.SentimentScore.Negative,
                color: "#22e214",
                highlight: "#5AD3D1",
                label: " Negative"
            },
            {
                value: this.state.coverLetter.SentimentScore.Neutral,
                color: "#8e4e00",
                highlight: "#FFC870",
                label: "Neutral"
            },
            {
                value: this.state.coverLetter.SentimentScore.Mixed,
                color: "#1c0de8",
                highlight: "#FFC870",
                label: "Mixed"
            }];
        }

        return (
            <div>
                <Head title="Home" />
                <Nav />
                <Jumbotron title={title} subtitle={subtitle} description={description} />
                <div className="">
                    <div className="container">
                        <div className="row step-1">
                            <div className="col-md-12">
                                <h2>Check out your analysis and results here!</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Resume score: </h3>
                                {this.state.resume ? <p>You seem to be a very {this.state.resume.Sentiment} person!</p> : null}
                                <Charts data={resumeData} options={{}} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Cover Letter score: </h3>
                                {this.state.coverLetter ? <p>You seem to be a very {this.state.coverLetter.Sentiment} person!</p> : null}
                                <Charts data={coverLetterData} options={{}} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <h3>Profile Picture score: </h3>
                                <p>Analysis comments: </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Facebook score: </h3>
                                <p>Analysis comments: </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}

export default App;