// React Imports
import React from 'react'
// Material UI imports
import { makeStyles } from '@material-ui/styles'
import { Grid, Button } from '@material-ui/core'

// Styles
const useStyles = makeStyles(theme => ({
    container: {
        height: 50,
        width: 50,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white'
    },
    selected: {
        backgroundColor: 'blue',
        color: 'white',
        '&:hover': {
            backgroundColor: 'blue',
            opacity: 0.7
        }
    },
    currentDate: {
        backgroundColor: 'green',
        color: 'white',
        // opacity: 0.7
    },
    notCurrentDate:{
        backgroundColor: 'lightgrey',
        // color: 'white'
    }
}))

const Day = ( { date, currMonth, currDate, selected, handleDateClick } ) => {

    // Styles
    const classes = useStyles()

    return (
        <Grid item>
            <Button 
                onClick={() => handleDateClick(date)} 
                className={[
                    classes.container, 
                    (currDate && !selected) ? classes.currentDate : undefined, 
                    currMonth ? undefined : classes.notCurrentDate,
                    selected ? classes.selected : undefined]}
                disabled={!currMonth}>
                {date}
            </Button>
        </Grid>
    )
}

export default Day
