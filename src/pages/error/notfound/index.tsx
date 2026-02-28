import { useNavigate } from "react-router";

function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <main className="flex flex-col items-center justify-center w-full h-full gap-y-5">
            <h1 className="text-black font-bold text-2xl md:text-5xl">
                Page not found :(
            </h1>
            <button
                className="text-white bg-green-500 px-2.5 py-2 rounded-md cursor-pointer"
                onClick={() => {
                    navigate("/");
                }}
            >
                Back to main
            </button>
        </main>
    );
};

export default NotFoundPage;