import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/app', label: 'Try now!' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav className="navbar navbar-expand-md fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">
        <span className="brand-title">
          Sure<b>Hired</b>
        </span>
      </a>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbar2SupportedContent">
        <i className="fa fa-bars" aria-hidden="true" />
      </button>
      <div
        className="collapse navbar-collapse text-center justify-content-end"
        id="navbar2SupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/index">
              <a className="nav-link">HOME</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">ABOUT</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a className="nav-link">CONTACT</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/sign-up">
              <a className="nav-link">SIGN UP</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/login">
              <a className="nav-link">LOGIN</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

// const Nav = () => (
//   <nav>
//     <ul>
//       <li>
//         <Link prefetch href="/">
//           <a>SureHired.</a>
//         </Link>
//       </li>
//       <ul>
//         {links.map(({ key, href, label }) => (
//           <li key={key}>
//             <Link href={href}>
//               <a>{label}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </ul>

//     <style jsx>{`
//       :global(body) {
//         margin: 0;
//         font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
//           Helvetica, sans-serif;
//       }
//       nav {
//         text-align: center;
//       }
//       ul {
//         display: flex;
//         justify-content: space-between;
//       }
//       nav > ul {
//         padding: 4px 16px;
//       }
//       li {
//         display: flex;
//         padding: 6px 8px;
//       }
//       a {
//         color: #067df7;
//         text-decoration: none;
//         font-size: 13px;
//       }
//     `}</style>
//   </nav>
// )

export default Nav
