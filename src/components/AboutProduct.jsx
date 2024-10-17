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
        <div className=" px-[10vw] phone:px-[1vw] py-[2vw] ">

            {loading ? <BounceLoader className=" w-[20vw] mx-auto m-[10vw] " /> : (

                <>

                    <h1 className="font-bold text-[2vw] phone:text-[6vw] ">{data.title}</h1>

                    <aside className=" mt-[1vw] flex items-center phone:text-[3vw] text-[1vw] gap-[0.2vw] ">
                        <i className=" fas fa-star text-[yellow] " />
                        <i className=" fas fa-star text-[yellow] " />
                        <i className=" fas fa-star text-[yellow] " />
                        <i className=" fas fa-star text-[yellow] " />
                        <i className=" fas fa-star text-[gray] " />
                    </aside>

                    <br />
                    <hr />

                    <section className="flex gap-[5vw] phone:flex-col phone:gap-[3vw] phone:items-center">
                        <img className="w-[40vw] phone:w-[100%] " src={data.catalogIcon} alt="Image" />

                        <aside className="flex w-[40vw] phone:w-[100%] flex-col gap-[1vw] justify-center relative ">
                            <br />
                            <aside className=" flex gap-[1vw] phone:gap-[3vw] phone:flex-col items-center ">
                                <h1 className="font-bold phone:text-[7vw] text-[2vw] ">{data.price}$</h1>
                                <button onClick={() => navigate("/pay")} className="px-[2vw] phone:w-[100%] py-[0.5vw] text-[1vw] font-semibold bg-buy text-[white] phone:text-[3vw] phone:py-[1vw] rounded-[0.3vw] ">Buy now</button>
                                <button onClick={() => dispatch(addToCart(data))} className="px-[2vw] py-[0.5vw] text-[1vw] font-semibold rounded-[0.3vw] border-[green] phone:w-[100%] border-[0.1vw] phone:text-[3vw] phone:py-[1vw] ">Add to cart</button>
                            </aside>    

                            <p className="font-semibold text-[2vw] phone:text-[4vw] phone:text-center ">
                                {data.desc}
                            </p>

                            <aside className="flex  items-center gap-[2vw] phone:hidden">
                                <img src={data.type} className=" w-[2vw] " alt="" />
                                <img src={data.pcType} className=" w-[2vw] " alt="" />
                            </aside>
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
