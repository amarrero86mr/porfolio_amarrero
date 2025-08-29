import { useContext } from "react"
import type { TSlideProyect } from "../info/proyect_info"
import { DarkLightContext, type TDarkLightContext } from "./darklight.context"


export const ModalCertificate = (
    props: {
        fnOnModalCert: () => void,
        data:TSlideProyect
    }) => {

        const { changeTheme } = useContext<TDarkLightContext>(DarkLightContext)
    return (
        <>
            <div
        className={`velo-certificate ${changeTheme}`}
        onClick={()=>props.fnOnModalCert()}
        ></div>
            <div
                className={`modal-certificate ${changeTheme}`}
            >
                <h3 className="text-3xl text-center mb-4">{props.data.title}</h3>
                <p className="text-lg text-center mb-4">{props.data.description}</p>
                <img src={props.data.image} alt={props.data.title} className="max-w-3/4 rounded-lg shadow-sm border-2 place-self-center" />

            </div>
        </>
    )
}