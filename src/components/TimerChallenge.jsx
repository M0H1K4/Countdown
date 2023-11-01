import React from 'react'

export default function TimerChallange({title, targetTime}) {
  return (
    <section className='challange'>
      <h2>{title}</h2>
      <p className="challange-time">
        {targetTime} seconds
      </p>
    </section>
  )
}
