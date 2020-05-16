import React from 'react'

function Message() {
    return (
        <div>
            <div className="quickview">
                <header className="quickview-header">
                    <p className="title">Quickview title</p>
                </header>

                <div className="quickview-body">
                    <div className="quickview-block">Body Space</div>
                </div>

                <footer className="quickview-footer">
                        <div>Footer space</div>
                </footer>
            </div>
        </div>
    )
}

export default Message
