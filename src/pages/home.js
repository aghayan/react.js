import {Header} from './header.js'
import {Main} from './main.js'
import {Footer} from './footer.js'
// import {Custom} from '../button/button.js'

export function Home(){
    return(
        
      <div style={{justifyContent:'center',display:'flex', gap:'20px'}}>
        <h1>Home</h1>
        <Header/>
        <Main/>
        <Footer/>
        {/* <Custom text='Click' style={{background:'red' ,color:'red'}} /> */}
      </div>
    )
  };

