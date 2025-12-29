import React from 'react'

type Props = {
    id?: string;
    chnageFunc: any;
    className?: string;
    placeHolder?: string;
}

const Password: React.FC<Props> = ({ id = "password", chnageFunc, className = "password", placeHolder }: Props) => {
    return (
        <>
            <input type="password" className={className} id={id} name="password" placeholder={placeHolder} onChange={chnageFunc} />
        </>
    )
}

export default Password