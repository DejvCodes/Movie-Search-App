import allMovies from "./data"
import { useState, useEffect } from "react"

const App = () => {
  const [searchingText, setSearchingText] = useState("")
  const [filteredMovies, setFilteredMovies] = useState([])

  useEffect(() => {
    const moviesAfterFilter = allMovies.filter((oneMovie) => {
      return oneMovie.title.toLocaleLowerCase().includes(searchingText.toLocaleLowerCase())
    })
    setFilteredMovies(moviesAfterFilter)
  }, [searchingText])

  return <div className="movies-box">
    <form>
      <input 
        type="text" 
        placeholder="Název filmu"
        value={searchingText}
        onChange={(event) => setSearchingText(event.target.value)}
      />
    </form>
    <div className="all-movies">
      {
        filteredMovies.map((oneMovie) => {
          const {id, image, title, age, tags, description} = oneMovie

          return <div className="one-movie" key={id}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{age}</p>
            <p>{tags}</p>
            <p>{description}</p>
          </div>
        })
      }
    </div>
  </div>
}

export default App