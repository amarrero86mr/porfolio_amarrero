import { Carousel } from "../components/carousel"
import { slidesData } from "../info/proyect_info"
export const Projects = () => {
    
    return (
        <>
            <div className='h-16 my-2'></div>
            <h2>PROJECTs</h2>
            <Carousel data={slidesData}></Carousel>
            
        </>
    )
}