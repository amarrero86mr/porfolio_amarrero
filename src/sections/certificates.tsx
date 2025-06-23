

export const Certificates = () => {

    return (
        <>
            <div className="flex justify-between content-center">
                <button className="h-24 w-12 left-0.5 self-center border-2 opacity-50 rounded-2xl border-lime-400 bg-violet-900 text-lime-400 hover:bg-violet-800 hover:opacity-100
                duration-300 ease-in-out"
                > &lt; </button>
                <div className="size-1/4 border-2 border-lime-400 rounded-2xl">
                    <img
                        className="rounded-2xl"
                        src="src/info/certificado_CAC_2024.jpg"
                        alt="certificado de Codo A Codo 2024" />
                </div>
                <button className="h-24 w-12 -right-0.5 self-center border-2 opacity-50 rounded-2xl border-lime-400 bg-violet-900 text-lime-400 hover:bg-violet-800 hover:opacity-100
                duration-300 ease-in-out"> &gt; </button>
            </div>
        </>
    )
}