import './App.css'
import Pages from './components/Pages';
import { suras } from './quran-resources (farawin)/quran-metadata'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { emla } from './quran-resources (farawin)/quran-text-emla';
function App() {
  //ts
  type anyArr = any[]

  //variables
  const s: anyArr = suras
  const [match, setMatch] = useState<anyArr>(suras)
  const navigate = useNavigate()

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
  return (
    <div className="App">
      <div className='search-area'>
        <input
          className='search-box'
          type='text'
          placeholder='نام سوره...'
          autoFocus
          onChange={(e) => { handleChange(e) }} />
      </div>

      <div>
        {match.length > 0
          ?
          match.map((item, index) => {
            return (
              <div onClick={() => { navigate(`sure/${suras.indexOf(item) + 1}`) }} className='sure' key={index}>
                <h2> نام سوره:{item[4]}</h2>
                <h2>{item[6]}</h2>
                <h2>تعداد آیات:{item[1]}</h2>
                <h2>{item[7]}</h2>
              </div>)
          })
          :
          match.map((item, index) => {
            return (
              <div onClick={() => { navigate(`sure/${index + 1}`) }} className='sure' key={index}>
                <h2> نام سوره:{item[4]}</h2>
                <h2>{item[6]}</h2>
                <h2>تعداد آیات:{item[1]}</h2>
                <h2>{item[7]}</h2>
              </div>)
          })
        }
      </div>
    </div>
  );
}
export default App;
