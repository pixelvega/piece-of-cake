import React from 'react'
import UserLayout from 'components/layouts/UserLayout'

interface ILayoutManager {
  children: React.ReactNode
}

const LayoutManager: React.FC<ILayoutManager> = ({ children }) => {
  return (
    <>
      <UserLayout>
        {children}
      </UserLayout>
    </>
  )
}

export default LayoutManager