import { createContext, useState } from "react";

export const CameraContext = createContext()

export function CameraProvider({ children }) {

    const [position, setPosition] = useState([10, 10, 10])
    
    return (
    <CameraContext.Provider value={{position, setPosition}}>
        {children}
    </CameraContext.Provider>
    )

}