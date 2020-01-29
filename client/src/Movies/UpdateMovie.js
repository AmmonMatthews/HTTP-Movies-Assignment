import React, { useState } from "react";

const initialState = {
    title:'',
    director: '',
    metascore: '',
}



const UpdateMovie = () => {
    const [movie, setMovie] = useState(initialState);


    const handleChange = e => {
        setMovie({...movie, [e.target.name]: e.target.value})
        console.log(movie)
    }


    return (
        <div>
            <form>
                <label htmlFor="title">Title</label>
                <input 
                    id="title"
                    name="title"
                    type="text"
                    placeholder="title"
                    value={movie.title}
                    onChange={handleChange}
                />

                <label htmlFor="director">Director</label>
                <input 
                    id="director"
                    name="director"
                    type="text"
                    placeholder="director"
                    value={movie.director}
                    onChange={handleChange}
                />

                <label htmlFor="metascore">Metascore</label>
                <input 
                    id="metascore"
                    name="metascore"
                    type="text"
                    placeholder="metascore"
                    value={movie.metascore}
                    onChange={handleChange}
                />
                
                <button>Update</button>
            </form>
        </div>
    )
}

export default UpdateMovie;