// Material UI
import { makeStyles } from '@material-ui/styles'
// Local Imports
import Calender from './Components/Calender/Calnder'
import Carousal from './Components/Carousal/CarousalNew'
import Filter from './Components/TableFilter/TestContainer'

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
      {/* <Calender /> */}
      {/* <Carousal /> */}
      <Filter />
    </div>
  );
}

export default App;
