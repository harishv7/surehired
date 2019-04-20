import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import Head from '../../components/head'
import Nav from '../../components/nav-dark'
import Footer from '../../components/footer'
import ReactLoading from 'react-loading';
import Router from 'next/router'
import Cookies from 'js-cookie'
import ReactTable from 'react-table'

const title = "SureHired"
const subtitle = "Dashboard"
const description = ""

class App extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.handleCreateJob = this.handleCreateJob.bind(this);
        this.handleViewJob = this.handleViewJob.bind(this);

        this.state = {
            loading: false,
            name: Cookies.get('name'),
            userId: Cookies.get('userId')
        }
    }

    componentDidMount() {
        if (this.state.name == null || this.state.userId == null) {
            Router.push('/login');
        } else {
            this.getJobs();
        }
    }

    getJobs() {
        fetch('/api/v1/jobs?userId=' + Cookies.get('userId'), {
            method: 'GET'
        }).then((response => {
            return response.json();
        })).then(list => {
            console.log(list);
            this.setState({
                jobs: list
            })
        });
    }

    componentDidCatch(error, errorInfo) {
        console.log(errorInfo);
        Router.push('/login');
    }

    handleCreateJob(jobId) {
        console.log(jobId);
        Router.push('/app/stepOne');
    }

    handleViewJob(data) {
        console.log(data)
    }

    render() {
        return (
            <div>
                <Head title="Home" />
                <Nav isLoggedIn={true} />
                <div className="app-hero-dashboard">
                    <div className="container">
                        <div className="row step-1">
                            <div className="col-md-12">
                                <h1>Dashboard</h1>

                                <p>You're taking the first step in boosting your chances of getting hired.</p>
                                <p>Simply drag and drop your resume
                                    onto the box or click on it to upload your resume in PDF format.</p>

                                <button type="button" className="btn btn-primary" onClick={this.handleCreateJob}>Create Job</button>

                                {this.state.jobs ?
                                    <table className="dashboard-table table table-dark table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col"><b>TITLE</b></th>
                                                <th scope="col"><b>STATUS</b></th>
                                                <th scope="col"><b>OPTIONS</b></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.jobs.map(function (job, index) {
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row">{job.title}</th>
                                                        <td>{job.status}</td>
                                                        <td><button type="button" className="btn btn-info" onClick={this.handleViewJob(job)} key={index}>
                                                            View Job
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            }, this)}
                                        </tbody>
                                    </table>
                                    : ""}

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