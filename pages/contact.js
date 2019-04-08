import Head from '../components/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import Contact from '../components/contact'
import Footer from '../components/footer'

const title = 'Contact'
const subtitle = 'Got a question. Drop it here!'
const description = ''

export default function ContactForm() {
  return (
    <div>
      <Head title="Contact" />
      <Nav />
      <Hero title={title} subtitle={subtitle} description={description} />
      <Contact />
      <Footer />
    </div>
  )
}
