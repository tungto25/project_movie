import { useState } from "react";
import Navbar from "./Navbar";
import ModalUser from "./ModalUser";


function Header() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <div>
            <header >
                <Navbar handleOpen={handleOpen} />

            </header>
            <ModalUser open={open} setOpen={setOpen} />
            {/* <div className='w-full'>
                <ul className='flex justify-between items-center gap-5 py-3 px-80 text-white bg-slate-700'>
                    <Link to={"/"} className="hover:text-orange-700">Home</Link>
                    <Link to={"/categories"} className="hover:text-orange-700">Categories</Link>
                    <Link to={"/product"} className="hover:text-orange-700">Product</Link>
                    <Link to={"/todolist"} className="hover:text-orange-700">Todolist</Link>
                </ul>
            </div> */}
        </div>
    );
}

export default Header;