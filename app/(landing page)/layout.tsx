import Footer from "./_components/Footer";


const LandingLayout=({
    children
}:{
    children: React.ReactNode;
})=>{
    return(
        <div className="h-full m-8">
            <main className="h-full ">
                {children}
            </main>
        </div>
    )
}

export default LandingLayout