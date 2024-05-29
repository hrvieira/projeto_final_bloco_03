import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div
                className="
                bg-slate-800 
                flex 
                justify-center py-12
                "
            >
                <div
                    className="
                    container 
                    grid 
                    grid-cols-2 
                    text-white
                    "
                >
                    <div
                        className="
                        flex 
                        flex-col 
                        gap-4 
                        items-center 
                        justify-center 
                        py-4
                        "
                    >
                        <h2
                            className="
                            text-5xl 
                            font-bold
                            "
                        >
                            Seja bem vinde!
                        </h2>
                        <p className="text-xl">
                            Remédio de qualidade, com preço popular é aqui!
                        </p>

                        <div className="flex justify-around gap-4">
                            <Link
                                to="/"
                                className="rounded font-semibold text-white 
                                            border-white border-solid border-2 py-2 px-4 hover:bg-teal-700"
                            >
                                Novo Produto
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="./src/assets/atendimento.png"
                            alt="Imagem Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
