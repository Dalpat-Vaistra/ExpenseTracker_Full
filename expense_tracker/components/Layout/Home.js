import Link from "next/link";

const HomePage = () => {
  return (
    // <main className="site-wrapper">
    <div className="pt-table">
      <div
        className="pt-tablecell page-home absolute"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <div className="overlay"></div> */}

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
              <div className="page-title home">
                <span className="heading-page">Welcome To Expense Tracker</span>
              </div>
              <div className="hexagon-menu clear">
                <div className="hexagon-item">
                  <div className="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <Link href="/Login">
                    <div className="hex-content">
                      <span className="hex-content-inner">
                        <span className="icon">
                          <i className="fa fa-home"></i>
                        </span>
                        <span className="title">Login</span>
                      </span>
                      <svg
                        viewBox="0 0 173.20508075688772 200"
                        height="200"
                        width="174"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                          fill="#1e2530"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="hexagon-item">
                  <div className="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="hex-item">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <Link href="/Signup">
                    <div className="hex-content">
                      <span className="hex-content-inner">
                        <span className="icon">
                          <i className="fa fa-sign-in" aria-hidden="true"></i>
                        </span>
                        <span className="title">Signup</span>
                      </span>
                      <svg
                        viewBox="0 0 173.20508075688772 200"
                        height="200"
                        width="174"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                          fill="#1e2530"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </main>
  );
};

export default HomePage;
