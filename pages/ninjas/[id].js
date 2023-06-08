export const getStaticPaths = async ()=>{
    let res = await fetch("https://jsonplaceholder.com/users")
    let data = await res.json();

    const paths = data.map((item)=>{
        return {
            params:{id: item.id.toString()}
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStateProps = async (context)=>{
    let id = context.params.id;
    const res = await fetch("https://jsonplaceholder.com/users/" + id);
    const data = await res.json();

    return {
        props:{
            ninja:data
        }
    }
}

const Details = ({ninja}) => {
    console.log(ninja);

    return ( 
        <div className="p">
            <h2>Details</h2>
        </div>
     );
}
 
export default Details;