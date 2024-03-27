import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../App.css"; // Import the CSS file for styling
import testing from "../assets/testing.png";
import retesting from "../assets/retesting.png";
import PDT from "../assets/PDT.png";
import New_member from "../assets/New_Members.png";
// import Senior_release from "../assets/Senior_released.png";
// import TeamLead_assign from "../assets/TeamLead_assign.png";
// import NewProgramManager from "../assets/NewProgramManager.png";
// import OldProgramManager from "../assets/vedant_Sir.png";
// import testcase from "../assets/test.png";
// import test from "../assets/testcase2.png";
// import testcase2 from "../assets/testcase3.png";
import testcase3 from "../assets/testcase4.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Activity = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Specify the animation duration
      once: false, // Set to true to trigger the animation only once
    });
  }, []);
  return (
    <div>
      <Container>
        <Container className="activity-page">
          <center className="team-activity">
            <h2 className="activity">Team Activites Performed</h2>
          </center>
          <Row>
            <Col md={6} data-aos="fade-right">
              <img
                className="left-to-right img-fluid"
                src={testing}
                alt="Left Image"
                width={470}
              />
            </Col>
            <Col md={6}>
              <div>
                <h3 className="info-align">Testing</h3>
                <p>
                  We have performed testing for <b>MP&apos;s Corner</b>,{" "}
                  <b>Nari Shakti</b> as well as <b>Digital India</b> by using
                  Android, iOS, Windows and Mac
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <div>
                <h3 className="info-align">Retesting</h3>
                <p>
                  We have performed retesting for the raised bugs after
                  fixation.
                </p>
              </div>
            </Col>
            <Col md={6} data-aos="fade-left">
              <img
                className="right-to-left img-fluid"
                src={retesting}
                alt="Right Image"
              />
            </Col>
          </Row>

          {/* Section 3 */}
          <Row>
            <Col md={6} data-aos="fade-right">
              <img
                className="left-to-right img-fluid"
                src={PDT}
                alt="Section 3 Image"
              />
            </Col>
            <Col md={6}>
              <div>
                <h3 className="info-align">
                  PDT (Post Deployment Testing) for MP&apos;s Corner
                </h3>
                <p>
                  First pdt for whole team without Seniors<br></br>
                  1. Sprint X &#40;<b>Citizen View</b>&#41; was live<br></br>
                  2. Feature Testing<br></br>
                  3. All the bugs were retested<br></br>
                </p>
              </div>
              
            </Col>
          </Row>

          {/* Section 4 */}
          <Row>
            <Col md={6}>
              <div>
                <h3 className="info-align">TestCase Maintainence</h3>
                <p>
                  1. Merging of Testcases<br></br>
                  2. Testcase Execution<br></br>
                  3. New Testcases were uploaded<br></br>
                  4. Updated the TestCases as per the New product feature
                </p>
              </div>
            </Col>
            <Col md={6} data-aos="fade-left">
              <img
                className="right-to-left img-fluid"
                src={testcase3}
                alt="Section 4 Image"
                width={400}
              />
            </Col>
          </Row>

          {/* Section 5 */}
          <Row>
            <Col md={6} data-aos="fade-right">
              <img
                className="left-to-right img-fluid"
                src={New_member}
                alt="Section 5 Image"
              />
            </Col>
            <Col md={6}>
              <div>
                <h3 className="info-align">
                KT to New Members
                </h3>
                <p>
                New members are added to the team and provided the
                  knowledge Transfer to get going with the team
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Activity;
