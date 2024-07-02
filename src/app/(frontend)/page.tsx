import React from 'react'
import HeaderNavBar from '@/components/app/NavBar'
import Dummy from '@/components/app/Dummy'

const home = () => {
  return (
    <div className="mx-auto flex w-full flex-col justify-start">
      <HeaderNavBar />
      <main className="flex min-h-screen flex-col gap-4 py-4 lg:container ">
        <Dummy />
      </main>
    </div>
  )
}

export default home
