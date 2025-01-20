import { createContext, useState } from 'react';

export const StatsContext = createContext();

export const StatsProvider = ({ children }) => {
    const [Health, setHealth] = useState(100);
    const [Wealth, setWealth] = useState(100);
    const [Friends, setFriends] = useState(100);
    const [Education, setEducation] = useState(100);
    const [Fame, setFame] = useState(100);
    const [Luck, setLuck] = useState(100);
    const [Round, setRound] = useState(0);
    

    return (
        <StatsContext.Provider
            value={{
                Health,
                setHealth,
                Wealth,
                setWealth,
                Friends,
                setFriends,
                Education,
                setEducation,
                Fame,
                setFame,
                Luck,
                setLuck,
                Round,
                setRound,

            }}
        >
            {children}
        </StatsContext.Provider>
    );
};
