import Image from 'next/image'
import React from 'react'

const TopCompanies = () => {
    return (
        <div className='border border-slate-300 p-4 mt-11 mb-9'>
            <h3 className="text-slate-900	font-bold">
                Top companies offer this course to their employees
            </h3>
            <p className='text-slate-500'>This course was selected for our collection of top-rated courses trusted by businesses worldwide. <span className='text-purple-500'>Learn more</span></p>
            <div className='flex space-x-4 h-10'>
                <Image width={300} height={200} src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="Nasdaq Logo" />
                <Image width={300} height={200} src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="Volkswagen Logo" />
                <Image width={300} height={200} src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="Box Logo" />
                <Image width={300} height={200} src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="NetApp Logo" />
                <Image width={300} height={200} src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="Eventbrite Logo" />
            </div>

        </div>
    )
}

export default TopCompanies