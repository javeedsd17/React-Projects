const HeroSection = () => {
    return (
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BESTYOUR FEET DESERVE THE BESTYOUR FEET DESERVE THE BESTYOUR FEET DESERVE THE BESTYOUR FEET DESERVE THE BESTYOUR FEET DESERVE THE BEST</p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="seconddary-btn">Category</button>
            </div>

            <div className="shopping">
                <p>Also Available On</p>

                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon.lo" />
                    <img src="/images/flipkart.png" alt="flipkart.lo" />
                </div>
            </div>

        </div>


        <div className="hero-image">
            <img src="/images/hero-image.png" alt="hero-image" />
        </div>
    </main>
    );
};

export default HeroSection;

