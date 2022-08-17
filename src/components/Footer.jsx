import React from "react";

function Footer() {

    return (
        <>
            <section className="last">
                <div className="container">
                    <h2 align="center">
                        <a href="/" className="last-heading"> Attention Investors </a>
                    </h2>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h6>Interactive Brokers India Pvt. Ltd.</h6>
                            <br /><br />
                            <p>Is a member of NSE, BSE, SEBI. Regn. No. SEBI Registration No. INZ000217730; NSDL: IN-DP-NSDL-301-2008. CIN-U67120MH2007FTC170004.</p>
                            <p>Registered Office: 502/A, Times Square, Andheri Kurla Road, Andheri East, Mumbai 400059, India.</p>
                            <p>Phone: +91-22-61289888 | Fax: +91-22-61289898.</p>
                            <p>Website: www.interactivebrokers.co.in</p>
                            <br />
                            <p style={{ fontWeight: "bold" }}>Information on Other Interactive Brokers Affiliates</p>
                        </div>
                        <div className="footer-end">
                            <h5 className="last-line">
                                Made with ❤️ by Harshal Dev
                            </h5>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;