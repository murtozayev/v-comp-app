import { useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"; // useRef ni import qilish
import v_comp from "../images/Logo.png";
import icon from "../images/icon.png";
import { useDispatch, useSelector } from "react-redux";
import { saveHistory, searchResult } from "../store";

const Navbar = ({ setShow }) => {
    const [showSearchModal, setSearchShowModal] = useState(false);
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const modalRef = useRef(null);

    const historySave = useSelector(state => state.history)

    async function changeInput(e) {
        setSearch(e.target.value);
        try {
            const req = await fetch(`https://v-comp-api.vercel.app/api/search/${search}`);
            const res = await req.json();
            setResult(res);
        } catch (error) {
            console.log(error);
        }
    }

    const audioRef = useRef("")

    const [showSearch, setShowSearch] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setSearchShowModal(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function handleClick(id) {
        navigate(`/product/${id}`)
        setSearchShowModal(false)
        window.location.reload()
    }

    function handleSwitch(e) {
        e.preventDefault()

        dispatch(searchResult(result))

        dispatch(saveHistory(search))

        setShowSearch(false)

        navigate("/search")

    }

    const [showMenu, setShowMenu] = useState(false)

    const [isPlaying, setIsPlaying] = useState(false);

    function toggleAudio() {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    return (
        <nav>
            <audio ref={audioRef} src="../../public/Interface_Sound_Effects__Futuristic_Computer_Sci_Fi_Sound_Effects.mp3" />
            {/* Blue Turn */}



            <div className={`hidden phone:block fixed ${showSearch ? "scale-1" : "scale-0"} transition duration-[0.5s] w-[100vw] h-screen bg-[white] z-[100] left-0 `}>

                <form onSubmit={handleSwitch} className="flex  gap-[3vw] p-[3vw] ">
                    <button onClick={() => setShowSearch(false)} type="button" className=" fas fa-arrow-left text-[5vw] " />
                    <input
                        value={search}
                        onChange={changeInput}
                        onFocus={() => setSearchShowModal(true)}
                        className="w-[100%] h-[10vw] border-bottom outline-none px-[2vw] "
                        type="text"
                        placeholder="Search..."
                    />
                    <button className="relative  fas fa-magnifying-glass right-[7vw]" />
                </form>

                <aside ref={modalRef} className=" text-[black] w-[100%] p-[2vw] bg-[white] top-[5vw] shadow-lg rounded-[1vw] z-[100] ">
                    {search.length > 1 ? result.map((item) => (
                        <div key={item._id} onClick={() => handleClick(item._id)} className="flex items-center m-[2vw] justify-between">
                            <div className="flex items-center m-[1vw] cursor-pointer gap-[4vw]">
                                <i className="fa-solid fa-arrow-up-right-from-square text-[5vw]" />
                                <span className="text-[3vw]">{item.title}</span>
                            </div>

                            <img className=" w-[15vw] " src={item.catalogIcon} alt="Icon" />
                        </div>
                    )) : (
                        historySave.slice(0, 7).map((item, index) => (
                            <div onClick={() => setSearch(item.title)} className="flex m-[3vw] font-semibold shadow-lg p-[2vw] rounded-[0.3vw] justify-between text-[5vw] cursor-pointer px-[2vw] " key={index}>
                                <i className=" fas fa-arrow-rotate-right" />
                                <h1>{item.title}</h1>
                            </div>
                        ))
                    )}
                </aside>

            </div>


            <nav onClick={() => setShowMenu(false)} className={`h-[3vw] duration-300 phone:absolute phone:justify-normal phone:flex-col phone:items-start phone:p-[1vw] phone:w-[80vw] phone:h-[100vh] phone:z-10 px-[10vw] text-[white] justify-between transition flex items-center bg-[#090936] ${showMenu ? "phone:translate-x-0" : "phone:translate-x-[-100vw]"} `}>
                <img src={icon} className="w-[2.5vw] phone:w-[20vw]" alt="Icon" />
                <div className="font-semibold phone:flex-col phone:text-[5vw] phone:mt-[10vw] text-[0.8vw] flex gap-[1.5vw] ml-[2vw] ">
                    <a href="#">Stock</a>
                    <a href="#">Credit</a>
                    <a href="#">Payment and delivery</a>
                    <a href="#">Help</a>
                    <a href="#">Purchase of used cars</a>
                    <a href="#">Contacts</a>
                </div>
                <button className="fas phone:text-[12vw] phone:mt-[7vw] fa-user text-[1.2vw] hover:text-[gold]" />
            </nav>


            {/* Main Turn */}
            <nav className="h-[8vw] phone:px-[3vw] phone:bg-[darkblue] px-[10vw] shadow-lg flex phone:justify-between items-center phone:h-[20vw] justify-between ">
                <i onClick={() => setShowMenu(true)} className="hidden  phone:block fas fa-bars text-[white] text-[5vw] " />
                <img onClick={() => navigate("/")} className="w-[11vw] phone:bg-[white] phone:w-[30vw] cursor-pointer" src={v_comp} alt="Icon" />

                <form onSubmit={handleSwitch} className="relative flex">
                    <input
                        value={search}
                        onChange={changeInput}
                        onFocus={() => setSearchShowModal(true)}
                        className="h-[2.7vw] w-[34vw] phone:hidden outline-none px-[0.5vw] rounded-[0.3vw] font-semibold text-[blue] text-[0.8vw] border-[blue] border-[0.1vw]"
                        type="text"
                        placeholder="Search..."
                    />
                    <button className="h-[2.7vw] w-[2.7vw] text-[1vw] phone:hidden bg-[darkblue] hover:bg-[blue] transition text-[white] rounded-[0.3vw] relative right-[2vw] fas fa-magnifying-glass" />

                    {showSearchModal && (
                        <aside ref={modalRef} className="absolute phone:hidden text-[black] w-[35vw] p-[2vw] bg-[white] top-[3vw] shadow-lg rounded-[1vw] z-[100] ">
                            {search.length > 1 ? result.map((item) => (
                                <div key={item._id} onClick={() => handleClick(item._id)} className="flex items-center justify-between">
                                    <div className="flex items-center m-[1vw] cursor-pointer gap-[1vw]">
                                        <i className="fa-solid fa-arrow-up-right-from-square" />
                                        <span className="text-[0.8vw]">{item.title}</span>
                                    </div>

                                    <img className=" w-[4vw] " src={item.catalogIcon} alt="Icon" />
                                </div>
                            )) : (
                                historySave.slice(0, 7).map((item, index) => (
                                    <div onClick={() => setSearch(item.title)} className="flex m-[1vw] font-semibold shadow-lg p-[0.7vw] rounded-[0.3vw] justify-between text-[1.3vw] cursor-pointer px-[2vw] " key={index}>
                                        <i className=" fas fa-arrow-rotate-right" />
                                        <h1>{item.title}</h1>
                                    </div>
                                ))
                            )}
                        </aside>
                    )}
                </form>

                {/* Qolgan qism */}
                <select className="outline-none phone:hidden w-[10vw] text-[1vw] font-semibold ">
                    <option value="+1 001 029 2938">+1 001 029 2938</option>
                    <option value="+1 001 029 2938">+1 001 029 2938</option>
                    <option value="+1 001 029 2938">+1 001 029 2938</option>
                    <option value="+1 001 029 2938">+1 001 029 2938</option>
                </select>

                <div className="h-[2vw] w-[0.1vw] bg-[gray] phone:hidden " />
                <figure className="text-[1.2vw] flex items-center phone:text-[5vw] phone:text-[white] phone:gap-[4vw] gap-[0.5vw] ">

                    <i onClick={() => setShowSearch(true)} className="hover:text-[gold] transition hidden phone:block fas fa-magnifying-glass" />
                    <i onClick={toggleAudio} className={`cursor-pointer fas ${isPlaying ? 'fa-volume-high' : 'fa-volume-xmark'}`} />
                    <i onClick={() => setShow(true)} className="hover:text-[gold] transition fas fa-cart-shopping" />
                </figure>
            </nav>
            {/* Main Turn */}
        </nav>
    );
};

export default Navbar;
