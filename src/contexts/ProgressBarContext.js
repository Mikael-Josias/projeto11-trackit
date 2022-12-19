import { createContext, useState } from "react";

export const ProgressBarContext = createContext();

export default function ProgressBarProvider({children}){
    const [progress, setProgress] = useState(0);

    const calculateProgress = (done, total) => {
        const perc = (done / total) * 100;
        setProgress(perc);
    }

    return (
        <ProgressBarContext.Provider value={{progress, calculateProgress}}>
            {children}
        </ProgressBarContext.Provider>
    );
}