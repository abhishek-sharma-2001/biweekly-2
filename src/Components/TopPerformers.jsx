import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Card, Badge } from "react-bootstrap";
import "../App.css";
import first from "../assets/1st.png";
import second from "../assets/2nd.png";
import third from "../assets/3rd.png";
import fourth from "../assets/4th.png";
import fifth from "../assets/5th.png";
import sixth from "../assets/6th.png";



const TopPerformers = () => {
  const [isConfettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    // Stop confetti after 3 seconds
    const timeoutId = setTimeout(() => {
      setConfettiActive(false);
    }, 4000);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  // Your code to fetch top performers data goes here
  const topPerformersData = [
    { rank: 1, name: "S.K Shivam", bugScore: 74, photo: sixth },
    {
      rank: 2,
      name: "Vishnu Menon",
      bugScore: 73,
      photo: third,
    },
    {
      rank: 3,
      name: "Anagha Shinde",
      bugScore: 64,
      photo: fifth,
    },
    {
      rank: 4,
      name: "Anushree Shukla",
      bugScore: 64,
      photo: second,
    },
    {
      rank: 5,
      name: "Kartik Patil",
      bugScore: 38,
      photo: fourth,
    },
  ];
  // const backgroundImage = "url('home-background-biweekly.jpeg')";
  return (
    <div className="top-performers-container">
      <h2 className="title-top-performer">CONGRATULATIONS TO THE TOP 5 BUG HUNTERS</h2>
      {isConfettiActive && <Confetti />}

      <div className="performers-list">
        {topPerformersData.map((performer, index) => (
          <Card key={index} className={`performer-card rank-${performer.rank} shadow` }>
            <Card.Img
              src={performer.photo}
              alt={performer.name}
              className="performer-photo"
            />
            <Card.Body className="color">
              <Badge bg={`rank-${performer.rank}`} className="mb-2">
                Rank {performer.rank}
              </Badge>
              <Card.Title>{performer.name}</Card.Title>
              <Card.Text>Bug Score: {performer.bugScore}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="take-space"></div>
    </div>
  );
};

export default TopPerformers;
