import { useNavigate } from "react-router-dom"

const Pay = () => {

    const navigate = useNavigate()

    function onSubmit(e) {
        e.preventDefault()

        alert("Your pay is accepted we will send this thansk for your shopping")

        return navigate("/")
    }

    return (
        <form onSubmit={onSubmit} className="px-[10vw] phone:px-[2vw] flex flex-col items-center">
            <div className="phone:flex phone:flex-col">
                <input className=" w-[30vw] m-[2vw] h-[3vw] phone:w-[90vw] phone:h-[10vw] phone:text-[4vw] text-[1vw] px-[2vw] rounded-[0.3vw] shadow-lg outline-none  font-semibold " required type="text" placeholder="Enter name" />
                <input className=" w-[30vw] m-[2vw] h-[3vw] phone:h-[10vw] phone:text-[4vw] phone:w-[90vw] text-[1vw] px-[2vw] rounded-[0.3vw] shadow-lg outline-none font-semibold " type="text" placeholder="Enter Surename (Optional)" />
            </div>

            <div className=" phone:flex phone:flex-col">
                <input className="w-[30vw] m-[2vw] h-[3vw] phone:w-[90vw] phone:h-[10vw] phone:text-[4vw] text-[1vw] px-[2vw] rounded-[0.3vw] shadow-lg outline-none font-semibold" required type="text" placeholder="Enter You Address" />
                <input className="w-[30vw] m-[2vw] phone:w-[90vw] phone:h-[10vw] phone:text-[4vw] h-[3vw] text-[1vw] px-[2vw] rounded-[0.3vw] shadow-lg outline-none font-semibold" required type="number" placeholder="Phone number" />
            </div>

            <label className="flex flex-col gap-[2vw] ">
                <span className=" text-[2vw] phone:text-[5vw] font-bold ">Choose pay methods</span>
                <div className="flex items-center gap-[2vw] text-[1.7vw] phone:text-[4vw] font-semibold ">
                    <input className="w-[2vw] phone:w-[5vw] phone:h-[5vw] h-[2vw] " required id="card" name="pay" type="radio" />
                    <label htmlFor="card">Pay by card</label>
                </div>
                <div className="flex items-center gap-[2vw] text-[1.7vw] phone:text-[4vw] font-semibold">
                    <input className="w-[2vw] phone:w-[5vw] phone:h-[5vw] h-[2vw]" required name="pay" id="cash" type="radio" />
                    <label htmlFor="cash">Pay by cash</label>
                </div>
                <div className="flex items-center gap-[2vw] text-[1.7vw] phone:text-[4vw] font-semibold">
                    <input className="w-[2vw] phone:w-[5vw] phone:h-[5vw] h-[2vw]" required id="credit" name="pay" type="radio" />
                    <label htmlFor="credit">Pay by credit</label>
                </div>
            </label>

            <button className="px-[2vw] py-[0.5vw] bg-buy font-semibold phone:w-[100vw] phone:ml-0 phone:h-[7vw] phone:text-[4vw] text-[1vw] rounded-[0.3vw] text-[white] ml-[60vw] m-[2vw] ">Buy now</button>
        </form>
    )
}

export default Pay
