import s from './popup.module.css'
import {useState} from "react";

const Popup = ({active, setActive}) => {

    const sections = ["PAYMENT", "PERIOD"];
    const [activeSection, setActiveSection] = useState(sections[0]);

    const setPayment = () => setActiveSection(sections[0]);
    const setPeriod = () => setActiveSection(sections[1]);

    const changeStyle = (section) => {
        if (activeSection === section)
            return s.tagIsActive
        else return s.tag
    }

    return <div className={active ? s.isActive : s.popup}>
        <div className={s.content}>
            <div className={s.x} onClick={()=>setActive(false)}>x</div>
            <div className={s.header}>Налоговый вычет</div>
            <div className={s.text}>
                Используйте налоговый вычет чтобы погасить ипотеку досрочно.
                Размер налогового вычета составляет не более 13% от своего официального годового дохода.
            </div>

            <div id={s.input_idle}>
                <div>Ваша зарплата в месяц</div>
                <textarea placeholder={'Введите данные'}></textarea>
            </div>

            <div className={s.calculate}>Расчитать</div>
            <div className={s.group}>
                Что уменьшаем?
                <div className={changeStyle(sections[0])} onClick={setPayment}>Платёж</div>
                <div className={changeStyle(sections[1])} onClick={setPeriod}>Срок</div>

            </div>
            <button className={s.button}>
                <div>Добавить</div>
            </button>
        </div>
    </div>
}

export default Popup