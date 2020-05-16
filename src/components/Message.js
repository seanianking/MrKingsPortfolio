import React from 'react'

function Message() {
    return (
        <div>
                <div className="quickview">
                    <header className="quickview-header is-primary">
                        <p className="title">Contact me here:</p>
                    </header>

                    <div className="quickview-body is-success">
                    <div className="tile box">This is a Tile</div>
                    <div className="tile box">This is a Tile</div>
                    <div className="tile box">This is a Tile</div>
                    <div className="tile box">This is a Tile</div>
                    <div className="tile box">This is a Tile</div>
                    </div>

                    <footer className="quickview-footer is-primary">
                        <div>Footer space</div>
                    </footer>
                </div>
        </div>
    )
}

export default Message
