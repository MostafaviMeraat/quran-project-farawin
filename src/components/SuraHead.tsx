import { MyObject } from "../types";

const SuraHead = (e: MyObject) => {

  return (
    <div className="sura-head">
      <h1 className="sure-head-detail">سوره {e.sure} {e.type}</h1>
      {e.sure !== 'الفاتحة' && e.sure !== 'التوبة' &&
        <h2 className="besmellah">بِسۡمِ اللّٰهِ الرَّحۡمٰنِ الرَّحٖیمِ</h2>
      }
    </div>
  )
}

export default SuraHead