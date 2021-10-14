import s from "./page.module.css"
import Popup from "./popup";
import React, {useState} from 'react';

const Page = () => {
    const [popupActive, setPopupActive] = useState(false)
    return <div className={s.page}>
        <button className={s.button} onClick={() => setPopupActive(true)}>
            Налоговый вычет
        </button>
        <Popup active={popupActive} setActive={setPopupActive}/>
    </div>
}

export default Page