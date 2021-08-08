// React Imports
import React, { useState } from 'react'
// Material UI Imports
import { makeStyles } from '@material-ui/styles'
import { 
    ToggleButton 
} from '@material-ui/lab';
// Local Imports

// Styles
const useStyles = makeStyles(theme => ({
    button: {
        width: '100%'
    }
  }))

// Interfaces
interface Props {
    item: {
        id: number,
        label: string
    },
    handleOnClick: (id:number, selected:boolean) => void
}

const FilterItem:React.FC<Props> = ( { item, handleOnClick } ) => {
    // Style
    const classes = useStyles()

    // State
    const [selected, setSelected] = useState(false)

    // methods
    const handleOnClickItem = () => {
        handleOnClick(item.id, !selected)
        setSelected(!selected)
    }

    return (
        <ToggleButton
            selected={selected}
            onChange={() => {
                handleOnClickItem()
            }}
            size='small'
            className={classes.button}
        >
            { item.label }
        </ToggleButton>
    )
}

export default FilterItem
