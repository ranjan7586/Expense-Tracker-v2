import React from 'react'

type Props = {
    id?: string;
    chnageFunc: any;
    className?: string;
    placeHolder?: string;
}

const Email: React.FC<Props> = ({ id = "email", chnageFunc, className = "email", placeHolder }: Props) => {
    return (
        <>
            <input type="email" className={className} id={id} name="email" placeholder={placeHolder} onChange={chnageFunc} />
        </>
    )
}

export default Email