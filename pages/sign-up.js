import Head from '../components/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Footer from '../components/footer'
import SignUpForm from '../components/signUpForm'

const title = 'Sign Up'
const subtitle = ''
const description = ''

const SignUp = () => (
  <div>
    <Head title="Sign Up" />
    <Nav />
    <Hero title={title} subtitle={subtitle} description={description} />
    <SignUpForm />
    <Footer />
  </div>
)

export default SignUp
