import React from 'react'

const data = {
    "title": "Get to Know Her",
    "description": "Dr Susan Koruthu is a licenced multifaceted life psychologist, mind wellness practitioner and human relationship expert. She is a result-oriented client-focused personal transformation coach, psychotherapist, character & personality disorder therapist, NPD expert, life skills coach, student counsellor, fertility therapist, parenting expert, marriage & family therapist, couple efficiency coach, private counsel to teens and parents, karma and faith therapist, human sexuality coach & therapist, personality and behaviour development specialist. Dr Susan Koruthu is a business psychologist who helps the victims of antisocial behaviours and personality disorders in businesses. She is an experienced corporate wellness coach and counsellor who help employees and leaders to successfully deal with workplace issues, performance stress and anxieties, and career progress challenges. Dr Susan is a personal advisor to business owners, leaders on performance strategies, people management, organisational culture and behaviour. She started her career with WHO street children rehabilitation project in Kerala. She runs her own life and mind wellness practices in Dubai."
}

const GetToKnow = () => {
  return (
    <div className='min-h-[70vh] w-screen bg-gray-200 flex flex-col items-center justify-center p-12 font-main'>
        <h2 className="text-5xl font-light text-gray-700">{data.title}</h2>
        <div className="w-24 h-1 bg-orange-500 mt-4 mb-8"></div>
        <p className="text-center text-gray-600 max-w-4xl text-xl font-light leading-7">
            {data.description}
        </p>
        <button className="mt-8 px-8 py-3 border border-orange-500 rounded-full text-orange-500 font-light hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-200 cursor-pointer">Learn More</button>
    </div>
  )
}

export default GetToKnow