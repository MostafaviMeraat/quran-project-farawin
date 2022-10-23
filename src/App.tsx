import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useEffect, useState } from 'react'
import './App.css';
import { suras, pages } from './quran-resources (farawin)/quran-metadata'
import { emla } from './quran-resources (farawin)/quran-text-emla'


function App() {
  //ts

  // variables
  let tempArr: any[] = []
  const [newSuras, setNewSuras] = useState([])

  // useEffects 

  useEffect(() => { allSuras(suras) }, [])

  // functions

  const allSuras = (suras: any[]) => {
    for (let c = 0; c < suras.length - 1; c++) {
      if (c === 0 || c === 8) {
        let arr = []
        for (let c1 = suras[c][0]; c1 < suras[c][0] + suras[c][1]; c1++) {
          arr.push(emla[c1])
        }
        tempArr.push(arr)
      }
      else {
        let arr = []
        arr.push("بِسۡمِ اللّٰهِ الرَّحۡمٰنِ الرَّحٖیمِ")
        for (let c1 = suras[c][0]; c1 < suras[c][0] + suras[c][1]; c1++) {
          arr.push(emla[c1])
        }
        tempArr.push(arr)
      }
    }
    console.log(tempArr);
  }

  return (
    <div className="App">

    </div>
  );
}
export default App;
