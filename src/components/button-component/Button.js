const Button = ({btnNumber}) =>{
    const showAlert = () =>{
        alert ('Button ' + btnNumber)
    }
    return <button onClick={showAlert}>Button {btnNumber}</button>
}

export default Button;