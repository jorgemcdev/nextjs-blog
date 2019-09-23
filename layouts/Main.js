import Head from 'next/head'
import Wrapper from './Wrapper'
import Nav from 'components/Nav/Nav'
import Footer from 'components/Footer/Footer'

export default ({ children, title = 'This is the default title' }) => (
  <Wrapper>
    <Head>
      <title>{ title }</title>
    </Head>

    <header>
      <Nav />
    </header>

    <main>
      { children }
    </main>

    <Footer>
      Footer
    </Footer>
  </Wrapper>
)