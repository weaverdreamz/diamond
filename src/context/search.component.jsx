import {createContext, useState} from 'react';

export const SearchContext = createContext({

    displaySearch:false,
    setDisplaySearch: ()=>{

    }
})

export const SearchProvider = ({children})=>{
    const [displaySearch, setDisplaySearch] = useState(false);
    const value = {displaySearch, setDisplaySearch}
    return(

        <SearchContext.Provider value={value}>{children}</SearchContext.Provider>

    )
}