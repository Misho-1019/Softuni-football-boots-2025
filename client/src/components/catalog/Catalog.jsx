import BootItem from "./bootItem/BootItem";
import { useBoots } from "../../api/bootApi";

export default function Catalog() {
    const { boots } = useBoots()

    return (
        <div className="catalog-container">
            <h2 className="catalog-heading">Football Boots Collection</h2>
            <div className="boots-grid">
                {boots.length > 0
                    ? boots.map(boot => <BootItem key={boot._id} {...boot} />)
                    : <h3 className="no-boots">No Football Boots Yet</h3>
                }
            </div>
        </div>
    );
}
