import './Aside.css'
let element = ["Facebook", "Twitter", "Instagram", "Linkedin", "Tiktok", "Github"]
let icon = [<i class="fa-brands fa-facebook"></i>, <i class="fa-brands fa-twitter"></i>, <i class="fa-brands fa-instagram"></i>, <i class="fa-brands fa-linkedin"></i>,<i class="fa-brands fa-tiktok"></i>, <i class="fa-brands fa-github"></i>]
const Aside = () => {
    return <aside>
        <div className='asideContainer'>
            <ul>
                {element.map((elt,index) =>{
                    return <li>{icon[index]} {elt}</li>

                })}
                
            </ul>
        </div>
    </aside>
}

export default Aside