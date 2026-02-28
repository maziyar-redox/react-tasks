import { useBagStore } from "@/src/store/bagStore";
import type { ProductDataType } from "@/src/types/productTypes";

import { useState } from "react";
import { Link } from "react-router";

function ProductCard({
    Id,
    Title,
    Description,
    Price,
    IsNew,
    ImgUrl,
    Discount,
}: ProductDataType) {
    const [isAdded, setIsAdded] = useState<boolean>(false);
    const { setItems, items } = useBagStore();
    const discountPrice: number = (Discount * 0.01) * Price;
    const isDiscountPrice: boolean = discountPrice === 0 ? false : true;
    return (
        <li className="shadow-2xl rounded-xl bg-white flex flex-col items-center justify-center gap-y-4 pt-5 px-5 pb-5">
            <Link to={`/product/${Id}`} className="flex flex-col items-center justify-center gap-y-4 ">
                <img width={250} src={ImgUrl} className="object-center object-cover rounded-xl" alt="Pic" />
                <div className="flex flex-col flex-wrap justify-center items-start gap-y-2 max-w-62.5">
                    <div className="flex flex-row justify-center items-center gap-x-2">
                        <h2 className="text-gray-900 antialiased text-lg font-bold">
                            {Title}
                        </h2>
                        {
                            IsNew
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
                        {Description}
                    </p>
                    <div className="flex flex-row justify-center items-center gap-x-2">
                        <span className="text-gray-900/75 font-mono">
                            Price : 
                        </span>
                        <span className={`text-gray-900/75 font-mono ${isDiscountPrice ? "text-sm line-through" : ""}`}>
                            {Price}$
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
            </Link>
            <button
                onClick={() => {
                    if (isAdded == true) {
                        return;
                    } else {
                        setIsAdded(true);
                        setItems(items + 1);
                    };
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
        </li>
    );
};

export default ProductCard;