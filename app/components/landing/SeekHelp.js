import React from 'react'

const data = {
    "title": "Seek Help — it's never too late",
    "description": "Dr Susan helps you overcome your psychological, behaviour, character, personality and mind related issues faced in personal, family, marriage, social, and career areas. There is no medicine used in her therapies. If you are already taking medications, you can be weaned from the medication through specially focused therapeutic sessions. You can seek her help if you are suffering issues such as personality disorders, behavioral issues, confidence issues, self-sabotage, early addiction issues, relationship issues, career stagnation, workplace issues, sexual behavior issues, fertility issues, living a troubled marriage, conduct disorders, teenage behaviour issues, social anxiety, stress, victim of a trauma or abuse, victim of narcissistic abuse, product of a dysfunctional family, victim of an abusive marriage, partner neglect and abuse, suffering from karma and living in regret. You can benifit from her skill-based eclectic theraputic counselling, learning skills coaching, life skills coaching, parenting skills coaching, marriage preparation coaching, career and business skills coaching. You can take virtual sessions with Dr Susan Koruthu from any part of the world."
}

const SeekHelp = () => {
  return (
    <div className='min-h-[70vh] w-screen bg-white flex flex-col items-center justify-center p-12 font-main'>
        <h2 className="text-5xl font-light text-gray-700">{data.title}</h2>
        <div className="w-24 h-1 bg-orange-500 mt-4 mb-8"></div>
        <p className="text-center text-gray-600 max-w-4xl text-xl font-light leading-7">
            {data.description}
        </p>
        <button className="mt-8 px-8 py-3 border border-orange-500 rounded-full text-orange-500 font-light hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-200 cursor-pointer">Learn More</button>
    </div>
  )
}

export default SeekHelp