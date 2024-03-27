import { useEffect, useRef } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import Chart from "chart.js/auto";
import regression from "regression";
// import JsonTable from './JsonTable';

// import { read, utils, writeFile } from "xlsx";

const BugChart = () => {
  const pieChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  // const [data, setData] = useState([]);
  // const [jsonData, setJsonData] = useState([]);

  // Read the Excel file
  // const excelFilePath = "../assets/Weekly_Feb.xlsx";

  useEffect(() => {
    // Pie Chart
    const pieChartContext = pieChartRef.current.getContext("2d");
    new Chart(pieChartContext, {
      type: "pie",
      data: {
        labels: ["Blocker", "Critical", "Major", "Normal", "Minor"],
        datasets: [
          {
            data: [3, 17, 35, 57, 27],
            backgroundColor: [
              "#8B0000", // Dark Red
              "#FF0000", // Red
              "#0000FF", // Blue
              "#008000", // Green
              "#FFA500", // Orange
            ],
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Bug Severity Distribution", // Title for the pie chart
          },
        },
      },
    });

    // Bar Chart
    const barChartContext = barChartRef.current.getContext("2d");
    new Chart(barChartContext, {
      type: "bar",
      data: {
        labels: ["20 Feb - 27 Feb", "28 Feb - 5 Mar", "6 Mar - 12 Mar","13 Mar - 19 Mar","20 Mar - 27 Mar"],
        datasets: [
          {
            label: "Bug Count",
            data: [45, 20, 14,29,36],
            backgroundColor: "#00796B",
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Weekly Bug Count", 
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Number of Bugs"
              },
            },
            x: {
              title: {
                display: true,
                text: "Weeks" 
              },
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="bg-img color">
      <Container fluid>
        <center className="performance-chart">
          <h2 className="performance">Performance Chart</h2>
        </center>
        <center>
          <Row className="resize">
            <Col md={6} className="chart-container">
              <div className="chart-background">
                <canvas ref={pieChartRef}></canvas>
              </div>
            </Col>
            <Col md={6} >
              <div className="padding-bottom"><canvas ref={barChartRef}></canvas></div>
                {/* <canvas ref={lineChartRef}></canvas> */} 
            </Col>
          </Row>
        </center>

        <Row className="mt-4 padding-top">
          <Col>
            <center className="bug-score">
              <h2 className="margin">Bug Score</h2>
            </center>
            {/* <CsvTable /> */}
            <center>
              <Table striped bordered hover responsive>
              <thead>
        <tr>
            <th>Domain Name</th>
            <th>Issue Count</th>
            <th>Issue Score</th>
            <th>Blocker</th>
            <th>Critical</th>
            <th>Major</th>
            <th>Normal</th>
            <th>Minor</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Sk.Shivam</td>
            <td>12</td>
            <td>74</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>3</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Vishnu1.Menon</td>
            <td>14</td>
            <td>73</td>
            <td>0</td>
            <td>5</td>
            <td>4</td>
            <td>4</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Anagha.Shinde</td>
            <td>13</td>
            <td>64</td>
            <td>0</td>
            <td>5</td>
            <td>2</td>
            <td>4</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Anushree1.Shukla</td>
            <td>15</td>
            <td>64</td>
            <td>0</td>
            <td>1</td>
            <td>8</td>
            <td>5</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Kartik2.Patil</td>
            <td>9</td>
            <td>57</td>
            <td>1</td>
            <td>3</td>
            <td>4</td>
            <td>1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Sumit3.Patra</td>
            <td>10</td>
            <td>51</td>
            <td>0</td>
            <td>3</td>
            <td>4</td>
            <td>2</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Mrunali.Chalke</td>
            <td>8</td>
            <td>48</td>
            <td>1</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Atharva.Golapkar</td>
            <td>8</td>
            <td>41</td>
            <td>0</td>
            <td>3</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Avinash10.Gupta</td>
            <td>9</td>
            <td>35</td>
            <td>0</td>
            <td>0</td>
            <td>5</td>
            <td>3</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Naman.Malani</td>
            <td>6</td>
            <td>31</td>
            <td>1</td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Harshada.Gawade</td>
            <td>7</td>
            <td>25</td>
            <td>0</td>
            <td>0</td>
            <td>2</td>
            <td>5</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Amreen.Siddiqui</td>
            <td>5</td>
            <td>24</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>2</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Dhiraj.Kunder</td>
            <td>8</td>
            <td>24</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>6</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Anjali.Tank</td>
            <td>6</td>
            <td>23</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>3</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Abhishek113.Sharma</td>
            <td>7</td>
            <td>19</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>4</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Khushi.Nigam</td>
            <td>4</td>
            <td>19</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Akshay.Mule</td>
            <td>3</td>
            <td>15</td>
            <td>0</td>
            <td>0</td>
            <td>3</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Atharv.Deshpande</td>
            <td>5</td>
            <td>15</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>3</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Tanvi.Pathare</td>
            <td>7</td>
            <td>15</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>4</td>
            <td>3</td>
        </tr>
        <tr>
            <td>Amit12.Jha</td>
            <td>6</td>
            <td>14</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>4</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Sanya.Vishwakarma</td>
            <td>6</td>
            <td>14</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>Aniket.Aher</td>
            <td>2</td>
            <td>13</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Piyush9.Pandey</td>
            <td>2</td>
            <td>10</td>
            <td>0</td>
            <td>0</td>
            <td>2</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Kaushik Kumar</td>
            <td>2</td>
            <td>8</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Khushi.Bohre</td>
            <td>1</td>
            <td>8</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Sushant.Yelurkar</td>
            <td>4</td>
            <td>8</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>2</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Tadi.Teja</td>
            <td>1</td>
            <td>8</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Mohit Santosh</td>
            <td>2</td>
            <td>6</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>2</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Prathwikumar.S</td>
            <td>2</td>
            <td>6</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Ashutosh Prasad</td>
            <td>1</td>
            <td>3</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Simran Sulve</td>
            <td>1</td>
            <td>3</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Nancy.Nema</td>
            <td>2</td>
            <td>2</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>2</td>
        </tr>
    </tbody>
              </Table>
            </center>
            {/* <Table className="Table">
            
            </Table> */}
            {/* <JsonTable jsonData={jsonData} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BugChart;
