// just lazy to move in context and remove it so just kept it here
//its empty if anyone doesnt notice it

import { createContext } from "react";

const NotesContext = createContext()


export const NotesProvider = ({children}) => {

    const abc  = () => {

    }
   return <NotesContext.Provider value = {{

       abc
   }
    }>
        {children}
    </NotesContext.Provider>
}

export default NotesContext