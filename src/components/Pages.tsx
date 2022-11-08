import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { pages, suras } from '../quran-resources (farawin)/quran-metadata'
import { emla } from "../quran-resources (farawin)/quran-text-emla"
import { Aye, ArrAye, AnyArr, Last } from "../types"
import SuraHead from "./SuraHead"
import { ansarian } from "../quran-resources (farawin)/quran-translate.fa.ansarian"
import { makarem } from '../quran-resources (farawin)/quran-translate.fa.makarem'
import SettingLogo from "./SettingLogo"
import ControlAudio from "./ControlAudio"


const Pages = () => {
  //vars

  let { pageNumber } = useParams()
  let pageNum: number = Number(pageNumber)
  const navigate = useNavigate()
  const [arr, setArr] = useState<AnyArr>([])
  const [toggle, setToggle] = useState<boolean>(false)
  const [sure, setSure] = useState<string>('')
  const [aye, setAye] = useState<string>('')
  const [sureTemp1, setSureTemp] = useState<number>(0)
  const [ayeTemp1, setAyeTemp] = useState<number>(0)
  const currentTranslate = localStorage.getItem('translate')
  const currentGhari = localStorage.getItem('ghari')

  // const [currPlay, setCurrPlay] = useState<boolean>(false)

  useEffect(() => {
    pageContent(pageNum)
  }, [pageNum])

  useEffect(() => {
    finishSut()
  }, [arr])

  //functions

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
      translateAnsarian: [],
      translateMakarem: [],
      ayeNumber: [],
      sure: '',
      type: '',
      suraNumber: 0
    }]
    let start = Number(suras[pages[pageNum][0] - 1][0]) + pages[pageNum][1] - 1

    if (pageNum !== 604) {
      let end = Number(suras[pages[pageNum + 1][0] - 1][0]) + pages[pageNum + 1][1] - 1
      for (let c = start; c < end - start + start; c++) {
        currSura = Number(findSuraByIndex(emla.indexOf(emla[c]) + 1))
        try {
          arrtemp[0].aye.push(emla[c])
          arrtemp[0].translateAnsarian.push(ansarian[c])
          arrtemp[0].translateMakarem.push(makarem[c])
          arrtemp[0].sure = String(suras[currSura - 1][4])
          arrtemp[0].suraNumber = currSura
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
          arrtemp[0].translateAnsarian.push(ansarian[c])
          arrtemp[0].translateMakarem.push(makarem[c])
          arrtemp[0].sure = String(suras[currSura - 1][4])
          arrtemp[0].suraNumber = currSura
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
  const handleSut = (item: Aye | string, index: number | string) => {

    if (typeof item !== 'string' && typeof index !== 'string') {
      let sure = String(item.suraNumber).padStart(3, '0')
      let aye = String(index).padStart(3, '0')
      setSure(sure)
      setAye(aye)
      setToggle(true)
    } else {
      if (typeof item === 'string' && typeof index === 'string') {
        setSure(item)
        setAye(index)
        setToggle(true)
      }
    }

    // if (typeof item !== 'string') {
    //   for (let c = 0; c < item.aye.length; c++) {
    //     if (c === Number(index) - 1 && toggle) {
    //       setCurrPlay(true)
    //     }
    //     else {
    //       setCurrPlay(false)
    //     }
    //   }
    // }

  }
  const handleNext = () => {

    let sureTemp: any = Number(sure)
    let ayeTemp: any = Number(aye)
    if (suras[sureTemp - 1][1] > ayeTemp) {
      ayeTemp += 1
    }
    else {
      sureTemp += 1
      ayeTemp = 1
    }

    sureTemp = String(sureTemp).padStart(3, '0')
    ayeTemp = String(ayeTemp).padStart(3, '0')

    if (toggle && Number(sureTemp) <= sureTemp1 && Number(ayeTemp) <= ayeTemp1) {
      handleSut(sureTemp, ayeTemp)
    }
    else {
      setToggle(false)
    }
  }
  const finishSut = () => {
    try {
      let ayeTemp0 = arr[0].ayeNumber[arr[0].ayeNumber.length - 1]
      let sureTemp0 = arr[0].suraNumber
      setAyeTemp(ayeTemp0)
      setSureTemp(sureTemp0)
    }
    catch (error) {
      console.log(error);
    }
  }
  console.log(currentGhari);
  return (
    <div className="page-content-wrapper">
      <audio onEnded={handleNext} className="audio" controls autoPlay={toggle} muted={!toggle} src={`http://www.everyayah.com/data/${currentGhari}/${sure}${aye}.mp3`}>
        play
      </audio>
      <SettingLogo />
      {toggle && <ControlAudio setToggle={setToggle} />}
      <div>
        {arr.length !== null && arr.map((item: Aye, index: number) => {
          return (
            <div key={index}>
              {item.aye.map((i: string, idx: number) => {
                return (<div key={idx}>
                  {item.ayeNumber[idx] === 1
                    ?
                    <div className="wrapper">
                      <SuraHead type={item.type} sure={item.sure} />
                      <div onClick={() => { handleSut(item, item.ayeNumber[idx]) }} className="aye">{i} <span className="aye-logo">﴿{item.ayeNumber[idx]}﴾</span></div><br />
                      {currentTranslate === 'makarem'
                        ?
                        <div>
                          <div className="translate">{item.translateMakarem[idx]}</div><br /><br /><br />
                        </div>
                        :
                        <div>
                          <div className="translate">{item.translateAnsarian[idx]}</div><br /><br /><br />
                        </div>
                      }
                    </div>
                    :
                    <div className="wrapper">
                      <div onClick={() => { handleSut(item, item.ayeNumber[idx]) }} className='aye'>{i} <span className="aye-logo">﴿{item.ayeNumber[idx]}﴾</span></div><br />
                      {currentTranslate === 'makarem'
                        ?
                        <div>
                          <div className="translate">{item.translateMakarem[idx]}</div><br /><br /><br />
                        </div>
                        :
                        <div>
                          <div className="translate">{item.translateAnsarian[idx]}</div><br /><br /><br />
                        </div>
                      }
                    </div>
                  }
                </div>)
              })}
            </div>
          )
        })}
      </div>
      <div className="navigate">
        {pageNum !== 604 && <button className="next" onClick={next}>صفحه بعدی</button>}
        <button className="back" onClick={backToMenu}>لیست سوره‌ها</button>
        {pageNum !== 1 && <button className="pre" onClick={previous}>صفحه قبلی</button>}
      </div>
    </div >
  )
}

export default Pages