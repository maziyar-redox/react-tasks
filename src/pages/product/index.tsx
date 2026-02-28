import { useNavigate, useParams } from "react-router";

import { productData } from "@/src/mock/data";

function ProductPage() {
    const params = useParams();
    const product = productData.find((val) => String(val.Id) === params.id);
    const navigate = useNavigate();
    if (product === undefined) {
        return (
            <main className="flex flex-col items-center justify-center w-full h-screen gap-y-5">
                <h1 className="text-black font-bold text-2xl md:text-5xl">
                    Product {params.id} not found :(
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
    const discountPrice: number = (product.Discount * 0.01) * product.Price;
    const isDiscountPrice: boolean = discountPrice === 0 ? false : true;
    return (
        <main className="flex flex-col items-center justify-center w-full h-screen gap-y-10">
            <h1 className="text-3xl md:text-6xl text-gray-800 font-bold">
                Product Info
            </h1>
            <div className="shadow-2xl flex flex-col items-center justify-center pt-5 px-5 pb-5 rounded-xl bg-white gap-y-4">
                <img width={250} src={"../" + product.ImgUrl} className="object-center object-cover rounded-xl" alt="Pic" />
                <div className="flex flex-col flex-wrap justify-center items-start gap-y-2 max-w-62.5">
                    <div className="flex flex-row justify-center items-center gap-x-2">
                        <h2 className="text-gray-900 antialiased text-lg font-bold">
                            {product.Title}
                        </h2>
                        {
                            product.IsNew
                            ?
                            <span className="bg-red-500 font-light text-xs text-white px-2 pt-0.5 rounded-full mb-1">
                                New
                            </span>
                            :
                            ""
                        }
                        {
                            isDiscountPrice
                            ?
                            <span className="bg-green-500 font-light text-xs text-white px-2 pt-0.5 rounded-full mb-1">
                                Off
                            </span>
                            :
                            ""
                        }
                    </div>
                    <p className="text-gray-900/75 text-sm font-light">
                        {product.Description}
                    </p>
                    <div className="flex flex-row justify-center items-center gap-x-2">
                        <span className="text-gray-900/75 font-mono">
                            Price : 
                        </span>
                        <span className={`text-gray-900/75 font-mono ${isDiscountPrice ? "text-sm line-through" : ""}`}>
                            {product.Price}$
                        </span>
                        {
                            isDiscountPrice
                            ?
                            <span className={`text-gray-900/75 font-mono`}>
                                {discountPrice.toFixed(2)}$
                            </span>
                            :
                            ""
                        }
                    </div>
                </div>
            </div>
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

export default ProductPage;