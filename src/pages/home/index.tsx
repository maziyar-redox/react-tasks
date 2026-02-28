import ProductList from "@/src/components/product";

function HomePage() {
    return (
        <main className="flex flex-col items-center justify-center w-full h-full mt-10 gap-y-32 mb-40">
            <h1 className="text-3xl md:text-6xl text-gray-800 font-bold">
                Product Catalogue
            </h1>
            <ProductList />
        </main>
    );
};

export default HomePage;