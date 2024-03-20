// import PropTypes from 'prop-types';
import { AiOutlineMenu } from "react-icons/ai";
import Link from "../Link/Link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {

    const [open, setOpen] = useState(false);


    const routes = [
        { "id": 1, "name": "Home", "path": "/" },
        { "id": 2, "name": "About", "path": "/about" },
        { "id": 3, "name": "Products", "path": "/products" },
        { "id": 4, "name": "Product Details", "path": "/products/:id" },
        { "id": 5, "name": "Contact", "path": "/contact" }
    ]

    return (
        <div className="p-4 lg:p-0 bg-orange-300">
           <nav>
           <div className="md:hidden text-4xl" onClick={() => setOpen(!open)}>
            {
                open === true ? <IoMdClose /> : <AiOutlineMenu />
            }
             
           </div>
           <ul className={`md:flex absolute md:static duration-500 bg-orange-300 p-4
           ${open ? 'left-0' : '-left-64'}
           `}>
                {
                    routes.map(route => <Link key={route.id} route ={route}></Link>)
                }
           </ul>
            </nav>
        </div>
    );
};

NavBar.propTypes = {

};

export default NavBar;