import React from 'react'


const SongList = ({songs}) => {

    const songItems = songs.map((song, index) => {
        return (

                <div id="result">

                    <p>  number <br></br><b id="number">{index + 1}</b> </p>   
                
                    <section id="flex">
                        <p> <b> {song["im:name"].label} </b> <br></br>
                        by <br></br>
                        <b> {song["im:artist"].label} </b> </p> 

                        <img src = {song["im:image"][2].label} className = "image"/>
                    </section>
                    
                    <br></br>

                    <p id="link1"> 
                        <a href={song["im:collection"].link.attributes.href} > Preview '{song["im:name"].label}' on iTunes </a> 
                    </p>
                    
                    <p id="link2">
                        <a href={song["im:artist"].attributes.href}> More from {song["im:artist"].label} </a>
                    </p> 

                </div>
            )
    })

    return (

        <div id="div">

            <p>

            {songItems}
            
            </p>

        </div>
    )

}

export default SongList