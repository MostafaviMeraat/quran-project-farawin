import './App.css'
import { pages, suras } from './quran-resources (farawin)/quran-metadata'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
  //ts
  type anyArr = any[]

  //variables
  const s: anyArr = suras
  const [match, setMatch] = useState<anyArr>(suras)
  const navigate = useNavigate()
  let idx = 0
  let page = 1


  //functions
  const handleChange = (e: any) => {
    let matchSearched: any[] = []
    for (let c = 0; c < s.length - 1; c++) {
      if (s[c][4].includes(e.target.value) || s[c][6].toLowerCase().includes(e.target.value)) {
        matchSearched.push(s[c])
      }
    }
    setMatch(matchSearched)
  }
  const findSura = (item: any[]) => {
    for (let c = 0; c < suras.length; c++) {
      if (item[4] === suras[c][4]) {
        idx = c
        break
      }
    }
    for (let c1 = 1; c1 < pages.length; c1++) {
      if (pages[c1][0] === idx + 1 && pages[c1][1] === 1) {
        page = c1
        break
      }
      else if (pages[c1][0] === idx + 1 && pages[c1][1] !== 1) {
        page = c1 - 1
        break
      }
      else {
        for (let c2 = 0; c2 < 6; c2++) {
          if (idx - c2 === pages[c1][0]) {
            page = c1
          }
        }
      }
    }
    navigate(`page/${page}`)
  }
  return (
    <div className="App">
      {/* search box */}
      <div className='search-area'>
        <input
          className='search-box'
          type='text'
          placeholder='نام سوره...'
          autoFocus
          onChange={(e) => { handleChange(e) }} />
      </div>
      {/* suras */}
      <div>
        {match.length > 0
          &&
          match.map((item, index) => {
            {
              return (
                item[1] > 1 &&
                <div onClick={() => { findSura(item) }} className='sure' key={index}>
                  <h2> نام سوره:{item[4]}</h2>
                  <h2>{item[6]}</h2>
                  <h2>تعداد آیات:{item[1]}</h2>
                  <h2>{item[7]}</h2>
                </div>)
            }
          })
        }
      </div>
    </div>
  );
}

export default App;
