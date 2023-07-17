import {Home} from './pages/home.js';
import {Custom} from './button/button.js'
// import {Input} from './input/input.js'

function App(){
  return(
    <div>
      <h1 style={{textAlign:'center', color:'purple'}}>App</h1>
      <Home/>
      <Custom/>
      {/* <Input/> */}
    </div>
  )
};

export default App;