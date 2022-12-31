import { FiHome } from "react-icons/fi"
import { BsSearch, BsCollectionPlay } from "react-icons/bs"

const Left = () => {
    return (
        
            <div className="w-3/12 h-auto bg-black text-gray-200">
                <a href="#" className="flex p-4 h-10"> <FiHome /> Ana sayfa</a>
                <a href="#" className="flex p-4 h-10"> <BsSearch /> Ara</a>
                <a href="#" className="flex p-4 h-10"> <BsCollectionPlay /> Kitaplığın</a>
            </div>
    

    );
}

export default Left;