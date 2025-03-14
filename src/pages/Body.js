import React, { useContext } from 'react';
import './style/stylebody.css';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';
import { AccueilContext } from '../AccueilContext';

function Body() {

    const { titre1, titre2 } = useContext(AccueilContext);
  
    console.log('Titre 1:', titre1); // Vérifiez la valeur de titre1
    console.log('Titre 2:', titre2); // Vérifiez la valeur de titre2
    return (
        <section id="hero" className="hero section" >
        <div className="container scroll-up" data-aos="fade-in">
          <div className="row gy-5 align-items-center" data-aos="fade-in">
            <div className="col-lg-8 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h2 className="fw-bold display-4" style={{ marginTop: "15px" }}>
                <Typical
                  steps={[
                    titre1, 2000,
                    titre2, 2000
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
          <div className="row justify-content-center pt-5">
            <div className="col-12 col-md-auto mb-2 mb-md-0">
              <Link
                target="_blank"
                to="https://www.doctolib.fr/stomatologue/mulhouse/tuncay-sahin/booking/motives?specialityId=25&telehealth=false&placeId=practice-228902&profile_skipped=true&bookingFunnelSource=external_referral"
                className="btn btn-danger w-100 fw-bold py-3">
                <i className="fas fa-calendar-alt me-2"></i> PRENDRE RDV
              </Link>
            </div>
            <div className="col-12 col-md-auto">
              <Link to="/Contact" className="btn btn-primary w-100 fw-bold py-3">
                <i className="fas fa-phone-alt me-2"></i> CONTACT
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Body;