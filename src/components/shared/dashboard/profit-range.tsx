import React from 'react'

type Props = {}

const ProfitRange = (props: Props) => {
    return (
        <div className={`bg-accent-color-1 rounded-2xl max-md:w-full flex flex-col  items-start gap-4 text-white py-8 px-6 shadow-sm`}>
            <div className='flex'>
                {/* This should be a graph sign image */}
                <div className='px-10 rounded-xl bg-white pt-1'></div>
            </div>
            <h3>Earnings</h3>
            <div className={`text-3xl`}>
                <span className={`text-gray-300`}>$</span><span className={`font-semibold`}>8,350</span>
            </div>
            <div className={`text-sm bg-blue-400 px-2 py-1 text-gray-800 rounded-2xl`}>
                {/* This information of 10% profit increase since last month should be fetched from DB and stored in a state */}
                <span className="text-nowrap">+10% since last month</span>
            </div>
        </div>
    )
}

export default ProfitRange