import ProductCard from "@/src/components/product/ProductCard";

import { productData } from "@/src/mock/data";

function ProductList() {
    return (
        <ul className="flex flex-row flex-wrap items-center justify-start w-full px-8 md:px-16 lg:px-36 gap-10">
            {productData.map((val) => (
                <ProductCard
                    key={val.Id}
                    Title={val.Title}
                    Description={val.Description}
                    Price={val.Price}
                    Discount={val.Discount}
                    ImgUrl={val.ImgUrl}
                    IsNew={val.IsNew}
                    Id={val.Id}
                />
            ))}
        </ul>
    );
};

export default ProductList;