import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FadeLoader } from "react-spinners"

const Store = () => {

    const [data, setData] = useState([])

    const [loading, setLoading] = useState(false)

    const [select, setSelect] = useState("")

    const [from, setFrom] = useState('')

    const [to, setTo] = useState('')

    function onFilter() {

        if (select === "By Price exprensive") {
            data.sort((a, b) => {
                return b.price - a.price
            })
        } else if (select === "By Price cheap") {
            data.sort((a, b) => a.price - b.price)
        } else if (select === "By name") {
            data.sort((a, b) => a.title.localeCompare(b.title));
        }
        else {
            return data
        }

    }


    async function getData() {

        try {

            setLoading(true)

            const req = await fetch("https://v-comp-api.vercel.app/api/getProducts")

            const res = await req.json()

            setLoading(false)

            return setData(res)


        } catch (error) {

            console.log(error);

        }
    }

    onFilter()

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className=" px-[10vw] py-[2vw] flex gap-[2vw] ">
            {loading ? <FadeLoader className=" w-[10vw] my-[6vw] mx-auto " /> : (
                <>
                    <form className=" w-[30vw] h-[30vw] mt-[2vw] shadow-lg p-[2vw] ">
                        <h2 className=" font-bold text-[1.5vw] ">By price</h2>
                        <div className=" flex gap-[1vw] ">
                            <input value={from} onChange={(e) => setFrom(e.target.value)} placeholder="From" type="number" className=" w-[8vw] text-[1vw] px-[0.5vw] outline-none font-semibold h-[2vw] rounded-[0.2vw] mt-[1vw] bg-[#cccbcb75] " />
                            <input value={to} onChange={(e) => setTo(e.target.value)} placeholder="to" type="number" className=" w-[8vw] text-[1vw] px-[0.5vw] outline-none font-semibold h-[2vw] rounded-[0.2vw] mt-[1vw] bg-[#cccbcb75] " />
                        </div>

                        <h1 className="my-[1vw] text-[1.5vw] font-medium " >Sort by</h1>

                        <select value={select} onChange={(e) => setSelect(e.target.value)} className=" outline-none border-purple-500 border w-[100%] p-[0.2vw] rounded-[0.4vw] ">
                            <option value="Default">Default</option>
                            <option value="By Price exprensive">By Price exprensive</option>
                            <option value="By Price cheap">By Price cheap</option>
                            <option value="By name">By name</option>
                        </select>

                    </form>

                    <aside className=" flex flex-wrap justify-between gap-[0.2vw] ">
                        {data.map((item) => (
                            <section key={item._id} className=" mt-[3vw] rounded-[0.2vw] flex-shrink-0 bg-[white] transition hover:bg-[#151543] hover:text-[white] relative px-[1vw] shadow w-[13vw] py-[1vw] ">
                                <Link to={`/product/${item._id}`} className="cursor-pointer ">
                                    <img className=" w-[10vw] " src={item.catalogIcon} alt="Image" />
                                    <h2 className=" text-[0.8vw] mt-[2vw] font-semibold ">{item.title}</h2>
                                </Link>

                                <aside className=" mt-[1vw] flex items-center text-[0.7vw] gap-[0.2vw] ">
                                    <i className=" fas fa-star text-[yellow] " />
                                    <i className=" fas fa-star text-[yellow] " />
                                    <i className=" fas fa-star text-[yellow] " />
                                    <i className=" fas fa-star text-[yellow] " />
                                    <i className=" fas fa-star text-[gray] " />
                                </aside>

                                <aside className="flex items-center mt-[1vw] justify-between">
                                    <span className="font-bold text-[1vw] ">{item.price}$</span>
                                    <button className=" text-[0.8vw] font-semibold text-white bg-buy py-[0.2vw] rounded-[0.1vw] px-[2vw] ">Buy</button>
                                </aside>

                                <button className=" fa-regular fa-heart text-[1vw] absolute top-[1vw] right-[1vw]  " />
                            </section>
                        ))}
                    </aside>
                </>
            )}
        </div>
    )
}

export default Store
