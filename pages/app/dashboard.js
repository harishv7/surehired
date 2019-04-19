import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import Head from '../../components/head'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import ReactLoading from 'react-loading';
import Router from 'next/router'
import Cookies from 'js-cookie'
import ReactTable from 'react-table'
import { getJobs } from '../../api/service/jobs.service';

const title = "SureHired"
const subtitle = "Dashboard"
const description = ""

class App extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            loading: false,
            name: Cookies.get('name'),
            userId: Cookies.get('userId')
        }

        // this.getJobs();
    }

    // getJobs() {
    //     //http://localhost:3000/api/v1/jobs?userId=8JJhyFZ0Z
    //     fetch('/api/v1/jobs?userId' + Cookies.get('userId'), {
    //         method: 'GET'
    //     }).then((response => {
    //         return response.json();
    //     })).then(list => {
    //         console.log(list);

    //     });
    // }

    componentDidCatch(error, errorInfo) {
        console.log(errorInfo);
        Router.push('/login');
    }

    handleCreateJob(event) {
        event.preventDefault();
        Router.push('/app/stepOne');
    }

    render() {
        // const isLoading = this.state.loading;
        return (
            <div>
                <Head title="Home" />
                <Nav />
                <div className="app-hero">
                    <div className="container">
                        <div className="row step-1">
                            <div className="col-md-12">
                                <h1>Dashboard</h1>

                                <p>You're taking the first step in boosting your chances of getting hired.</p>
                                <p>Simply drag and drop your resume
                                    onto the box or click on it to upload your resume in PDF format.</p>

                                <button type="button" class="btn btn-dark" onClick={this.handleCreateJob}>Create Job</button>

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