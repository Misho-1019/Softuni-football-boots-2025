import Header from "../header/Header";

export default function Home() {
    return (
        <div className="hero_area">
            <section className=" slider_section position-relative">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="col-lg-10 col-md-11 mx-auto">
                                    <div className="detail-box">
                                        <div>
                                            <h3>Football</h3>
                                            <h2>Training</h2>
                                            <h1>Pro:Direct Soccer</h1>
                                            <p>
                                                Welcome to Pro:Direct Soccer, your ultimate web application for discovering the perfect football boots!
                                                Whether you're a pro, an amateur, or just getting started, we help you find boots that match your
                                                playing style, position, and budget. Compare top brands, read expert reviews, and get personalized
                                                recommendations—all in one place. Step up your game with the right pair today!
                                            </p>
                                            <div className="">
                                                <a href="">Contact Us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}