import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { removeItem } from "../store"
import { FadeLoader } from "react-spinners"

const Cart = ({ show, setShow }) => {

    const [data, setData] = useState([])

    const [loading, setLoading] = useState(false)

    async function getData() {
        try {

            setLoading(true)

            const req = await fetch("https://v-comp-api.vercel.app/api/getProducts")

            const res = await req.json()

            setLoading(false)

            setData(res)


        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)

    const [quantity, setQuantity] = useState(0)

    function increment(id) {
        cart.filter((item) => {
            if (item._id === id) {
                return setQuantity(prev => prev += 1)
            }
        })
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function switchScreen(id) {
        navigate("/product/" + id)
        window.location.reload()
    }

    return (
        <div className={`${show ? "flex" : "hidden"} w-[100vw] h-[100vh] top-0 backdrop-blur-[0.2vw] justify-center items-center fixed z-0 backdrop-brightness-[0.7]`}>
            <div className="p-[1vw] phone:w-[100vw] phone:h-[100vh] w-[40vw] h-[100vh] bg-[white] rounded-[0.3vw] ">
                <aside className="flex items-center justify-between ">
                    <h1 className="font-bold  text-[1.4vw] phone:text-[5vw] phone:p-[2vw] ">Cart</h1>
                    <button onClick={() => setShow(false)} className="fas fa-xmark text-[1vw] phone:text-[5vw] text-[red] " />
                </aside>
                <br />
                <hr />

                <div className="flex flex-col gap-[1vw] border-[0.1vw] px-[1vw] phone:max-h-[70vh] rounded-[0.6vw] mt-[1vw] gamezone max-h-[50vh] overflow-y-auto ">
                    {cart.length === 0 ? <h1 className="text-[3vw] font-bold phone:text-[4vw] text-center">This cart is empty</h1> : cart.map((item) => (
                        <section key={item._id} className="flex items-center mt-[1vw] justify-between">
                            <aside className="flex items-center gap-[2vw] ">
                                <img src={item.catalogIcon} className=" w-[6vw] phone:w-[23vw] " alt="Image" />
                                <h2 className="font-bold  text-[1vw] phone:text-[3vw] ">{item.title}</h2>
                            </aside>
                            <aside className="flex items-center gap-[1vw] font-bold phone:text-[3vw] text-[1.4vw]">
                                <button className=" fas fa-minus text-[blue]" />
                                <span>{quantity}</span>
                                <button onClick={() => increment(item._id)} className=" fas fa-plus text-[blue]" />
                            </aside>

                            <span className="text-[1.4vw] text-[green] phone:text-[3vw] font-bold">{item.price}$</span>
                            <button onClick={() => dispatch(removeItem(item._id))} className="fas fa-trash phone:text-[3vw] text-[red] text-[1vw] " />
                        </section>
                    ))}
                </div>
                <button disabled={cart.length === 0} onClick={() => {
                    navigate("/pay")
                    return setShow(false)
                }} className=" bg-buy px-[2vw] py-[0.4vw] phone:py-[1vw] phone:px-[4vw] phone:text-[2vw] rounded-[0.2vw] m-[1vw] float-right font-semibold text-[white] phone:w-[100%] phone:my-[5vw] phone:h-[7vw] text-[1vw]">Buy now</button>

                <aside className="flex overflow-x-auto gamezone items-center gap-[2vw] w-[100%]">
                    {loading ? <FadeLoader className="mx-auto w-[10vw]" /> : (
                        <>
                            {shuffleArray(data.slice(0, 10)).map((item) => (
                                <img onClick={() => switchScreen(item._id)} src={item.catalogIcon} className=" w-[10vw] flex-shrink-0 shadow-xl phone:w-[30vw] cursor-pointer " key={item._id} alt="Image" />
                            ))}
                        </>
                    )}
                </aside>
            </div>
        </div>
    )
}

export default Cart
