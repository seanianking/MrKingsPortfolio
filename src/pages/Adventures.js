import React, {useState} from 'react'
import AdventuresBody from '../components/AdventuresBody'
import Navbar from '../components/navbar'


export const CastMessageContext = React.createContext({
});
// Using context to render CastMessage component

function Adventures() {
    const [castState, setCastState] = useState(true);

    const handleMessageCasting = e => {
        e.preventDefault();
        console.log('ready to cast');
        setCastState(!castState);
    }


    return (
            <CastMessageContext.Provider value = {{
                handleMessageCasting, castState
            }}>
            <AdventuresBody/>
            <Navbar/>
            </CastMessageContext.Provider>
    )
}

export default Adventures
