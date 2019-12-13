import React from 'react'

class RoomList extends React.Component {
    render () {
        const orderedRooms = [...this.props.rooms].sort((a, b) => a.id > b.id)
        return (
            <div className="rooms-list">
                <ul>
                <h3>Your rooms:</h3>
                    {orderedRooms.map(room => {
                        const active = room.id === this.props.roomId ? 'active' : '';
                        return (
                            <li key={room.id} className={"room " + active}>
                                <div onClick={() => this.props.subscribeToRoom(room.id)}
                                   href="#">
                                   # {room.name}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default RoomList