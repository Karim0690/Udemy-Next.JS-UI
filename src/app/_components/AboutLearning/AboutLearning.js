import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const AboutLearning = ({ topics }) => {
    return (
        <div className="border-2 border-zinc-400 w-97 m-auto">

            <div className=" m-9">
                <h2 className="text-2xl font-bold text-slate-800 mb-9">What you'll learn</h2>
                <div >
                    <ul className=" grid grid-cols-2 gap-3">
                        {topics.map((topic, index) => (
                            <li key={index} className="flex items-start mb-2">
                                <AiOutlineCheck className=" mr-3" />
                                <span >{topic}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutLearning;
