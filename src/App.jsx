import { useState } from 'react'
import './App.css'

function App() {
   const [count, setCount] = useState(0)

   const [name, setLogradouro] = useState("");
   const [status, setCep] = useState("");
   const [species, setBairro] = useState ("");
   const [gender, setLocalidade] = useState ("");
   const [location, setUf] = useState ("");
   const [origin, setUf] = useState ("");
   const [image, setUf] = useState ("");

  return (
    <>
    <body className="container-fluid bg-info">
      <header className="row p-1">
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
      </header>
      <main className="row p-3">
        <div className="container text-center">
          <div className="row align-items-center align-self-center">       
            <div className="col-1">
              <button
                type="button"
                className="buttons btn">
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
                            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                            className="card-img-top"
                            alt="personagem"/>
                          <div className="card-body">
                            <h5
                              id="name"
                              className="name2 card-title">
                              Card title
                            </h5>
                          </div>
                        </div>
                  </div>
                  <div className="col d-flex justify-content-center">
                    <div className="bd-b card"
                      style={{width: "18rem"}}>
                      <div className="card-body">
                        <ul className="list-group list-group-flush text-start" >
                          <li
                            className="list-group-item ">
                              Status: <span
                                        className='tx-n'
                                        id="status">
                                          Maria
                                      </span>
                          </li>
                          <li
                            className="list-group-item">
                              Espécie: <span
                                  className='tx-n'
                                  id="species">
                                    Maria
                                </span>
                          </li>
                          <li
                            className="list-group-item">
                              Genero: <span
                                className='tx-n'
                                id="gender">
                                  Maria
                              </span>
                          </li>
                          <li
                            className="list-group-item">
                              Origem: <span
                                  className='tx-n'
                                  id="origin">
                                    Maria
                                </span>
                          </li>
                          <li
                            className="list-group-item">
                              Localidade: <span
                                  className='tx-n'
                                  id="location">
                                    Maria
                                </span>
                          </li>
                          <li
                            className="list-group-item">
                              Criação: <span
                                className='tx-n'
                                id="created">
                                  Maria
                                </span>
                          </li>
                          <li
                            className="list-group-item">
                              Episódios: <span
                                className='tx-n'
                                id="episode" style={{
                                  display: 'inline-block',
                                  width: '220px',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  lineHeight: '1',
                                verticalAlign: 'middle'
                                }}>
                                  1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51
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
                className="buttons btn">
                  &gt;
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="row  text-center d-flex justify-content-center align-items-center">
        <form className="row g-0 justify-content-center">
          <div className="col-auto">
            <label
              htmlFor="inputIdCharacter"
              className="visually-hidden">
                input_char
            </label>
            <input
              type="number"
              className="form-control"
              id="inputIdCharacter"
              placeholder="Id do Personagem"/>
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn mb-3">
                <img src="./search.svg" alt="search"/>
            </button>
          </div>
        </form>
      </footer>
    </body>
    </>
  )
}

export default App
