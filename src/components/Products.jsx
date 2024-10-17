import { useEffect, useState } from "react"
import Card from "./Card"
import { FadeLoader } from "react-spinners"
import { useNavigate } from "react-router-dom"

const Products = () => {

    const [data, setData] = useState([])

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    async function getProducts() {
        try {

            setLoading(true)

            const response = await fetch('https://v-comp-api.vercel.app/api/getProducts')

            const data = await response.json()

            setLoading(false)

            return setData(data)


        } catch (error) {

            console.log(error);

        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className=" mt-[5vw] px-[10vw] phone:px-[3vw] phone:mt-[7vw] ">

            <h1 className=" font-semibold text-[2vw] phone:text-[7vw]  ">Top Products</h1>


            {loading ? <FadeLoader className="w-[20vw] mx-auto mt-[20vw] " /> : (
                <>
                    <div className=" flex gap-[1vw] flex-wrap justify-between ">
                        {data && data.slice(0, 12).map((item) => (
                            <Card to={`/product/${item._id}`} title={item.title} image={item.catalogIcon} price={item.price} key={item._id} />
                        ))}
                    </div>
                    <button onClick={() => navigate("/store")} className=" bg-[red] text-white flex float-right mt-[2vw] items-center gap-[2vw] px-[3vw] phone:py-[0.4vw] phone:px-[4vw] phone:mt-[0] py-[0.6vw] rounded-[1vw] ">
                        <span>Shop now</span>
                        <i className=" fas fa-arrow-right text-[2vw] " />
                    </button>
                </>
            )}

        </div>
    )
}

export default Products
