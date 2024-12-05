import Header from "../component/header";
import useContex from "../hooks/useCount";

const Home = ()=>{
    const {count, addCount, minusCount} = useContex()
    return(
        <div>
        <Header/>
        <h1>{count}</h1>
        <button onClick={addCount}>+</button>
        <button onClick={minusCount}>-</button>
        </div>
    )
}

export default Home