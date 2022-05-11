import React from 'react'

const SongList = ({songs}) => {

    const songItems = songs.map((song, index) => {
        return (

            <ul>
                <li> {song.title.label}</li> 
                <li> Chart Position : {index + 1} </li> <br></br>
            </ul>)
    
    })

    return (

        <div>

            <ul>

            {songItems}
            
            </ul>

        </div>
    )

}

export default SongList