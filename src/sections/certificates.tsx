import { Carousel } from "../components/carousel"
import { certificateData } from "../info/certificate_info"

export const Certificates = () => {

    return (
        <>
         <div className='h-16 my-2'></div>
                    <h2>Certificates</h2>
                    <Carousel data={certificateData}></Carousel>
        </>
    )
}