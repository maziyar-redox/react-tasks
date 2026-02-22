import img from "@/src/assets/1.png";
import type { ProductDataType, ProductStateType } from "@/src/types/productTypes";
import { useState } from "react";

function ProductCard({
    Title,
    Description,
    Price,
    setStore,
}: ProductDataType & ProductStateType) {
    const [isAdded, setIsAdded] = useState<boolean>(false);
    return (
        <li className="shadow-2xl flex flex-col items-center justify-center pt-5 px-5 pb-5 rounded-xl bg-white gap-y-4">
            <img width={250} src={img} className="object-center object-cover rounded-xl" alt="Pic" />
            <div className="flex flex-col flex-wrap justify-center items-start gap-y-2 max-w-62.5">
                <h2 className="text-gray-900 antialiased text-lg font-bold">
                    {Title}
                </h2>
                <p className="text-gray-900/75 text-sm font-light">
                    {Description}
                </p>
                <span className="text-gray-900/75 font-mono">
                    Price : {Price}$
                </span>
                <button
                    onClick={() => {
                        setIsAdded(true);
                        setStore((val) => val + 1);
                    }}
                    className={`${isAdded ? "bg-green-500" : "bg-gray-900 hover:bg-gray-900/95"} text-white font-bold text-sm transition-all duration-700 ease-in-out w-full pb-1.5 pt-2 rounded-md cursor-pointer`}
                >
                    {
                        isAdded
                        ?
                        "Added to card!"
                        :
                        "Add to card"
                    }
                </button>
            </div>
        </li>
    );
};

export default ProductCard;