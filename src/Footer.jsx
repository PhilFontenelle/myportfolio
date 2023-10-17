import React from "react";


function Footer() {
    let date = new Date();
    const year = date.getFullYear()

    return (
        <div >

            <svg

                style={{
                    marginBottom: '40%',
                    width: '100%',
                    position: 'absolute',
                    zIndex: '-3'
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320">
                <defs
                >
                    <linearGradient id="grad1" >
                        <stop offset="0%"
                            style={{
                                stopColor: ('#a7e9faed'),
                                stopOpacity: 1
                            }} />
                        <stop offset="100%"
                            style={{
                                stopColor: ('#0d98ba'),
                                stopOpacity: 1
                            }} />
                    </linearGradient>
                </defs>

                <path fill="url(#grad1)"
                    fillOpacity="1"

                    d="M0,256L48,261.3C96,267,192,277,288,245.3C384,213,480,139,576,112C672,85,768,107,864,138.7C960,171,1056,213,1152,197.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
                <p id="footer"> <em><b>Copyright {'\u00A9'} {year} Philbert</b></em> </p>

            </svg>
        </div>
    )
}



export default Footer;