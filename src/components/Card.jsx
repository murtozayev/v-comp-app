import { Link } from "react-router-dom"

const Card = ({ price, title, image, to, click }) => {
    return (
        <section className=" mt-[3vw] rounded-[0.2vw] flex-shrink-0 bg-[white] transition hover:bg-[#151543] hover:text-[white] relative px-[2vw] shadow w-[19vw] py-[2vw] ">
            <Link onClick={click} to={to} className="cursor-pointer ">
                <img className=" w-[17vw] " src={image} alt="Image" />
                <h2 className=" text-[1vw] mt-[2vw] font-semibold ">{title}</h2>
            </Link>

            <aside className=" mt-[1vw] flex items-center text-[1vw] gap-[0.2vw] ">
                <i className=" fas fa-star text-[yellow] " />
                <i className=" fas fa-star text-[yellow] " />
                <i className=" fas fa-star text-[yellow] " />
                <i className=" fas fa-star text-[yellow] " />
                <i className=" fas fa-star text-[gray] " />
            </aside>

            <aside className="flex items-center mt-[1vw] justify-between">
                <span className="font-bold text-[1.7vw] ">{price}$</span>
                <button className=" text-[1vw] font-semibold text-white bg-buy py-[0.4vw] rounded-[0.2vw] px-[3vw] ">Buy</button>
            </aside>

            <button className=" fa-regular fa-heart text-[1.3vw] absolute top-[1vw] right-[1vw]  " />
        </section>
    )
}

export default Card
