import { suras, pages } from '../quran-resources (farawin)/quran-metadata'
import { emla } from '../quran-resources (farawin)/quran-text-emla'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Pages = () => {
  //ts
  interface arr {
    data: string[]
    aya: number[]
  }
  type anyArr = any[]

  // variables
  let tempArr: any[] = []
  const [newSuras, setNewSuras] = useState<anyArr>([{
    data: [],
    aye: []
  }])
  const { id } = useParams()
  const [page, setPage] = useState(1)
  const [content, setContent] = useState<anyArr>([])
  let startSure: number = 0
  let endSure: number = 0
  let startAye: number = 0
  let endAye: number = 0
  let start: number = 0
  let end: number = 0
  // useEffects 
  useEffect(() => {
    allSuras(suras)
  }, [])
  useEffect(() => {
    findPage(id)
  }, [id])
  useEffect(() => {
    pageContent(page)
  }, [page])

  // functions
  const allSuras = (suras: any[]) => {
    for (let c = 0; c < suras.length - 1; c++) {
      if (c === 0 || c === 8) {
        let arr: arr = { data: [], aya: [] }
        let cnt = 0
        for (let c1 = suras[c][0]; c1 < suras[c][0] + suras[c][1]; c1++) {
          arr.data.push(emla[c1])
          arr.aya.push(cnt++)
        }
        tempArr.push(arr)
      }
      else {
        let arr: arr = { data: [], aya: [] }
        arr.data.push("بِسۡمِ اللّٰهِ الرَّحۡمٰنِ الرَّحٖیمِ")
        let cnt = 0
        for (let c1 = suras[c][0]; c1 < suras[c][0] + suras[c][1]; c1++) {
          arr.data.push(emla[c1])
          arr.aya.push(cnt++)
        }
        tempArr.push(arr)
      }
    }
    setNewSuras(tempArr)
  }
  const findPage = (id: string | undefined) => {
    if (typeof id === 'string') {
      for (let c = 1; c < pages.length; c++) {
        if (parseInt(id) === pages[c][0] && pages[c][1] === 1) {
          setPage(c)
          break
        }
        else if ((parseInt(id) === pages[c][0])) {
          setPage(c - 1) // c-1 for pages like 106 or 255
          break;
        }
        else {
          for (let c1 = 1; c1 < 6; c1++) {
            if (parseInt(id) - c1 === pages[c][0]) {
              setPage(c)
              break
            }
          }
        }
      }
    }
  }
  const pageContent = (page: number) => {
    let arr: any[] = []

    startSure = pages[page][0] - 1
    startAye = pages[page][1] - 1
    console.log(startSure, startAye);




    // setContent(arr)
  }
  return (
    <div>
      {content}
    </div>
  )
}

export default Pages