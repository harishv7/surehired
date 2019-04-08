import Head from '../components/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Footer from '../components/footer'
import LoginForm from '../components/loginForm'

const title = 'Login'
const subtitle = ''
const description = ''

const Login = () => (
  <div>
    <Head title="Login" />
    <Nav />
    <Hero title={title} subtitle={subtitle} description={description} />
    <LoginForm />
    <Footer />
  </div>
)

export default Login
