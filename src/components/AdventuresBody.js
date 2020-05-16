import React, { useState } from 'react'
import Navbar from './navbar';
import Message from './Message';

export const CastMessageContext = React.createContext({
});

function AdventuresBody() {
    const [castMessage, setCastMessage] = useState(false);

    const handleMessageCasting = e => {
        e.preventDefault();
        console.log('ready to cast');
        setCastMessage(!castMessage);
    }
    return (
        <CastMessageContext.Provider value={{ handleMessageCasting, setCastMessage }}>
            <div>
                <div className="hero is-fullheight is-link">
                    <div className="container has-text-centered">
                        <h1 className="title">Title</h1>
                        <h2 className="subtitle">Subtitle</h2>
                    </div>
                        <Navbar />
                    {castMessage && <Message />}
                </div>
            </div>
        </CastMessageContext.Provider>


    )
}

export default AdventuresBody;
