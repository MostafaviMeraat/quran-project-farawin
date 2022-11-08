import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleTranslate, handleGhari } from '../redux/actions/action'
import { AllReducers } from '../redux/reducers/index'

const Setting = () => {

  const navigate = useNavigate()
  const dispath = useDispatch()
  const currentTranslate = useSelector((state: AllReducers) => state.translate)
  localStorage.setItem('translate', currentTranslate)
  const currentGhari = useSelector((state: AllReducers) => state.ghari)
  localStorage.setItem('ghari', currentGhari)


  const handleChangeTranslate = (e: any) => {
    if (e.target.id === 't1') {
      dispath(handleTranslate('ansarian'))
    }
    else if (e.target.id === 't2') {
      dispath(handleTranslate('makarem'))
    }
  }
  const handleChangeGhari = (e: any) => {
    if (e.target.id === 'g1') {
      dispath(handleGhari('Menshawi_32kbps'))
    }
    else if (e.target.id === 'g2') {
      dispath(handleGhari('AbdulSamad_64kbps_QuranExplorer.Com'))
    }
  }
  const handleChangeFontStyle = () => {

  }
  const handleChangeFontSize = () => {

  }
  const handleSubmit = () => {
    navigate(-1)
  }

  return (
    <div className='setting-wrapper'>

      <p className='setting-title'>تنظیمات</p>

      <div className="translate-section"><span className='title'>مترجم: </span>

        <div className="ansarian">
          <label htmlFor="t1">انصاریان</label>
          <input
            id='t1'
            type='radio'
            name='translate'
            onChange={handleChangeTranslate}
            defaultChecked={localStorage.getItem('translate') === 'ansarian'}
          />
        </div>
        <div className="makarem">
          <label htmlFor="t2">مکارم شیرازی</label>
          <input
            id='t2'
            type='radio'
            name='translate'
            onChange={handleChangeTranslate}
            defaultChecked={localStorage.getItem('translate') === 'makarem'}
          />
        </div>
      </div>

      <div className="ghari-section"><span className='title'>قاری: </span>
        <div className="menshavi">
          <label htmlFor="g1">منشاوی</label>
          <input
            id='g1'
            type='radio'
            name='ghari'
            defaultChecked={localStorage.getItem('ghari') === 'Menshawi_32kbps'}
            onChange={handleChangeGhari} />
        </div>
        <div className="abdul-baset">
          <label htmlFor="g2">عبدالباسط</label>
          <input
            id='g2'
            type='radio'
            name='ghari'
            defaultChecked={localStorage.getItem('ghari') === 'AbdulSamad_64kbps_QuranExplorer.Com'}
            onChange={handleChangeGhari} />
        </div>
      </div>

      <div className="font-family-setion"><span className='title'>فونت:  </span>
        <div className="font-1">
          <label htmlFor="f1">font 1</label>
          <input
            id='f1'
            type='radio'
            name='font'
            defaultChecked
            onChange={handleChangeFontStyle} />
        </div>
        <div className="font-2">
          <label htmlFor="f2">font 2</label>
          <input
            id='f2'
            type='radio'
            name='font'
            onChange={handleChangeFontStyle} />
        </div>
      </div>

      <div className="font-size-section"><span className='title'>اندازه فونت: </span>
        <div className="font-size-1">
          <label htmlFor="fs1">18px</label>
          <input
            id='fs1'
            type='radio'
            name='font-size'
            defaultChecked
            onChange={handleChangeFontSize} />
        </div>
        <div className="font-size-2">
          <label htmlFor="fs2">22px</label>
          <input
            id='fs2'
            type='radio'
            name='font-size'
            onChange={handleChangeFontSize} />
        </div>
      </div>
      <div className="apply">
        <button className='setting-btn' onClick={handleSubmit}>ثبت</button>
      </div>
    </div>
  )
}

export default Setting