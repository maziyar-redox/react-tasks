function ErrorLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen flex flex-col w-full bg-gray-200">
            {children}
        </div>
    );
};

export default ErrorLayout;