import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleTranslate } from '../redux/actions/action'
import { Translate } from '../redux/reducers/index'

const Setting = () => {

  const dispath = useDispatch()
  const currentTranslate = useSelector((state: Translate) => state.translate)
  console.log(currentTranslate);


  const handleChangeTranslate = (e: any) => {
    if (e.target.id === 't1') {
      dispath(handleTranslate('ansarian'))
    }
    else if (e.target.id === 't2') {
      dispath(handleTranslate('makarem'))
    }
  }

  return (
    <div>
      <div className="translate-section">
        <div className="ansarian">
          <label htmlFor="t1">انصاریان</label>
          <input
            id='t1'
            type='radio'
            name='translate'
            defaultChecked={currentTranslate}
            onChange={handleChangeTranslate} />
        </div>
        <div className="makarem"></div>
        <label htmlFor="t2">مکارم شیرازی</label>
        <input
          id='t2'
          type='radio'
          name='translate'
          defaultChecked={currentTranslate}
          onChange={handleChangeTranslate} />
      </div>
    </div>
  )
}

export default Setting