import React from 'react'
import { useState } from 'react'
import Layout from '../Traffix3.O/Layout.jsx'
import Dashboard from '../Traffix3.O/Pages/Dashboard.jsx'
import Upload from '../Traffix3.O/Pages/Upload.jsx'
import Profile from '../Traffix3.O/Pages/Profile.jsx'
import Analytics from '../Traffix3.O/Pages/Analytics.jsx'
import Rewards from '../Traffix3.O/Pages/Rewards.jsx'
import Challenges from '../Traffix3.O/Pages/Challenges.jsx'
import Leaderboard from '../Traffix3.O/Pages/Leaderboard.jsx'
import FleetManagement from '../Traffix3.O/Pages/FleetManagement.jsx'
import APIIntegration from '../Traffix3.O/Pages/APIIntegration.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />
      case 'upload': return <Upload />
      case 'profile': return <Profile />
      case 'analytics': return <Analytics />
      case 'rewards': return <Rewards />
      case 'challenges': return <Challenges />
      case 'leaderboard': return <Leaderboard />
      case 'fleet': return <FleetManagement />
      case 'api': return <APIIntegration />
      default: return <Dashboard />
    }
  }

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  )
}

export default App