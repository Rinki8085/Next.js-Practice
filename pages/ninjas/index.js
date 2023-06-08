import { useEffect, useState } from 'react';
import styles from "../../styles/Ninjas.module.css";
import Link from 'next/link';

const Ninja = () => {
    const [data, setData] = useState([]);

    const getStateProps = ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{ return res.json()})
        .then((data)=>setData(data))
     }

    useEffect(()=>{
       getStateProps();
    },[])

    return ( 
        <div className="p">
            <h1>Ninja</h1>
            <br/>
            {data?.map((item)=>
                <div key={item.id}>
                        <Link href={`/ninjas/${item.id}`} className={styles.single}><h4>{item.name}</h4></Link>

                </div>
            )}
        </div>
     );
}
 
export default Ninja;