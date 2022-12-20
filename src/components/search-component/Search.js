import { useState } from "react";
import './Search.css'
let list = ["Banana","Apple","Orange", "Mango","Pineaplle", "Watermelon"]
const Search = () =>{
    const [items] = useState(list);
    const [item, setItem] = useState('');
    const handleItemChange = event => {
        setItem(event.target.value)
    }
    return(
        <div className="search">
            <form><input type="text" placeholder='Search' value={item} onChange={handleItemChange} /></form>
            <ul>
                {items.filter(elt => elt.match(new RegExp(item, "i")))
                    .map(elt => {
                        return <li key={elt}>{elt} </li>

                })}
                
            </ul>
        </div>
        
    )
}

export default Search