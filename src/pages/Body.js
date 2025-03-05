import React from 'react';
import './style/stylebody.css';
import Typical from 'react-typical';

function Body() {
    return (
        <section id="hero" className="hero section">
            <div className="container scroll-up" data-aos="fade-in">
                <div className="row gy-5 align-items-center" data-aos="fade-in">
                    <div className="col-lg-8 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                        <h2 className="fw-bold display-4" style={{ marginTop: "15px" }}>
                            <Typical
                                steps={[
                                    'Votre sourire est notre Priorité!', 2000,
                                    'Nous prenons soin de vous.', 2000
                                ]}
                                wrapper="span"
                                loop={Infinity}
                            />
                        </h2>
                        <hr className="text-white me-auto" style={{ width: "100%", maxWidth: "300px", paddingBottom: "20px" }} />
                        <p className='fw-bold lead'>Orthodontie et stomatologie pour les enfants, <br />les adolescents et les adultes.</p>
                    </div>
                </div>
                <br />
                <div className="row justify-content-center">
                    <div className="col-12 col-md-auto mb-2 mb-md-0">
                        <a href="" className="btn btn-danger w-100 fw-bold py-3">
                            <i className="fas fa-calendar-alt me-2"></i> PRENDRE RDV
                        </a>
                    </div>
                    <div className="col-12 col-md-auto">
                        <a href="" className="btn btn-primary w-100 fw-bold py-3">
                            <i className="fas fa-phone-alt me-2"></i> CONTACT
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Body;