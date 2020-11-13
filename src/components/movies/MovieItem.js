import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const MovieItem = ({ title, poster_path, overview, vote_average, original_language, release_date }) => {
    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img 
            src={poster_path ? IMG_API + poster_path : "https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} 
            alt={title}
            />
        </div>
        <div className='card-back'>
          <h3>{title}</h3>
          <ul>
            <li>
              <strong>Vote Average : </strong> {vote_average}
            </li>
            <li>
              <strong>Original Language : </strong> {original_language}
            </li>
            <li>
              <strong>Realease Date : </strong> {release_date}
            </li>
            <li>
              <strong>Synopsis : </strong> <p className="overflow-ellipsis"> {overview} </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default MovieItem
