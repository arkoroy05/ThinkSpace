"use client"
import { useConvexAuth } from "convex/react"
import { redirect } from "next/navigation"
const MainLayout = ({
    children
}:{
    children:React.ReactNode
})=>{
    const {isAuthenticated,isLoading}=useConvexAuth()

    if(isLoading){
        return(
            <div>Loading....</div>
        )
    }
    if(!isAuthenticated){
        return redirect("/")
    }

    return(
        <div>
            {children}
        </div>
    )
}

export default MainLayout