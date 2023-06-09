import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        },3000)
    },[])

    return ( 
        <div className="not-found">
            <h1>Oooops....</h1>
            <h4>That page cannot be found</h4>
            <p>Go back to <Link href="/"><u style={{color:"#4979ff"}}>Homepage</u></Link> </p>
        </div>
     );
}
 
export default NotFound;