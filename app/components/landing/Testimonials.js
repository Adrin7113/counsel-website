import React from 'react';
import { FaUserAlt, FaUsers, FaQuoteLeft } from 'react-icons/fa';
import { BsDisplay } from 'react-icons/bs';

const stats = [
	{
		icon: <FaUserAlt />,
		number: '10,801',
		label: 'CLIENT SESSIONS',
	},
	{
		icon: <FaUsers />,
		number: '1,205',
		label: 'TRAININGS & WORKSHOPS',
	},
	{
		icon: <BsDisplay />,
		number: '577',
		label: 'VIRTUAL CLIENT SESSIONS',
	},
	{
		icon: <BsDisplay />,
		number: '55',
		label: 'VIRTUAL TRAINING WORKSHOPS',
	},
];

const testimonials = [
	{
		quote:
			'Regarding the impact of all these sessions on our two sons, I am very happy with the outcome, Both of them are much better persons as individuals and with their peer group and family. I would definitely pass on any teenager to the guidance of Dr. Susan. It is so good to get this kind of support in this current world. Even those areas which parents are unable to get through to their children are well dealt with in this environment.',
		author: 'George and Teresa',
	},
	{
		quote:
			"Wow, I could relate to you so well 'the effects of imposter syndrome'...it was such a cultural thing. We were brought up by our parents to be humble... let others talk about your achievement. We were not allowed to talk.. it was considered arrogance. Really it leads to low self esteem. Thank you ma'am for such a wonderful podcast. I am at peace and forgave my mom after listening to your podcasts. We need to listen to this podcast over and over again to outgrow this trait. Thank you ma'am,",
		author: 'Divya',
	},
	{
		quote:
			'I heard your radio talk when I was 2 months pregnant and I suggested to my husband to take a parenting preparation session with you. We wanted to clear our pregnancy related doubts and learn the right parenting skill in taking care of our kid. We wanted to learn it from and authentic person. You have explained to us everything in detail as told us that it is not that easy job to be a parent. We have confidence that we will follow your advises. We are confident that if we are in doubt we can reach out to you any time. We are happy and thankful for meeting you, knowing you and learnt from you. Thank you so much, you are great,',
		author: 'Ajuna',
	},
];

const Testimonials = () => {
	return (
		<section className="bg-[url('/landing/testimonials.png')] bg-cover bg-center relative text-white py-20 font-main min-h-[80vh]">
            {/* Slight shade over the background image */}
        <div className="absolute inset-0 w-full h-full bg-black/80"></div>
			<div className="container mx-auto px-4 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-20">
					{stats.map((stat, index) => (
						<div key={index} className="flex flex-col items-center">
							<div className="text-5xl mb-4">{stat.icon}</div>
							<div className="text-4xl font-bold">{stat.number}</div>
							<div className="text-lg mt-2">{stat.label}</div>
						</div>
					))}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="p-8 rounded-lg relative">
							<FaQuoteLeft className="absolute top-4 left-4 text-5xl text-gray-600" />
							<p className="text-gray-300 mb-6 mt-8">{testimonial.quote}</p>
							<p className="text-right font-bold">- {testimonial.author}</p>
						</div>
					))}
				</div>

				{/* <div className="text-center mt-16 relative z-10">
					<button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300">
						Success Stories and Testimonials
					</button>
				</div> */}
			</div>
		</section>
	);
};

export default Testimonials;