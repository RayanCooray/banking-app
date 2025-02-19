import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName : 'Ryan' , lastName : 'CH' , email : 'G2SbK@example.com' }

  return (
    <section className='home'>
        <div className='home-content'>
          <header className='home-content'>
            <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || 'Guest'}
            subtext="Access and manage your accounts and transactions effortlessly."
            />

            <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.45} 
            />
            </header>

            RECENT TRANSACTIONS
        </div>

      <RightSideBar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 250.50},
        {cuurentBalance: 250.50}]}
      />

    </section>
  )
}

export default Home
