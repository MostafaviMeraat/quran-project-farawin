import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState, useCallback } from 'react'
import { pages, suras } from '../quran-resources (farawin)/quran-metadata'
import { emla } from "../quran-resources (farawin)/quran-text-emla"
import { Aye, ArrAye, AnyArr } from "../types"
import SuraHead from "./SuraHead"
import { ansarian } from "../quran-resources (farawin)/quran-translate.fa.ansarian"

const Pages = () => {

  let { pageNumber } = useParams()
  let pageNum: number = Number(pageNumber)
  const navigate = useNavigate()
  const [arr, setArr] = useState<AnyArr>([])


  useEffect(() => {
    pageContent(pageNum)
  }, [pageNum])


  const next = () => {
    navigate(`/page/${pageNum + 1}`)
  }
  const previous = () => {
    navigate(`/page/${pageNum - 1}`)
  }
  const backToMenu = () => {
    navigate('/')
  }
  const pageContent = (pageNum: number) => {

    let currSura: number = 0
    let arrtemp: ArrAye = [{
      aye: [],
      translate: [],
      ayeNumber: [],
      sure: '',
      type: ''
    }]
    let start = Number(suras[pages[pageNum][0] - 1][0]) + pages[pageNum][1] - 1

    if (pageNum !== 604) {
      let end = Number(suras[pages[pageNum + 1][0] - 1][0]) + pages[pageNum + 1][1] - 1
      for (let c = start; c < end - start + start; c++) {
        currSura = Number(findSuraByIndex(emla.indexOf(emla[c]) + 1))
        try {
          arrtemp[0].aye.push(emla[c])
          arrtemp[0].translate.push(ansarian[c])
          arrtemp[0].sure = String(suras[currSura - 1][4])
          arrtemp[0].ayeNumber.push(emla.indexOf(emla[c]) - Number(suras[currSura - 1][0]) + 1)
          arrtemp[0].type = String(suras[currSura - 1][7])
        } catch (error) {
          console.log('error');
        }
      }
      setArr(arrtemp)
    }
    else {
      let end = Number(suras[pages[pageNum + 1][0] - 1][0]) + pages[pageNum + 1][1] - 1
      for (let c = start; c < end - start + start; c++) {
        currSura = Number(findSuraByIndex(emla.indexOf(emla[c]) + 1))
        try {
          arrtemp[0].aye.push(emla[c])
          arrtemp[0].translate.push(ansarian[c])
          arrtemp[0].sure = String(suras[currSura - 1][4])
          arrtemp[0].ayeNumber.push(emla.indexOf(emla[c]) - Number(suras[currSura - 1][0]) + 1)
          arrtemp[0].type = String(suras[currSura - 1][7])
        } catch (error) {
          console.log('error');
        }
      }
      setArr(arrtemp)
    }

  }
  const findSuraByIndex = (index: number) => {
    for (let c = 0; c < suras.length; c++) {
      if (index <= suras[c][0]) {
        return c
      }
    }
  }
  return (
    <div>
      <div>
        {arr.length !== null && arr.map((item: Aye, index: number) => {
          return (
            <div key={index}>
              {item.aye.map((i: string, idx: number) => {
                return (<div key={idx}>
                  {item.ayeNumber[idx] === 1
                    ?
                    <div>
                      <SuraHead type={item.type} sure={item.sure} />
                      <div className="aye">{i} {item.ayeNumber[idx]}</div><br />
                      <div className="translate">{item.translate[idx]}</div><br /><br /><br />
                    </div>
                    :
                    <div>
                      <div className="aye">{i} {item.ayeNumber[idx]}</div><br />
                      <div className="translate">{item.translate[idx]}</div><br /><br /><br />
                    </div>
                  }
                </div>)
              })}
            </div>
          )
        })}
      </div>
      <div>
        {pageNum !== 604 && <button onClick={next}>Next</button>}
        {pageNum !== 1 && < button onClick={previous}>Pre</button>}
        <button onClick={backToMenu}>Back To Menu</button>
      </div>

    </div>
  )
}

export default Pages