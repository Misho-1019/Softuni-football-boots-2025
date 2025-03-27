import { useEffect, useState } from "react";
import bootService from "../../services/bootService";

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
                <div className="boot-card">
                    <img src="/images/pink.jpeg" alt="Nike Mercurial Vapor 14" className="boot-image" />
                    <div className="boot-info">
                        <h3>Nike Mercurial Vapor 14</h3>
                        <p><strong>Price:</strong> $199</p>
                        <p><strong>Material:</strong> Flyknit</p>
                        <a href="#" className="btn primary">View Details</a>
                    </div>
                </div>

                <div className="boot-card">
                    <img src="/images/pink.jpeg" alt="Adidas Predator Edge" className="boot-image" />
                    <div className="boot-info">
                        <h3>Adidas Predator Edge</h3>
                        <p><strong>Price:</strong> $220</p>
                        <p><strong>Material:</strong> Primeknit</p>
                        <a href="#" className="btn primary">View Details</a>
                    </div>
                </div>

                <div className="boot-card">
                    <img src="/images/pink.jpeg" alt="Puma Future Z" className="boot-image" />
                    <div className="boot-info">
                        <h3>Puma Future Z</h3>
                        <p><strong>Price:</strong> $180</p>
                        <p><strong>Material:</strong> FuzionFit+</p>
                        <a href="#" className="btn primary">View Details</a>
                    </div>
                </div>

                <div className="boot-card">
                    <img src="/images/pink.jpeg" alt="Under Armour Magnetico" className="boot-image" />
                    <div className="boot-info">
                        <h3>Under Armour Magnetico</h3>
                        <p><strong>Price:</strong> $150</p>
                        <p><strong>Material:</strong> ClutchFit</p>
                        <a href="#" className="btn primary">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
