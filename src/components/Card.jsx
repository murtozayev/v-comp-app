import { Link, useNavigate } from "react-router-dom"

const Card = ({ price, title, image, to, click }) => {

    const navigate = useNavigate()

    return (
        <section className=" mt-[3vw] phone:px-[1vw] phone:rounded-[1vw] phone:w-[30vw] rounded-[0.2vw] flex-shrink-0 bg-[white] transition hover:bg-[#151543] hover:text-[white] relative px-[2vw] shadow w-[19vw] py-[2vw] ">
            <Link onClick={click} to={to} className="cursor-pointer ">
                <img className=" w-[17vw] phone:w-[25vw] " src={image} alt="Image" />
                <h2 className=" text-[1vw] mt-[2vw] font-semibold phone:text-[2vw] ">{title}</h2>
            </Link>

            <aside className=" mt-[1vw] phone:text-[2vw] flex items-center text-[1vw] gap-[0.2vw] ">
                <i className=" fas fa-star text-[yellow] " />
                <i className=" fas fa-star text-[yellow] " />
                <i className=" fas fa-star text-[yellow] " />
                <i className=" fas fa-star text-[yellow] " />
                <i className=" fas fa-star text-[gray] " />
            </aside>

            <aside className="flex items-center mt-[1vw] justify-between">
                <span className="font-bold text-[1.7vw] phone:text-[3vw] ">{price}$</span>
                <button onClick={() => navigate("/pay")} className=" text-[1vw] font-semibold text-white phone:py-[1vw] phone:px-[5vw] phone:text-[2vw] bg-buy py-[0.4vw] rounded-[0.2vw] px-[3vw] ">Buy</button>
            </aside>
        </section>
    )
}

export default Card
