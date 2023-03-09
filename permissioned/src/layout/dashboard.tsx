import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const Dashboard: React.FC<Props> = () => {
  return <Outlet />
}

export default Dashboard
