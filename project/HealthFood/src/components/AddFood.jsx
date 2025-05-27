import style from "./AddFood.module.css"

const AddFood = ({inputhandler})=>{
    return <>
    <input type="text" placeholder="enter food name" className={style.input} onKeyUp={inputhandler} />
    </>
}   

export default AddFood