import { useState } from "react"

let nextId = 0

export const AddingToArray = () => {
    const[name, setName] = useState('')
    const[artists, setArtist] = useState([])
    return <div>
        <h1>inspiring sculptors:</h1>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => {
            setArtist([
                ...artists,
                {id: nextId, name : name}
            ])
        }}>Add</button>

        <ul>
            {artists.map(artist => (
                <li key={artist.id}>{artist.name}</li>
            ))}
        </ul>
    </div>
}

let initialArtists = [
    {id: 0, name : "mark"},
    {id: 1, name : "marvin"},
    {id: 2, name : "doe"}
]
export const RemovingFromTheArray = () => {
    const[artists, setArtists] = useState(
        initialArtists
    )

    return <div>
        <ul>
            {artists.map(artist => (
                <li key={artist.id}>
                    {artist.name}{' '}
                    <button onClick={() => {
                        setArtists(
                            artists.filter(a => a.id !== artist.id)
                        )
                    }}> Delete</button>
                </li>
            ))}
        </ul>
    </div>
}