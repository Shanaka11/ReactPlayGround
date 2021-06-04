// Material UI
import { makeStyles } from '@material-ui/styles'
// Local Imports
import Calender from './Components/Calender/Calnder'

// Style
const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  }
}))

function App() {

  // Styles
  const classes = useStyles()

  return (
    <div className={ classes.container }>
      <Calender />
    </div>
  );
}

export default App;
