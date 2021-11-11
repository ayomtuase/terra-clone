import React from 'react';
import {
    CarouselItem, CarouselCaption,
    Carousel, CarouselIndicators, CarouselControl
} from 'reactstrap';

const brands = [
    {
        src: 'assets/images/top-brands/access-2.png',
        altText: 'Acesss Bank',
        caption: 'Slide 1'
    },
    {
        src: 'assets/images/top-brands/branch-2.png',
        altText: 'Branch',
        caption: 'Slide 2'
    },
    {
        src: 'assets/images/top-brands/cleanAce-1.png',
        altText: 'Clean Ace',
        caption: 'Slide 3'
    },
    {
        src: 'assets/images/top-brands/heineken-2.png',
        altText: 'Heineken',
        caption: 'Slide 4'
    },
    {
        src: 'assets/images/top-brands/NB-1.png',
        altText: 'Nigerian Breweries',
        caption: 'Slide 5'
    },
    {
        src: 'assets/images/top-brands/wema-2.png',
        altText: 'Wema Bank',
        caption: 'Slide 5'
    }
];

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === brands.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? brands.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }



    render() {

        const { activeIndex } = this.state;

        const slides = brands.map((brand) => {
            return (
                
                    <CarouselItem
                        onExiting={this.onExiting}
                        onExited={this.onExited}
                        key={brand.id}
                        className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    >
                        <img src={brand.src} alt={brand.altText} />
                    </CarouselItem>
                

            );
        });

        return (
            <div className="container">
                <div className="services-section" id="services-section">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                            <div className="services__content">
                                <h2 className="top-intro-title">
                                    Gain Deeper Insight on your existing customers
                                </h2>
                                <p className="lh-lg">Take out the guesswork and enrich your team's understanding of your customers. Learn more about their affinities, interests and behaviour outside of your environment</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
                            <div className="services__img">
                                <img src="assets/images/services/terra-services-1.gif" className="img-fluid" alt="Gain Insight" />
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start">
                            <div className="services__img">
                                <img src="assets/images/services/terra-services-2.png" width="294" height="300" className="img-fluid" alt="ROI Increase" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                            <div className="services__content">
                                <h2 className="service-title">INCREASE ROI BY %X</h2>
                                <h2 className="service-subtitle">
                                    Increase Campaign Metrics and ROI Significantly
                                </h2>
                                <p className="lh-lg">Use AI driven insights and analytics to increase personalization
                                    and enable connected events that increase conversions significantly.</p>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                            <div className="services__content">
                                <h2 className="service-title">COST PER ACTION</h2>
                                <h2 className="service-subtitle">
                                    Improve CPA Rate with Machine Learning
                                </h2>
                                <p className="lh-lg">
                                    CPA is a key ration in campaigns. With Terragon’s Customer Data Platform,
                                    as the algorithm learns,
                                    CPA can be significantly reduced over time, cutting spend and increasing ROI.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
                            <div className="services__img">
                                <img src="assets/images/services/terra-services-3.png" width="300" height="215" className="img-fluid" alt="CPA" />
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start">
                            <div className="services__img">
                                <img src="assets/images/services/terra-services-4.png" width="207" height="300" className="img-fluid" alt="AI and ML" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
                            <div className="services__content">
                                <h2 className="service-title">CUSTOMER LIFETIME VALUE</h2>
                                <h2 className="service-subtitle">
                                    Use AI and ML to Drive Personalised Campaign Engagements
                                </h2>
                                <p className="lh-lg">When you target the right customer, conversation rates are high,
                                    so is retention and customer lifetime value.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="how-it-works" id="how-it-works">
                    <h2 className="section-title">HOW IT WORKS</h2>
                    <h2 className="section-subtitle">Our Approach</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 how-it-works">
                            <div className="how-it-works__image">
                                <img src="assets/images/how-it-works/how-it-works-1.png"
                                    className="rounded-circle img-fluid"
                                    alt="insights" />
                            </div>
                            <h3>Actionable Insights</h3>
                            <p>Our platform unifies your customer data from various sources,
                                enriches with contextual and behavioural
                                attributes to derive insights and recommendations.</p>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 how-it-works">
                            <div className="how-it-works__image">
                                <img src="assets/images/how-it-works/how-it-works-2.png"
                                    className="rounded-circle img-fluid"
                                    alt="connected events" />
                            </div>
                            <h3>Connected Events</h3>
                            <p>We enable you reach your customers across all channels
                                with personalized and consistent messaging at
                                every stage of their journeys.</p>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 how-it-works">
                            <div className="how-it-works__image">
                                <img src="assets/images/how-it-works/how-it-works-3.png"
                                    className="rounded-circle img-fluid"
                                    alt="customer success" />
                            </div>
                            <h3>Customer Success</h3>
                            <p>We provide dedicated assistance that informs
                                your marketing strategy, and support you every step
                                of the way to ensure your business goals are met.</p>
                        </div>
                    </div>
                </div>

                <section className="case-studies-section" id="case-studies-section">
                    <h2 className="section-title">Case Study</h2>
                    <h2 className="section-subtitle">Our Latest Case Studies</h2>

                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="col-lg-3 col-md-4 col-md-6">
                                    <div className="card case-studies-card" >
                                        <a href="/" className="case-studies-card-image">
                                            <img src="assets/images/case-studies/arm-1.jpg" className="card-img-top" alt="arm" />
                                        </a>
                                        <div className="card-body">
                                            <a href="/" className="case-studies-card-title">Driving Account Funding for ARM's PayDay Investor</a>
                                            <p className="case-studies-card-text">FSI</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-lg-3 col-md-4 col-md-6">
                                    <div className="card case-studies-card" >
                                        <a href="/" className="case-studies-card-image">
                                            <img src="assets/images/case-studies/adrenaline.jpg" className="card-img-top" alt="mtn-adrenaline" />
                                        </a>
                                        <div className="card-body">
                                            <a href="/" className="case-studies-card-title">Driving Account Funding for ARM's PayDay Investor</a>
                                            <p className="case-studies-card-text">FSI</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-lg-3 col-md-4 col-md-6">
                                    <div className="card case-studies-card" >
                                        <a href="/" className="case-studies-card-image">
                                            <img src="assets/images/case-studies/fcmb.jpg" className="card-img-top" alt="fcmb" />
                                        </a>
                                        <div className="card-body">
                                            <a href="/" className="case-studies-card-title">Driving Account Funding for ARM's PayDay Investor</a>
                                            <p className="case-studies-card-text">FSI</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-lg-3 col-md-4 col-md-6">
                                    <div className="card case-studies-card" >
                                        <a href="/" className="case-studies-card-image">
                                            <img src="assets/images/case-studies/close-up-make-over-1.jpg" className="card-img-top" alt="close-up" />
                                        </a>
                                        <div className="card-body">
                                            <a href="/" className="case-studies-card-title">Driving Account Funding for ARM's PayDay Investor</a>
                                            <p className="case-studies-card-text">FSI</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-lg-3 col-md-4 col-md-6">
                                    <div className="card case-studies-card" >
                                        <a href="/" className="case-studies-card-image">
                                            <img src="assets/images/case-studies/close-up-make-over-1.jpg" className="card-img-top" alt="close-up" />
                                        </a>
                                        <div className="card-body">
                                            <a href="/" className="case-studies-card-title">Driving Account Funding for ARM's PayDay Investor</a>
                                            <p className="case-studies-card-text">FSI</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-lg-3 col-md-4 col-md-6">
                                    <div className="card case-studies-card" >
                                        <a href="/" className="case-studies-card-image">
                                            <img src="assets/images/case-studies/alat.jpg"
                                                className="card-img-top" alt="alat" />
                                        </a>
                                        <div className="card-body">
                                            <a href="/" className="case-studies-card-title">Driving Account Funding for ARM's PayDay Investor</a>
                                            <p className="case-studies-card-text">FSI</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-lg-3 col-md-4 col-md-6">
                                    <div className="card case-studies-card" >
                                        <a href="/" className="case-studies-card-image">
                                            <img src="assets/images/case-studies/pepsodent-1.jpg"
                                                className="card-img-top" alt="pepsodent-1" />
                                        </a>
                                        <div className="card-body">
                                            <a href="/" className="case-studies-card-title">Driving Account Funding for ARM's PayDay Investor</a>
                                            <p className="case-studies-card-text">FSI</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>

                <section id="top-brands" className="top-brands">
                    <h2 className="section-title">CLIENTS AND PATNERS</h2>
                    <h2 className="section-subtitle">Trusted by Today's Top Brands</h2>
                    <div>
                        
                        <Carousel
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}
                        >

                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>
                    </div>

                </section>

            </div>

        );
    }

}

export default Home;