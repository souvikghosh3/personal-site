import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout(props: React.PropsWithChildren<unknown>) {
  return (
    <div className="layout">
        <Navbar />
        <main>{props.children}</main>
    </div>
  );
}
