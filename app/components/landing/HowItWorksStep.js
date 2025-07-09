import React from 'react'

const HowItWorksStep = ({step_no, step_label}) => {
  return (
    <div className="flex gap-4">
                <div className="flex items-center justify-center w-12 h-12 border-2 border-orange-500 rounded-full text-orange-500 text-2xl font-semibold flex-shrink-0">{step_no}</div>
                <p className="text-gray-600 min-w-50">{step_label}</p>
    </div>
  )
}

export default HowItWorksStep