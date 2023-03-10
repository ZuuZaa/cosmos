import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <section className="home-page" id="home-page">
            <div className="page-wrapper">
                <div className="page-content">
                    <div className="content-text">
                        <h5 className="subtitle">SO, YOU WANT TO TRAVEL TO</h5>
                        <h1 className="title">SPACE</h1>
                        <p className="description">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                </div>
                <div className="explore">
                    <Link to="/destination/moon">
                        <button className="explore-button">
                            <h4 className="btn">EXPLORE</h4>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
