import React from 'react'
import Reset from '../components/Reset'

const ResetPage = ({ query }) => {
  const { resetToken } = query

  return (
    <div>
      <Reset resetToken={resetToken} />
    </div>
  )
}

export default ResetPage
