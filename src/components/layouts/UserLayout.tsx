import React from 'react'
import Header from 'components/blocks/Header/Header'
import Footer from 'components/blocks/Footer/Footer'

interface IUserLayout {
  children: React.ReactNode
}

const UserLayout: React.FC<IUserLayout> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default UserLayout