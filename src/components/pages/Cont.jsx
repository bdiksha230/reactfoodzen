import React from 'react'

const Cont = () => {
    return (
        <div>
            <section className="p-0 offer_section_banner">
                <img src="assets/img/banner/contactus.jpg" alt="banner" />
            </section>
            <section className="form__section">
                <div className="contactform">
                    <form method='post' action="mongodb://localhost:27027/foodzen">
                        <div className="mb-3">
                            <label for="exampleInputname" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputname" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email  </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputnumber" className="form-label">Number</label>
                            <input type="text" className="form-control" id="exampleInputnumber" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </section>

        </div>
    )
}

export default Cont