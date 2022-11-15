import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="main-header-rect"></div>
        <div className="header-rect">
          <h1>DONATAS POCIUS</h1>
          <p className="black-background">PROGRAMMER</p>
        </div>
      </header>
      <main>
        <div className="main-grid">
          <section className="about-me">
            <h2 className="h2-header">About me</h2>
            <div className="horizontal-break">
              <div className="start"></div>
              <div className="end"></div>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              nisi ea distinctio soluta dicta. Quod alias repudiandae, dolore et
              eaque quaerat facere corporis aspernatur sed autem ipsa cum saepe
              ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              ex ducimus incidunt quia debitis molestiae, cumque quis, ad
              excepturi quas rerum magnam aut tempora accusantium exercitationem
              dicta natus aperiam eligendi. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Asperiores amet architecto fugit
              deserunt est possimus voluptatem eius praesentium fugiat dolore
              dolor repellat, quo optio illum corrupti, libero repudiandae
              perferendis eaque.
            </p>
          </section>
          <section className="links">
            <h2 className="h2-header">Links</h2>
            <div className="horizontal-break">
              <div className="start"></div>
              <div className="end"></div>
            </div>
            <ul>
              <li>
                <a href="https://www.linkedin.com">
                  <img
                    width="30px"
                    src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
                    alt="linkedin icon"
                  />
                  LINKEDIN/username
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <img
                    width="30px"
                    src="https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg"
                    alt="twitter icon"
                  />
                  TWITTER/@user-handle
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com">
                  <img
                    width="30px"
                    src="https://icons-for-free.com/download-icon-part+1+github-1320568339880199515_512.png"
                    alt="github icon"
                  />
                  GITHUB/username
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com">
                  <img
                    width="30px"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIt-9rK_dWveoRCx5vChPhQh7h-Khidi2Txc1naVdnV4Gc_xXr41kp2pcwfaun5VjkKsQ&usqp=CAU"
                    alt="linkedin icon"
                  />
                  BLOG/blog-name
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="h2-header">Education</h2>
            <div className="horizontal-break">
              <div className="start"></div>
              <div className="end"></div>
            </div>
            <ul className="edu-list">
              <li>SCHOOL NAME</li>
              <li>2009-2013</li>
              <li>Degree</li>
            </ul>
            <div className="end short-break"></div>
            <ul className="edu-list">
              <li>SCHOOL NAME</li>
              <li>2009-2013</li>
              <li>Degree</li>
            </ul>
          </section>
          <section>
            <h2 className="h2-header">Personal skills</h2>
            <div className="horizontal-break">
              <div className="start"></div>
              <div className="end"></div>
            </div>
            <ul>
              <li>
                <span className="li-background green">TEAMWORK</span>
              </li>
              <li>
                <span className="li-background yellow">COMMUNICATION</span>
              </li>
              <li>
                <span className="li-background brown">ORGNIZATION</span>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="h2-header">Technical skills</h2>
            <div className="horizontal-break">
              <div className="start"></div>
              <div className="end"></div>
            </div>
            <ul>
              <li>
                <span className="li-background green">HTML</span>
              </li>
              <li>
                <span className="li-background green">CSS/SCSS</span>
              </li>
              <li>
                <span className="li-background yellow">JAVASCRIPT</span>
              </li>
              <li>
                <span className="li-background yellow">REACT.JS</span>
              </li>
            </ul>
          </section>
        </div>
        <section className="work-exp">
          <h2 className="h2-header">WORK EXPERIENCE</h2>
          <div className="horizontal-break">
            <div className="start"></div>
            <div className="end"></div>
          </div>
          <div className="work-exp-job-list">
            <div className="work-exp-job border-right">
              <h3 className="job-subheading">JOB POSITION</h3>
              <p className="job-subheading">Company</p>
              <p className="job-subheading">2018-present</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus
                eleifend diam vel tempor lacinia. Suspendisse non augue.
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet, conse</li>
                <li>onsectetur adipiscing elit.</li>
              </ul>
            </div>
            <div className="work-exp-job border-right">
              <h3 className="job-subheading">JOB POSITION</h3>
              <p className="job-subheading">Company</p>
              <p className="job-subheading">2015-2018-present</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus
                eleifend diam vel tempor lacinia. Suspendisse non augue.
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet, conse</li>
                <li>onsectetur adipiscing elit.</li>
              </ul>
            </div>
            <div className="work-exp-job">
              <h3 className="job-subheading">JOB POSITION</h3>
              <p className="job-subheading">Company</p>
              <p className="job-subheading">2010-2015</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus
                eleifend diam vel tempor lacinia. Suspendisse non augue.
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet, conse</li>
                <li>onsectetur adipiscing elit.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <div className="end long"></div>
      <footer className="">
        <section className="">
          <h4 className="black-background">ADDRESS</h4>
          <p>Gatve 5, miestas netoli</p>
          <p>Lietuva</p>
        </section>
        <section className="">
          <h4 className="black-background">CONTACT</h4>
          <p>
            <a href="mailto:laa@gaa.com">mail: laa@gaa.com</a>
          </p>
          <p>
            <a href="tel:123-456-789">123-456-789</a>
          </p>
        </section>
        <section className="">
          <h4 className="black-background">SOCIAL</h4>
          <p>
            <a href="https:www.twitter.com">Twitter</a>
          </p>
          <p>
            <a href="https:www.linkedin.com">LinkedIn</a>
          </p>
        </section>
      </footer>
    </div>
  );
}

export default App;
