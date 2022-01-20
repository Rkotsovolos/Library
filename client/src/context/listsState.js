import { createContext, useState } from "react";

const ListsContext = createContext();

function ListsProvider ({children}) {
    const [lists, setLists] = useState([])

    return <ListsContext.Provider value={{lists, setLists}} > {children}</ListsContext.Provider>

}

export {ListsContext, ListsProvider}