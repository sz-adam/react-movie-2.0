import React from 'react'

export const DetailsContextDefaults = {
    value: [],
    setValue: () => { }
}

export const DetailsContext = React.createContext(DetailsContextDefaults);