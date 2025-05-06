import React from "react";

const DestinationCard = ({ destination }) => {
  return (
    <div style={styles.card}>
      <img src={destination.image} alt={destination.name} style={styles.image} />
      <h2>{destination.name}</h2>
      <p><strong>Location:</strong> {destination.location}</p>
      <p>{destination.description}</p>
      <p><strong>Price:</strong> {destination.price}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
};

export default DestinationCard;