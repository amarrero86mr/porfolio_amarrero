export const Projects = () => {

    return (
        <>
            <h2>Projects</h2>
            <div className="flex justify-between content-center">
                <button className="h-24 w-12 left-0.5 self-center border-2 opacity-50 rounded-2xl border-lime-400 bg-violet-900 text-lime-400 hover:bg-violet-800 hover:opacity-100
                duration-300 ease-in-out"
                > &lt; </button>
                <div className="w-1/3 border-2 border-lime-400 rounded-2xl">
                    <img
                        className="rounded-2xl"
                        src="src/info/task_management_baner.jpg"
                        alt="imagen de proyecto de kanba" />
                </div>
                <div className="w-1/3 border-2 border-lime-400 rounded-2xl">
                    <img
                        className="rounded-2xl"
                        src="src/info/tradiscionCriolla_baner.jpg"
                        alt="imagen de proyecto de e-commerce tradicion criolla" />
                </div>
                <button className="h-24 w-12 -right-0.5 self-center border-2 opacity-50 rounded-2xl border-lime-400 bg-violet-900 text-lime-400 hover:bg-violet-800 hover:opacity-100
                duration-300 ease-in-out"> &gt; </button>
            </div>
        </>
    )
}