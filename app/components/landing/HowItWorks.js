import React from 'react'
import HowItWorksStep from './HowItWorksStep'

const steps = [
    { step_no: 1, step_label: "Contact us by phone, WhatsApp, email or webform" },
    { step_no: 2, step_label: "Book an initial session of 60 minutes for getting to know, presenting and analysing the problem" },
    { step_no: 3, step_label: "Forming a therapeutic / progressive relationship, agree on the nature, type, time and duration of sessions" },
    { step_no: 4, step_label: "Successful completion of sessions, achieve desired results, detach from regular sessions. Maintain a healthy detached relationship" }
]

const HowItWorks = () => {
  return (
    <div className='w-screen bg-white flex flex-col items-center justify-center pb-24 px-80 font-main'>
        <h2 className="text-5xl font-light text-gray-700">How It Works — Simple as 1, 2, 3, 4</h2>
        <div className="w-24 h-1 bg-orange-500 mt-4 mb-16"></div>
        <div className="flex items-start justify-center gap-8">
            {steps.map((step) => (
                <HowItWorksStep key={step.step_no} step_no={step.step_no} step_label={step.step_label} />
            ))}
        </div>
    </div>
  )
}

export default HowItWorks