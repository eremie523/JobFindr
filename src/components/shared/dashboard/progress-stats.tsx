import React from 'react'
import ProfitRange from './profit-range'
import ProjectStats from './project-stats'

type Props = {}

const ProrgessStats = (props: Props) => {
    return (
        <div className={`flex gap-6 md:flex-row flex-col items-start`}>
            <ProfitRange />
            <ProjectStats />
        </div>
    )
}

export default ProrgessStats