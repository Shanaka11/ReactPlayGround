// React Imports
import React from 'react'
// Material UI
import { makeStyles } from '@material-ui/styles'
import Carousel from 'react-material-ui-carousel'

// Style
const useStyles = makeStyles(theme => ({
    // mainContainer: {
    //     width:
    // },
    container: {
        width: '100vw',
    },
    image:{
        width: '100vw'
    }
}))


const Carousal = () => {
    var items = [
        {
            name: "Image #1",
            src: 'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=pexels-pok-rie-132037.jpg&fm=jpg'
        },
        {
            name: "Image #2",
            src: "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?cs=srgb&dl=pexels-martin-damboldt-814499.jpg&fm=jpg"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

const Item = (props) => {

    const classes = useStyles()

    return (
        // <Paper className={classes.container}>
            <img alt={props.item.name} src={props.item.src} className={classes.image}/>
        // </Paper>
    )
}

export default Carousal
