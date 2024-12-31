import React from 'react'
import './css/Contact.css'

const Contact = () => {
    return (
        <>
        <div className="contact-us-page-container">

            <div class="contact-us-page my-5">
                <h2 class="text-center">Contact Us</h2>

                <div class="row mb-5">
                    <div class="col-md-6 mx-auto">
                        <h4>Owner Information</h4>
                        <p><strong>Name:</strong> Mr. John Wick</p>
                        <p><strong>Mobile Number 1:</strong> +91 123 456 7890</p>
                        <p><strong>Mobile Number 2:</strong> +91 987 654 3210</p>
                        <p><strong>Email:</strong> <a href="mailto:owner@example.com">owner@example.com</a></p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <form>
                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" rows="4" placeholder="Write your message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Contact
