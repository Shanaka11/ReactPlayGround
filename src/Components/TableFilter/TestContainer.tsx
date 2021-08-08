// React Imports
import React, { useState } from 'react'
// Material UI Imports
// Local Imports
import Filter from './Filter'

const TestContainer = () => {

    // State
    const [filterString, setFilterString] = useState('')

    // Const
    const filterData = [
        {
            label: 'Bakery 12',
            id: 12
        },
        {
            label: 'Science 1',
            id: 1
        },
        {
            label: 'Party 21',
            id: 21
        },
        {
            label: 'Other 413',
            id: 413
        },
    ]

    console.log(filterString)

    return (
        <div>
            <Filter data={filterData} filterString={filterString} setFilterString={setFilterString}/>
        </div>
    )
}

export default TestContainer
