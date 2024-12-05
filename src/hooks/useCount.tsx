import {useContext} from 'react'
import { countContext } from '../contex/countContext'

const useContex = ()=>{
    const contex = useContext(countContext)
    return contex
}

export default useContex