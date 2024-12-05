import { CountProvider } from "./contex/countContext";
import Home from "./screens/home";

function App(){
  return(
    <CountProvider>
      <Home/>
    </CountProvider>
  )
}

export default App