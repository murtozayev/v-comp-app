import { BounceLoader } from "react-spinners"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Card from "./Card"
import { useDispatch } from "react-redux"
import { addToCart } from "../store"

const AboutProduct = () => {

    const { id } = useParams()

    const [data, setData] = useState([])

    const [allData, setAllData] = useState([])

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    async function getOneProduct() {
        try {

            setLoading(true)

            const req = await fetch("https://v-comp-api.vercel.app/api/oneproduct/" + id)

            const res = await req.json()

            setLoading(false)

            return setData(res)

        } catch (error) {
            console.log(error);
        }
    }

    async function getAllProducts() {
        try {
            setLoading(true)

            const req = await fetch("https://v-comp-api.vercel.app/api/getProducts")

            const res = await req.json()

            setLoading(false)

            return setAllData(res)

        } catch (error) {
            console.log(error);
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    useEffect(() => {
        getOneProduct()
        getAllProducts()
    }, [])

    return (
        <div className=" px-[10vw] py-[2vw] ">

            {loading ? <BounceLoader className=" w-[20vw] mx-auto m-[10vw] " /> : (

                <>

                    <h1 className="font-bold text-[2vw] ">{data.title}</h1>

                    <aside className=" mt-[1vw] flex items-center text-[1vw] gap-[0.2vw] ">
                        <i className=" fas fa-star text-[yellow] " />
                        <i className=" fas fa-star text-[yellow] " />
                        <i className=" fas fa-star text-[yellow] " />
                        <i className=" fas fa-star text-[yellow] " />
                        <i className=" fas fa-star text-[gray] " />
                    </aside>

                    <br />
                    <hr />

                    <section className="flex gap-[5vw]">
                        <img className="w-[40vw]" src={data.catalogIcon} alt="Image" />

                        <aside className="flex w-[40vw] flex-col gap-[1vw] justify-center relative ">
                            <br />
                            <aside className=" flex gap-[1vw] items-center ">
                                <h1 className="font-bold text-[2vw] ">{data.price}$</h1>
                                <button onClick={() => navigate("/pay")} className="px-[2vw] py-[0.5vw] text-[1vw] font-semibold bg-buy text-[white] rounded-[0.3vw] ">Buy now</button>
                                <button onClick={() => dispatch(addToCart(data))} className="px-[2vw] py-[0.5vw] text-[1vw] font-semibold rounded-[0.3vw] border-[green] border-[0.1vw] ">Add to cart</button>
                            </aside>

                            <p className="font-semibold text-[2vw] ">
                                {data.desc}
                            </p>

                            <aside className="flex  items-center gap-[2vw]">
                                <img src={data.type} className=" w-[2vw] " alt="" />
                                <img src={data.pcType} className=" w-[2vw] " alt="" />
                            </aside>

                            <button className="absolute right-0 top-0 fa-regular fa-heart m-[1vw]" />
                        </aside>

                    </section>

                </>

            )}

            <br />
            <br />
            <br />
            <br />

            <div className="overflow-hidden gamezone ">
                <div className="overflow-auto flex gap-[1vw]  ">
                    {allData && shuffleArray(allData).slice(0, 7).map((item) => {
                        return (
                            <Card click={window.location.reload} key={item._id} to={`/product/${item._id}`} image={item.catalogIcon} price={item.price} title={item.title} />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default AboutProduct
