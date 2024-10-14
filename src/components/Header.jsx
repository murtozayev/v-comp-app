import Gamezone from "./Gamezone"
import News from "./News"
import Products from "./Products"
import Slide from "./Slide"

const Header = () => {
    return (
        <header>
            <Slide />
            <Products />
            <Gamezone />
            <News />
        </header>
    )
}

export default Header
