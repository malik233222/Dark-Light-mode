import { useContext } from "react"
import { darkContext } from "../Dark"
export default function Navbar() {
    const { mode, setMode } = useContext(darkContext)
    console.log(mode);

    const darkMode = () => {
        setMode(!mode)
        localStorage.setItem('mode', JSON.stringify(!mode))
        if (!mode) {
            document.body.classList.add('dark')
        }
        else {
            document.body.classList.remove('dark')

        }
    }

    return (
        <>

            <div>Navbar</div>
            <button onClick={darkMode}>Dark/Light</button>

            {/* <button onClick={ToggleClick}>Dark/Light</button> */}

        </>
    )
}
