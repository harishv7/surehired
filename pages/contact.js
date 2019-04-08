import Head from '../components/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import About from '../components/about'
import Footer from '../components/footer'

const title = 'Contact'
const subtitle = 'Got a question. Drop it here!'
const description = ''

export default function Contact() {
  return (
    <div>
      <Head title="Contact" />
      <Nav />
      <Hero title={title} subtitle={subtitle} description={description} />
      <About />
      <Footer />
    </div>
  )
}
