import useContex from "../hooks/useCount";
const Header = ()=>{
    const {count} = useContex()
    return(
        <div style={{backgroundColor:'#ffbc43'}}>
            <h1>Cabeçalho</h1>
            <h2>{count}</h2>
        </div>
    )
}

export default Header