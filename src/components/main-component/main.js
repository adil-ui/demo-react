import "./main.css";
import { useState } from "react";
const Main = () => {
    const [user, setUser] = useState([]);
    const ShowUser = () =>{
        fetch("https://random-data-api.com/api/users/random_user?size=10")
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
    return (
        <main>
        <div>           
            <div className="userContainer">
                <button onClick={ShowUser} className="btnShowUser">show User</button>
            </div>
            <div className="mapObjet">
            {user.map((elt) => {
                return (
                <div className="mydiv">
                    <img src={elt.avatar} alt="" />
                    <p className="firstP">{elt.first_name} {elt.last_name}</p>
                    <p>{elt.employment.title}</p>
                </div>
                );
            })}
            </div>
            <p>
            section de texte en prose vouée au développement d'un point
            particulier souvent au moyen de plusieurs phrases, dans la continuité
            du précédent et du suivant. Sur le plan typographique, le paragraphe
            est compris entre deux alinéas, qui s'analysent aussi comme une «
            ponctuation blanche ».
            </p>
            <p>
            section de texte en prose vouée au développement d'un point
            particulier souvent au moyen de plusieurs phrases, dans la continuité
            du précédent et du suivant. Sur le plan typographique, le paragraphe
            est compris entre deux alinéas, qui s'analysent aussi comme une «
            ponctuation blanche ».
            </p>
            <p>
            section de texte en prose vouée au développement d'un point
            particulier souvent au moyen de plusieurs phrases, dans la continuité
            du précédent et du suivant. Sur le plan typographique, le paragraphe
            est compris entre deux alinéas, qui s'analysent aussi comme une «
            ponctuation blanche ».
            </p>
            <p>
            section de texte en prose vouée au développement d'un point
            particulier souvent au moyen de plusieurs phrases, dans la continuité
            du précédent et du suivant. Sur le plan typographique, le paragraphe
            est compris entre deux alinéas, qui s'analysent aussi comme une «
            ponctuation blanche ».
            </p>
            <p>
            section de texte en prose vouée au développement d'un point
            particulier souvent au moyen de plusieurs phrases, dans la continuité
            du précédent et du suivant. Sur le plan typographique, le paragraphe
            est compris entre deux alinéas, qui s'analysent aussi comme une «
            ponctuation blanche ».
            </p>
            <p>
            section de texte en prose vouée au développement d'un point
            particulier souvent au moyen de plusieurs phrases, dans la continuité
            du précédent et du suivant. Sur le plan typographique, le paragraphe
            est compris entre deux alinéas, qui s'analysent aussi comme une «
            ponctuation blanche ».
            </p>
        </div>
        </main>
    );
};

export default Main;
