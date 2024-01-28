import React from 'react'
import { navigationLinks } from '../data'

const NavigationLinks = () => {
  //   const [count, setCount] = useState(0)

  return (
    <>
      {navigationLinks.map((link) => {
        const { id, href, linkName } = link
        return (
          <li key={id}>
            <a href={href} className='nav-link'>
              {linkName.charAt(0).toUpperCase() + linkName.slice(1)}
            </a>
          </li>
        )
      })}
    </>
  )
}

export default NavigationLinks
