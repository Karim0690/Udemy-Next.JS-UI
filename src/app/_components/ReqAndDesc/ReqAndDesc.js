import React from 'react'

const ReqAndDesc = ({ requirments,WhoThisCourseIsFor}) => {
    return (
        <>
            <h2 className="text-2xl font-bold text-slate-800">Requirements</h2>
            <ul className="max-w-4xl mx-auto p-4">
                {requirments.map((req, idx) => <li key={idx} className="text-lg leading-relaxed text-gray-700 mb-6">{ req}</li>)}    
              </ul>
            <h2 className="text-2xl font-bold text-slate-800"> 
                Description
            </h2>
            <div className="max-w-4xl mx-auto p-4">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    This is a fun project-based course to learn how to create awesome layouts using the
                    <span className="font-bold"> Tailwind CSS framework </span>
                    and get comfortable using utility classes over something like Bootstrap, which uses component-based classes.
                    Let's take a look at the outline for this course...
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">✔️ The Sandbox</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    I don't want to jump right into the projects, though you certainly could if you want.
                    So the first two sections, we will be working in a coding sandbox.
                    In every new video in these sections, we will have a new file to experiment with and
                    learn all about a certain aspect of Tailwind. For example, we will have pages/videos
                    for colors, typography, spacing, flex classes, and much more.
                    This allows us to essentially touch on all parts of Tailwind in a specific order,
                    rather than just jumping right into projects.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">✔️ Mini-Projects</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    Next, we will take what we learn in the sandbox environment and use it to create some small projects.
                    These are things that will take 10 - 20 minutes to create and we will do it all in one video per project.
                    The mini-projects include:
                </p>

                <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 mb-6">
                    <li>Email Subscribe Card</li>
                    <li>Pricing Grids</li>
                    <li>Product Modal</li>
                    <li>Image Gallery</li>
                    <li>Login Modal</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">✔️ Website Projects</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    Next, we will start to work on larger landing-page websites.
                    This will really put what you learned to the test.
                    There will be 6 different websites. They are all very modern and clean-looking.
                    We partnered with Frontend Mentor for the designs.
                    Some projects will have a bit of JavaScript for things like hamburger menus, tabs, and some validation. Let's take a look at the projects:
                </p>

                <ul className="list-disc list-inside text-lg leading-relaxed text-gray-700 mb-6">
                    <li>Clipboard Website</li>
                    <li>Loopstudios</li>
                    <li>Shortly</li>
                    <li>Testimonial Grid</li>
                    <li>Fylo</li>
                    <li>Bookmark</li>
                </ul>
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Who this course is for:</h2>
            
            <ul className="max-w-4xl mx-auto p-4">
                {WhoThisCourseIsFor.map((req, idx) => <li key={idx} className="text-lg  leading-relaxed text-gray-700 mb-6" >{ req}</li>)}    
              </ul>
        </>
    )
}

export default ReqAndDesc