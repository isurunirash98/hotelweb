import React from "react";
import "./homepage.css";
import Navbar from "../Navbar/navbar";
import SearchBar from "../../components/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/footer";

import image1 from "../Images/image1.png";
import image2 from "../Images/image2.png";
import image3 from "../Images/image3.png";
import image4 from "../Images/image4.png";
import image5 from "../Images/image5.png";
import image6 from "../Images/image6.png";
import image7 from "../Images/image7.png";
import image8 from "../Images/image8.png";
import image9 from "../Images/image9.png";

function Homepage() {
  return (
    <section>
      <Navbar />
      <div className="body">
        <div className="landingPage">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              <img className="image1" src={image1} alt="image1" />
            </div>

            <div style={{ flex: 1 }}>
              <div className="firstcontent">
                Unwind The <br></br> Pearl Of Luxury <br></br> At Sea Pearl.
              </div>
              <div className="text">
                Cras eget velit magna. Vivamus vitae faucibus velit. Sed nunc
                nibh <br></br>
                including relevant keywords Vivamus vitae faucibus.
              </div>

              <div className="container">
                <div className="row1">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="more">Discover More</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row2">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <button className="button">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="image2" src={image2} alt="image2" />
                <div className="blackText">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices <br></br> posuere cubilia curae.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="secondContent">
          <div className="topic2">
            Dsicover a world of luxury leisure and nature
          </div>
          <div className="topic2Content">
            The one & only five star resort in the Sylret region of <br></br>{" "}
            romania. Equipped with all moders state of the <br></br> art
            amenities and facilities.
          </div>
        </div>

        {/* subContent1 */}
        <div className="subContent1">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              <img className="image4" src={image4} alt="image4" />
            </div>

            <div style={{ flex: 1 }}>
              <div className="subContent1Topic1">
                This resort is the true combination of ultimate luxury, gracious
                hospitality<br></br> and admirable greenery.
              </div>
              <div className="subContent1-text">
                <p>
                  Cras eget velit magna. Vivamus vitae faucibus velit. Sed nunc
                  nibh, <br></br> blandit a lobortis a, tempus sed turpis. In
                  posuere fermentum torto <br></br>eget vestibulum ligula
                  fringilla nec. Suspendisse potenti.{" "}
                </p>
              </div>

              <div className="container">
                <div className="row1">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="subContent1-more">Discover More</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row2">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <button className="subContent1-button">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* subContent2 */}
        <div className="subContent2">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              <div className="subContent1Topic2">
                This resort is the true combination of ultimate luxury, gracious
                hospitality<br></br> and admirable greenery.
              </div>
              <div className="subContent2-text">
                <p>
                  Cras eget velit magna. Vivamus vitae faucibus velit. Sed nunc
                  nibh, <br></br> blandit a lobortis a, tempus sed turpis. In
                  posuere fermentum torto <br></br>eget vestibulum ligula
                  fringilla nec. Suspendisse potenti.{" "}
                </p>
              </div>

              <div className="container">
                <div className="row1">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="subContent2-more">Discover More</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row2">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <button className="subContent2-button">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <img className="image3" src={image3} alt="image3" />
            </div>
          </div>
        </div>

        {/* search option and BG image */}
        <div className="search">
          <img className="image5" src={image5} alt="image5" />

          <div class="overlay">
            <div className="search-topic">
              Discover world tour with Experts!
            </div>
            <div className="search-content">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              Pellentesque vitae eros justo. Integer a nisi justo<br></br>
              posuere cubilia luctus et ultrices curae; Donec aliquet elit non
              scelerisque eleifend. <br></br> Pellentesque tincidunt sed justo
              sit amet semper.{" "}
            </div>
            <div className="searchbox">
              {" "}
              <SearchBar />{" "}
            </div>
          </div>
        </div>

        {/* cards section */}
        <div className="cards">
          <div className="cardTopic">
            Sana Yobaz Derler <br></br> Boyle Olmaz Derler
          </div>

          <div class="card-container2">
            <div class="cardList">
              <div class="card-image">
                <img className="image6" src={image6} alt="image6" />
              </div>
              <div class="card-content">
                <h2 class="card-title">Meeting Room</h2>
                <p class="card-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum ante ipsum primis in
                </p>
              </div>
            </div>

            <div class="cardList">
              <div class="card-image">
                <img className="image7" src={image7} alt="image7" />
              </div>
              <div class="card-content">
                <h2 class="card-title">Dining Area</h2>
                <p class="card-description">
                  Nulla quis sapien euismod, hendrerit sapien sed, eleifend
                  elit. Maecenas non interdum lorem.
                </p>
              </div>
            </div>

            <div class="cardList">
              <div class="card-image">
                <img className="image8" src={image8} alt="image8" />
              </div>
              <div class="card-content">
                <h2 class="card-title">Spa Center</h2>
                <p class="card-description">
                  Sed at arcu vel odio molestie ullamcorper. Suspendisse sit
                  amet arcu.
                </p>
              </div>
            </div>

            <div class="cardList">
              <div class="card-image">
                <img className="image9" src={image9} alt="image9" />
              </div>
              <div class="card-content">
                <h2 class="card-title">Free Area</h2>
                <p class="card-description">
                  In quis sapien vel erat blandit ornare. Nullam eu nunc vel
                  nunc posuere malesuada.
                </p>
              </div>
            </div>
          </div>

          <div className="row1">
            <div className="col-sm-6">
              <div className="card-body">
                <div className="more-cards">Discover More</div>
              </div>
            </div>
          </div>

          <div className="row2">
            <div className="col-sm-6">
              <div className="card-body">
                <button className="button-cards">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="moreDetails">
          <div className="row-moreDetails">
            <div className="col-moreDetails">
              <div className="moreDetails-main-topic">Office</div>
              <div className="moreDetails-sub1">Canada</div>
              <div className="moreDetails-sub2">
                123 Main St <br></br>Ontario Canada
              </div>

              <div className="moreDetails-sub3">India</div>
              <div className="moreDetails-sub32">
                No 11 Gandhir lil <br></br>Lajpat Nagar
              </div>
            </div>

            <div className="col-moreDetails">
              <div className="moreDetails-main-topic">Business</div>
              <div className="moreDetails-Business-country">Canada</div>
              <div className="moreDetails-Business-mail">
                deen2kjeen@gmail.com
              </div>
              <div className="moreDetails-Business-country2">India</div>
              <div className="moreDetails-Business-mail">
                nien2kjeen@gmail.com
              </div>
              <div className="moreDetails-Business-country2">China</div>
              <div className="moreDetails-Business-mail">
                sieen2kjeen@gmail.com
              </div>
            </div>

            <div className="col-moreDetails">
              <div className="moreDetails-main-topic">Say Hi</div>
              <div className="moreDetails-contact">Contact Us</div>
              <div className="moreDetails-mail">peen2kjeen@gmail.com</div>
              <div className="moreDetails-apply">Apply Now</div>
              <div className="moreDetails-mail">jieten2kjeen@gmail.com</div>
            </div>
            <div className="col-moreDetails4">
              <div className="moreDetails-main-topic2">Contact Form</div>

              <div className="moreDetails-main-topic2-content">
                Reach out <br></br> to us.
              </div>

              <div className="card-container4">
                <div class="row-reach">
                  <div class="column-reach1">
                    <div className="reach">Subscribe to newsletter</div>
                  </div>
                  <div class="column-reach">
                    <button className="reach-button">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Homepage;
