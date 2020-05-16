import React, {useContext} from 'react'
import { CastMessageContext } from '../pages/Adventures'

function CastMessage() {
    const {handleMessageCasting, castState} = useContext(CastMessageContext);
    return (
        <div>
            <p {...castState ? true : null}>your message is cast</p>
        </div>
    )
}

export default CastMessage
