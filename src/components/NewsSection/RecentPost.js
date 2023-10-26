import React from 'react'

const RecentPost = ({ title, date }) => {
  return (
    <div className="recent-post">
        <h4>{title}</h4>
        <p>{date}</p>
        <div className="border"></div>
    </div>
  )
}

export default RecentPost