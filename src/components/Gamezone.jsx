import { useEffect, useState } from "react";
import Card from "./Card";
import { PacmanLoader } from "react-spinners";

const Gamezone = () => {

    const [game, setGame] = useState([]);

    const [loading, setLoading] = useState(false)

    async function getGameData() {

        setLoading(true)

        const req = await fetch("https://v-comp-api.vercel.app/api/game")

        const res = await req.json()

        setLoading(false)

        return setGame(res)
    }

    useEffect(() => {
        getGameData()
    }, [])


    return (
        <div className=" gamezone text-[white] phone:px-[2vw] phone:h-[60vw] px-[10vw] py-[3vw] h-[47vw] bg-game mt-[7vw] ">
            <h1 className=" text-[2vw] font-bold after:w-[80%] before:absolute before:w-[10vw] before:h-[0.2vw] before:bg-[white] before:left-[-11vw] before:top-[1vw]  ml-[10vw] after:top-[1vw] after:ml-[1vw] after:bg-[white] after:h-[0.2vw] after:absolute relative phone:text-[5vw] phone:after:w-[40%] ">Game Zone</h1>

            <div className=" w-[100%] overflow-hidden ">
                {loading ? <PacmanLoader color="#fff" className=" mx-auto mt-[15vw] " size="3vw" /> : (
                    < div className=" text-[black] flex phone:gap-[3vw] gap-[1vw] overflow-x-auto ">
                        {game.map((item) => (
                            <Card to={`/product/${item._id}`} title={item.title} image={item.catalogIcon} price={item.price} key={item._id} />
                        ))}
                    </div>
                )}
            </div>
        </div >
    )
}

export default Gamezone
