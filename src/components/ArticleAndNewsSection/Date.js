import React from 'react'

const Date = ({ day, month}) => {

    return (
        <div className="date">
            <p className="month"><span>{day}</span><br/>{month}</p>
        </div>
    )
}

export default Date