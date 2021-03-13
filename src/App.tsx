import React from 'react';
import Header from './components/Header';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




const App = () =>{
  return(
  <div> 
    <Typography variant="h2" style={{textAlign:"center"}}>Reactjs with MaterialUI</Typography>
    <Button variant="contained" color="primary"  style={{marginLeft:650}}>Now Start Coding</Button>
    <Header />
  </div>

  )
}



export default App