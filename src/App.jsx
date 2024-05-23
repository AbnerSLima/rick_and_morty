import { useState, useEffect } from 'react'
import './App.css'

function App() {
   const [inputId, setInputId] = useState("");
   const [charId, setcharId] = useState(1);
   const [name, setName] = useState("");
   const [status, setStatus] = useState("");
   const [species, setSpecies] = useState ("");
   const [gender, setGender] = useState ("");
   const [origin, setOrigin] = useState ("");
   const [location, setLocation] = useState ("");
   const [created, setCreated] = useState ("");
   const [image, setImage] = useState ("");
   const [episode, setEpisode] = useState ("");

   const defaultImage = "https://rickandmortyapi.com/api/character/avatar/66.jpeg";
   const defaultName = "? ? ?";
   const defaultValue = "- - -";

   const searchChar = async (id) => {
    if (id === "" || id > 826) {
      setImage(defaultImage);
      setName(defaultName);
      setStatus(defaultValue);
      setSpecies(defaultValue);
      setGender(defaultValue);
      setOrigin(defaultValue);
      setLocation(defaultValue);
      setCreated(defaultValue);
      setEpisode(defaultValue);
      return;
    }
    
      const url = `https://rickandmortyapi.com/api/character/${id}`
      const response = await fetch(url);
      const returne = await response.json();

      setName(returne.name)
      setStatus(returne.status)
      setSpecies(returne.species)
      setGender(returne.gender)
      setOrigin(returne.origin.name)
      setLocation(returne.location.name)
      setCreated(returne.created)

      const episodeNumbers = returne.episode.map(url => url.split('/').pop());
      const episodes = episodeNumbers.join(', ');
      setEpisode(episodes)

      setImage(returne.image)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      searchChar(inputId);
      setcharId(Number(inputId));
      setInputId('');
    };

    useEffect(() => {
      searchChar(charId);
    }, [charId]);
    
    const charNext = () => {
      setcharId((nextId) => nextId + 1);
    };
  
    const charPrev = () => {
      setcharId((prevId) => (prevId > 1 ? prevId - 1 : 1));
    };

  return (
    <>
    <div className="body container-fluid bg-info">
      <div className="row p-1">
        <div className="row align-items-center">
          <div className="col-4">
          </div>
          <div className="col-4">
              <img src="./logo.png"
                className="card-img"
                alt="logo"/>
          </div>
          <div className="col-4">
          </div>
        </div>
      </div>
      <div className="row text-center d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit} 
        className="row g-0 justify-content-center">
          <div className="col-auto">
            <label
              htmlFor="inputId"
              className="visually-hidden">
                input_char
            </label>
            <input
              type="number"
              className="form-control"
              id="inputId"
              placeholder="Id do Personagem"
              value={inputId}
							onChange={(e) => setInputId(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn mb-3">
                <img src="./search.svg" alt="search"/>
            </button>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="container text-center">
          <div className="row align-items-center align-self-center">       
            <div className="col-1">
              <button
                type="button"
                className="buttons btn"
                onClick={charPrev}>
                &lt;
              </button>
            </div>
            <div className="col">
              <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4 align-items-center"> 
                  <div className="col d-flex justify-content-center">
                    <div className="bd-b card bg-card"
                      style={{width: "18rem"}}>
                      <img id='image'
                        src={image || "https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
                        className="card-img-top"
                        alt="personagem"
                      />
                      <div className="card-body">
                        <span
                          id="name"
                          className="name2 card-title"
                          >
                          {name || "? ? ?"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="bd-b card"
                      style={{width: "24rem"}}>
                      <div className="card-body">
                        <ul className="list-group list-group-flush text-start" >
                          <li
                            className="list-group-item ">
                              Status:
                              <span
                                className='tx-n'
                                id="status"> {status || "- - -"}
                              </span>
                          </li>
                          <li
                            className="list-group-item">
                              Espécie:
                              <span
                                className='tx-n'
                                id="species"> {species || "- - -"}
                              </span>
                          </li>
                          <li
                            className="list-group-item">
                              Genero:
                              <span
                                className='tx-n'
                                id="gender"> {gender || "- - -"}
                              </span>
                          </li>
                          <li
                            className="list-group-item">
                              Origem:
                              <span
                                  className='tx-n'
                                  id="origin"> {origin || "- - -"}
                              </span>
                          </li>
                          <li
                            className="list-group-item">
                              Localidade:
                              <span
                                className='tx-n'
                                id="location"> {location || "- - -"}
                              </span>
                          </li>
                          <li
                            className="list-group-item">
                              Criação:
                              <span
                                className='tx-n'
                                id="created"> {created || "- - -"}
                              </span>
                          </li>
                          <li
                            className="list-group-item">
                              Episódios: <span
                                className='tx-n'
                                id="episode"
                                style={{
                                  display: 'inline-block',
                                  width: '220px',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  lineHeight: '1',
                                verticalAlign: 'middle'
                                }}
                              > {episode || "- - -"}
                              </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1">
              <button
                type="button"
                className="buttons btn"
                onClick={charNext}>
                  &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
