import React from 'react'

import {feedback} from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';


const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.flexCenter} flex-col ${styles.paddingY} relative`}>
      {/* Todo */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={`${styles.heading2}`}>
          What people are <br className='sm:block hidden'/> saying about us.
        </h1>

        <div className='w-full md:mt-0 mt-6' >
          <p className={`${styles.paragraph} max-w-[450px] text-left`}>
            Everything you need to accept credit card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="relative flex flex-wrap sm:justfy-start justify-center w-full feedback-container z-[1]">
        {feedback.map(card => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials