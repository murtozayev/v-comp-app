import { useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"; // useRef ni import qilish
import v_comp from "../images/Logo.png";
import icon from "../images/icon.png";

const Navbar = () => {
    const [showSearchModal, setSearchShowModal] = useState(false);
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);

    const navigate = useNavigate()

    const modalRef = useRef(null);

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
    }

    return (
        <nav>
            {/* Blue Turn */}
            <nav className="h-[3vw] px-[10vw] text-[white] justify-between flex items-center bg-[#090936] ">
                <img src={icon} className="w-[2.5vw]" alt="Icon" />
                <div className="font-semibold text-[0.8vw] flex gap-[1.5vw] ml-[2vw] ">
                    <a href="#">Stock</a>
                    <a href="#">Credit</a>
                    <a href="#">Payment and delivery</a>
                    <a href="#">Help</a>
                    <a href="#">Purchase of used cars</a>
                    <a href="#">Contacts</a>
                </div>
                <button className="fas fa-user text-[1.2vw] hover:text-[gold]" />
            </nav>

            {/* Main Turn */}
            <nav className="h-[8vw] px-[10vw] shadow-lg flex items-center justify-between ">
                <img className="w-[11vw]" src={v_comp} alt="Icon" />
                <button className="font-semibold text-[white] py-[0.7vw] bg-buy px-[1vw] p-[0.3vw] rounded-[0.3vw] hover:bg-new transition gap-[1vw] flex items-center ">
                    <span className="text-[0.9vw]">PRODUCT CATALOGUE</span>
                    <i className="fas fa-gauge text-[1vw]" />
                </button>

                <form onSubmit={handleSwitch} className="relative flex">
                    <input
                        value={search}
                        onChange={changeInput}
                        onFocus={() => setSearchShowModal(true)}
                        className="h-[2.7vw] w-[34vw] outline-none px-[0.5vw] rounded-[0.3vw] font-semibold text-[blue] text-[0.8vw] border-[blue] border-[0.1vw]"
                        type="text"
                        placeholder="Search..."
                    />
                    <button className="h-[2.7vw] w-[2.7vw] text-[1vw] bg-[darkblue] hover:bg-[blue] transition text-[white] rounded-[0.3vw] relative right-[2vw] fas fa-magnifying-glass" />

                    {showSearchModal && (
                        <aside ref={modalRef} className="absolute text-[black] w-[35vw] p-[2vw] bg-[white] top-[3vw] shadow-lg rounded-[1vw] z-[100] ">
                            {result.map((item) => (
                                <div key={item._id} onClick={() => handleClick(item._id)} className="flex items-center justify-between">
                                    <div className="flex items-center m-[1vw] cursor-pointer gap-[1vw]">
                                        <i className="fa-solid fa-arrow-up-right-from-square" />
                                        <span className="text-[0.8vw]">{item.title}</span>
                                    </div>

                                    <img className=" w-[4vw] " src={item.catalogIcon} alt="Icon" />
                                </div>
                            ))}
                        </aside>
                    )}
                </form>

                {/* Qolgan qism */}
                <select className="outline-none w-[10vw] text-[1vw] font-semibold ">
                    <option value="+1 001 029 2938">+1 001 029 2938</option>
                    <option value="+1 001 029 2938">+1 001 029 2938</option>
                    <option value="+1 001 029 2938">+1 001 029 2938</option>
                    <option value="+1 001 029 2938">+1 001 029 2938</option>
                </select>

                <div className="h-[2vw] w-[0.1vw] bg-[gray]" />
                <figure className="text-[1.2vw] flex items-center gap-[0.5vw] ">
                    <i className="hover:text-[gold] transition fa-solid fa-scale-unbalanced-flip" />
                    <i className="hover:text-[gold] transition fa-regular fa-heart" />
                    <i className="hover:text-[gold] transition fas fa-cart-shopping" />
                </figure>
            </nav>
            {/* Main Turn */}
        </nav>
    );
};

export default Navbar;
