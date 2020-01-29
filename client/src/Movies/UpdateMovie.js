import React from "react";


const UpdateMovie = () => {


    return (
        <div>
            <form>
                <label htmlFor="title">Title</label>
                <input 
                    id="title"
                    name="title"
                    type="text"
                    placeholder="title"
                    // value={}
                    // onChange={}
                />

                <label htmlFor="director">Director</label>
                <input 
                    id="director"
                    name="director"
                    type="text"
                    placeholder="director"
                    // value={}
                    // onChange={}
                />

                <label htmlFor="metascore">Metascore</label>
                <input 
                    id="metascore"
                    name="metascore"
                    type="text"
                    placeholder="metascore"
                    // value={}
                    // onChange={}
                />
                
                <button>Update</button>
            </form>
        </div>
    )
}

export default UpdateMovie;