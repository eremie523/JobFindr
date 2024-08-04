import { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    loading: boolean,
}

const Loader1 = ({ loading, children }: Props) => {
    if(loading) {
        return (
            <div className={'h-full w-full flex items-center justify-center'}>Loading....</div>
        )
    }else {
        return (
            <>
                {children}
            </>
        )
    }
}

export default Loader1