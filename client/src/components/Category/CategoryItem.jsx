import { Link } from "react-router-dom";
import { GiDoorHandle } from 'react-icons/gi'

const CategoryItem = ({ item }) => {
    return (
        <div className="item">
            {/* <Link to={`/products/${item.cat}`}> */}
                <div className="outside">
                    <p>Fittings</p>
                    <GiDoorHandle id='logo' />
                </div>
            {/* </Link> */}
        </div>
    )
}
export default CategoryItem;