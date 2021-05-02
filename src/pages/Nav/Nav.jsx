import React from 'react'
import Navbar from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

export function Nav({ activeKey, items }) {
  return (
    <Navbar activeKey={activeKey}>
      {items.map((item) => (
        <Navbar.Item key={item.href}>
          <Navbar.Link as={Link} to={item.href}>
            {item.title}
          </Navbar.Link>
        </Navbar.Item>
      ))}
    </Navbar>
  )
}
