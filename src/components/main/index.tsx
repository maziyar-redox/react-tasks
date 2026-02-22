import ProductCard from "@/src/components/main/ProductCard";
import { productData } from "@/src/mock/data";
import type { Dispatch, SetStateAction } from "react";

function Main({
    setStore
}: { setStore: Dispatch<SetStateAction<number>> }) {
    return (
        <ul className="flex flex-row flex-wrap items-center justify-start w-full px-36 gap-10">
            {productData.map((val) => (
                <ProductCard
                    key={val.Id}
                    Title={val.Title}
                    Description={val.Description}
                    Price={val.Price}
                    setStore={setStore}
                    Id={val.Id}
                />
            ))}
        </ul>
    );
};

export default Main;