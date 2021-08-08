// React Imports
import React from 'react'
// Material UI Imports
import { Grid } from '@material-ui/core'
// Local Imports
import FilterItem from './FilterItem'

// Interfaces
interface Props {
    data: {
        id:number,
        label:string
    }[],
    filterString: string,
    setFilterString: (filterString: string) => void
}

const Filter:React.FC<Props> = ( { data, filterString, setFilterString } ) => {

    // Methods
    const handleFilterItemOnClick = (id:number, selected:boolean) => {
        if(selected){
            if(filterString.length === 0){
                setFilterString(`${id}`)
            }else{
                setFilterString(`${filterString},${id}`)
            }
        }else{
            const list = filterString.split(',')

            const reducer = (accumulator:string, currentValue:string, currentIndex:number) => {
                if(currentValue !== `${id}`){
                    if(accumulator === ''){
                        return accumulator = currentValue
                    }
                    return accumulator = accumulator + ',' + currentValue
                }
                return accumulator
            }

            setFilterString(list.reduce(reducer, ''))
            
        }
    }

    return (
        <Grid container spacing={1}>
            {
                data.map((item) => (
                    <Grid item key={item.id}>
                        <FilterItem item={item} handleOnClick={handleFilterItemOnClick}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Filter
