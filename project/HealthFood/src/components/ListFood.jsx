import { useState } from "react"
import Items from "./Items"


const ListFood = ({foodItems,deleteelement})=>{

    const [selectedItems, setSelectedItems] = useState(["a"])
    const addSelectedItem = (ele)=>{   
        setSelectedItems([...selectedItems,ele])  
    }

    const removeSelectedItem = (ele)=>{
        setSelectedItems(selectedItems.filter((e)=>e!=ele))
    }



    return <>
        <ul className="list-group">
            {foodItems.map((ele)=><Items key={ele} 
            flag={selectedItems.includes(ele)} 
            addSelectedItem={addSelectedItem} 
            removeSelectedItem={removeSelectedItem}
            deleteelement={deleteelement} ele={ele}></Items> )}
        </ul>
    </>
}

export default ListFood