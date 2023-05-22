import BarChart from '@/components/BarChart'
import Header from '@/components/Header'
import RecentOrders from '@/components/RecentOrders'
import Sidebar from '@/components/Sidebar'
import TopCards from '@/components/TopCards'
import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Head from 'next/head'
const Dashboard = () => {
  return (
    <Sidebar>
      <Head>
        <title>AIO - Dashboard</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
         <main className='bg-gray-100 min-h-screen'>
        <Header/>
        <TopCards/>
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
            <BarChart/>
            <RecentOrders/>
        </div>
        </main>
    </Sidebar>
  
  )
}

export default Dashboard;
export const getServerSideProps=withPageAuthRequired();