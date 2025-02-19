import React from 'react'

const layout = ({ children }:
    { children: React.ReactNode }) =>
{
  return (
    <main>
        SIDEBAR
        {children}
    </main>
  )
}

export default layout
