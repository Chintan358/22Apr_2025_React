import style from "./Items.module.css"

const Items = ({ele,flag,addSelectedItem,removeSelectedItem,deleteelement})=>{

    console.log(flag);
    
    return <>
        <li className={`list-group-item ${flag?"active":""}`}>{ele} 
            {flag?"":<button className={`btn btn-warning ${style.bt}`} onClick={()=>deleteelement(ele)} >del</button>}
            {flag?<button className={`btn btn-danger ${style.bt}`} onClick={()=>removeSelectedItem(ele)}>Remove</button>:<button className={`btn btn-primary ${style.bt}`} onClick={()=>addSelectedItem(ele)}>Buy</button>}</li>
    </>
}

export default Items