import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async () => {
    const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
        <div className='home-content'>
          <header className='home-content'>
            <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name}
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
