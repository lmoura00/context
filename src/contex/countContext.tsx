import {createContext, ReactNode, useState} from 'react'

type CountContext = {
    count: number,
    addCount: ()=>void
    minusCount: ()=>void
}

export const countContext = createContext<CountContext>({}as CountContext)

export const CountProvider = ({children}:{children: ReactNode})=>{
    const [count, setCount] = useState(0)
    const addCount = ()=>{
        setCount(count+1)
    }
    const minusCount = ()=>{
        setCount(count-1)
    }
    return(
        <countContext.Provider value={{count, addCount, minusCount}}>
            {children}
        </countContext.Provider>
    )
}