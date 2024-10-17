import { FadeLoader } from "react-spinners"
import { useEffect, useState } from "react"

const Slide = () => {

    const [data, setData] = useState([])

    const [loading, setLoading] = useState(false)

    async function getSlider() {
        try {

            setLoading(true)

            const req = await fetch("https://v-comp-api.vercel.app/api/getSlides")

            const res = await req.json()

            setLoading(false)

            return setData(res)

        } catch (error) {

            console.log(error);

        }
    }

    useEffect(() => {
        getSlider()
    }, [])

    return (
        <div id="carouselExampleInterval" className="carousel slide w-[80vw] phone:w-[100vw] mx-auto  " data-bs-ride="carousel">
            <div className="carousel-inner">

                {loading && <FadeLoader className="mx-auto mt-[10vw]" />}

                {data && data.length > 0 ? (
                    data.map((item, index) => (
                        <div
                            key={item._id}
                            className={`carousel-item ${index === 0 ? "active" : ""}`} // 1-chi slaydga 'active' qo'shildi
                            data-bs-interval="2000"
                        >
                            <img src={item.slideUrl} className="d-block phone:w-[100vw] phone:h-[46vw] w-[80vw] h-[35vw] " alt={`Slide ${index + 1}`} />
                        </div>
                    ))
                ) : (
                    <div className="carousel-item active">
                        <p className="text-center">No slides available</p> {/* Bo'sh holatda ko'rsatish */}
                    </div>
                )}
            </div>

            <button
                className="carousel-control-prev text-[1vw] "
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon text-[1vw] " aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button
                className="carousel-control-next text-[1vw]"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon text-[1vw] " aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default Slide
