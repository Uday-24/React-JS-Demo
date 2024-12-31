import React from 'react'
import './css/About.css'
const About = () => {
  return (
    <>
      <div className="about-us-page container my-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>About Us</h1>
            <p className="lead">
              We are a team of passionate individuals dedicated to providing the best service. Our mission is to make a positive impact and offer high-quality products to our customers.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h3>Our Mission</h3>
            <p>
              Our mission is to deliver exceptional products that meet the needs of our customers. We are committed to quality, customer satisfaction, and continuous improvement.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Our Vision</h3>
            <p>
              Our vision is to become a leading brand known for innovation, trust, and quality. We aim to expand our reach and positively impact communities worldwide.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <h3>Our Values</h3>
            <ul>
              <li>Integrity: We believe in honesty and transparency in all our dealings.</li>
              <li>Customer-Centric: Our customers' satisfaction is at the core of everything we do.</li>
              <li>Innovation: We are always looking for new ways to improve and stay ahead.</li>
              <li>Collaboration: We believe in working together to achieve common goals.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Our Team</h3>
            <p>
              Our team consists of talented individuals with diverse backgrounds, all united by a common goal of delivering excellence. From our designers to our customer support team, everyone plays a vital role in our success.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <h3>Why Choose Us?</h3>
            <p>
              We stand out because of our commitment to quality, our customer-first approach, and our dedication to sustainability. We strive to offer products that not only meet but exceed expectations, backed by a team that is always ready to assist you.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <h3>Contact Us</h3>
            <p>
              Have any questions or feedback? We would love to hear from you! Get in touch with us through our contact page, and our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default About
