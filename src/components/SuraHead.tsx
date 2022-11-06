import { MyObject } from "../types";

const SuraHead = (e: MyObject) => {

  return (
    <div className="sura-head">
      <h1>سوره {e.sure} {e.type}</h1>
      {e.sure !== 'الفاتحة' && e.sure !== 'التوبة' &&
        <h2>بِسۡمِ اللّٰهِ الرَّحۡمٰنِ الرَّحٖیمِ</h2>
      }
    </div>
  )
}

export default SuraHead