import React from 'react'
import Navbar from 'react-bootstrap/Nav'

export function Nav({ activeKey, items }) {
  return (
    <Navbar activeKey={activeKey}>
      {items.map((item) => (
        <Navbar.Item key={item.href}>
          <Navbar.Link href={item.href}>{item.title}</Navbar.Link>
        </Navbar.Item>
      ))}
    </Navbar>
  )
}
