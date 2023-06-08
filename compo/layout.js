import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({children}) => {
    return ( 
        <div>
            <Navbar /> 
            <br/>
            {children}
            <br/>
            <Footer />
       </div>
     );
}
 
export default Layout;