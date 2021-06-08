// React Imports
import React from 'react'
// Material UI
import { makeStyles } from '@material-ui/styles'
import { Grid, IconButton } from '@material-ui/core'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


// Styles
const useStyles = makeStyles(theme=>({
    control: {
        position: 'absolute',
        padding: '8px'
    },
    image:{
        width: '100vw',
    },
    nav:{
        backgroundColor: 'black',
        color: 'white',
        opacity: 0.5,
        '&:hover': {
            backgroundColor: 'black',
            opacity: 0.7
        }
    }
}))

const CarousalNew = () => {
    // Style
    const classes = useStyles()

    const imgs = [
        (<img key={1} alt='image1' src={'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?cs=srgb&dl=pexels-martin-damboldt-814499.jpg&fm=jpg'} className={classes.image}/>)
    ]
    // TODO
    // Create stepper component
    // Make responsive Nav button size = small else medium
    return (
        <>
        {/* Controls */}
        <Grid container justify='space-between' className={classes.control}>
            <Grid item>
                <IconButton className={classes.nav}>
                    <KeyboardArrowLeftIcon />
                </IconButton>
            </Grid>
            <Grid item>
                <Grid container direction='column'>
                    <Grid item>
                        Stepper
                    </Grid>
                </Grid>     
            </Grid>
            <Grid item>
                <IconButton className={classes.nav}>
                    <KeyboardArrowRightIcon />
                </IconButton>
            </Grid>
        </Grid>
        <div>
            { imgs }
        </div>
        </>
    )
}

export default CarousalNew
