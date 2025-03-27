import { useEffect, useState } from "react";
import bootService from "../../services/bootService";
import BootItem from "./bootItem/BootItem";

export default function Catalog() {
    const [boots, setBoots] = useState([])

    useEffect(() => {
        bootService.getAll()
            .then(setBoots)
    }, [])

    return (
        <div className="catalog-container">
            <h2 className="catalog-heading">Football Boots Collection</h2>
            <div className="boots-grid">
                {boots.map(boot => <BootItem key={boot._id} {...boot}/>)}
            </div>
        </div>
    );
}
