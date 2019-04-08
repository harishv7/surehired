import Head from '../components/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import About from '../components/about'
import Footer from '../components/footer'

const title = 'About'
const subtitle = 'Everything you need to know about us'
const description = ''

export default function AboutPage() {
  return (
    <div>
      <Head title="About" />
      <Nav />
      <Hero title={title} subtitle={subtitle} description={description} />
      <About />
      <Footer />
    </div>
  )
}
