import React from 'react'

type Props = {}

const AppHeader: React.FC<Props> = (props: Props) => {
    return (
        < div className="text-center" >
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-400 tracking-wide">
                EXPENSE TRACKER
            </h1>
            <p className="text-white text-sm mt-2 opacity-80">Track • Save • Grow</p>
        </div >
    )
}

export default AppHeader