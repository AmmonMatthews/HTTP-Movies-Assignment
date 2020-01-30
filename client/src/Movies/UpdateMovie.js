import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const initialState = {
    title:'',
    director: '',
    metascore: '',
}


const UpdateMovie = (props) => {
    const [movie, setMovie] = useState(initialState);
    const id = props.match.params.id

    const handleChange = e => {
        setMovie({...movie, [e.target.name]: e.target.value})
        
    }

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then(res => {
                setMovie(res.data)
            })
            .catch(er => {
                console.log( "error", er.response)
            })

    },[id])

    const handleSubmit = e => {
        e.preventDefault();
        // make a PUT request to edit the item
        axios
          .put(`http://localhost:5000/api/movies/${id}`, movie)
          .then(res => {

            console.log(res)
            // res.data is the FULL array with the updated item
            // That's not always the case. Sometimes you need to build your
            // own updated array
            // props.setItems(res.data);
            props.history.push(`/movies/${id}`);
          })
          .catch(err => console.log(err));
      };

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
                    type="number"
                    placeholder="metascore"
                    value={movie.metascore}
                    onChange={handleChange}
                />
                
                <button onClick={handleSubmit}>Update</button>
            </form>
        </div>
    )
}

export default UpdateMovie;