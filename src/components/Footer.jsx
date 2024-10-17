import logo from "../images/Logo.png"

const Footer = () => {
    return (
        <footer className=" text-[white] phone:px-[2vw] phone:h-[20vw] px-[10vw] py-[2vw] h-[30vw] bg-[#090937] ">
            <div className="flex items-start justify-between ">
                <div className=" flex flex-col gap-[0.5vw] phone:hidden ">
                    <h1 className=" text-[1.5vw] font-bold ">Information</h1>
                    <br />
                    <a className=" text-[0.7vw] font-semibold " href="#">Stock</a>

                    <a className=" text-[0.7vw] font-semibold " href="#">Credit</a>

                    <a className=" text-[0.7vw] font-semibold " href="#">Payment and delivery</a>

                    <a className=" text-[0.7vw] font-semibold " href="#">Help</a>

                    <a className=" text-[0.7vw] font-semibold " href="#">Purchase of used cars</a>

                    <a className=" text-[0.7vw] font-semibold " href="#">Contacts</a>

                </div>
                <div className=" flex flex-col gap-[0.5vw] phone:hidden ">
                    <h1 className=" text-[1.5vw] font-bold ">Services and facilities</h1>
                    <br />
                    <a className=" text-[0.7vw] font-semibold " href="#">Service center v-comp</a>

                    <a className=" text-[0.7vw] font-semibold " href="#">Used goods store</a>

                    <a className=" text-[0.7vw] font-semibold " href="#">Purchase of used cars</a>

                    <a className=" text-[0.7vw] font-semibold " href="#">Repair of PC and office equipment</a>

                    <a className=" text-[0.7vw] font-semibold " href="#">Purchase of used cars</a>

                    <a className=" text-[0.7vw] font-semibold " href="#">Computer help</a>

                </div>
                <div className=" flex flex-col gap-[0.5vw] phone:hidden ">
                    <h1 className=" text-[1.5vw] font-bold ">Contacts</h1>
                    <br />
                    <a className=" text-[0.7vw] font-semibold flex items-center gap-[0.7vw] " href="#">
                        <i className="fas fa-phone" />
                        <span>+1 001 029 2938</span>
                    </a>
                    <a className=" text-[0.7vw] font-semibold flex items-center gap-[0.7vw] " href="#">
                        <i className="fas fa-phone" />
                        <span>+1 001 029 2938</span>
                    </a>
                    <a className=" text-[0.7vw] font-semibold flex items-center gap-[0.7vw] " href="#">
                        <i className="fas fa-phone" />
                        <span>+1 001 029 2938</span>
                    </a>

                </div>

                <div className=" phone:hidden">

                    <h1 className=" font-bold text-[1.5vw] ">Follow us</h1>
                    <br />
                    <div className=" flex items-center gap-[1vw] text-[1.2vw] ">
                        <a className=" fa-brands fa-instagram" />
                        <a className=" fa-brands fa-facebook" />
                        <a className=" fa-brands fa-twitter" />
                        <a className=" fa-brands fa-telegram" />
                        <a className=" fa-brands fa-youtube" />
                        <a className=" fa-brands fa-linkedin" />
                    </div>

                    <form className=" flex flex-col gap-[1vw] phone:items-center ">
                        <span className=" text-[1.5vw] mt-[1vw] ">Subscribe for discounts</span>
                        <div>
                            <input type="text" className=" phone:w-[90vw] phone:h-[10vw] phone:text-[3vw] text-[black] font-semibold text-[1vw] p-[0.5vw] outline-none rounded-[0.2vw] pr-[4vw] " placeholder="Please enter your email..." />
                            <button className=" text-[1.3vw] relative right-[2vw] text-black fa-solid fa-paper-plane " />
                        </div>
                    </form>

                </div>

            </div>

            <div className=" flex items-center phone:flex-col gap-[3vw] py-[1vw] border-t border-b mt-[5vw] ">
                <img className=" w-[15vw] " src={logo} alt="Logo" />
                <h1 className=" text-[1.5vw] font-semibold ">2008-2021 Online store v-comp.com.ua
                    All rights reserved</h1>
            </div>

        </footer>
    )
}

export default Footer
