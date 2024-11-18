// import React from 'react';

function RatingCard() {
    return (
      <div style={styles.card}>
        <div style={styles.ratingSection}>
          <h1 style={styles.ratingValue}>4.2<span style={styles.outOf}>/5</span></h1>
          <div style={styles.stars}>
            <span>⭐⭐⭐⭐⭐</span> 
          </div>
          <p style={styles.averageRating}>Average Rating</p>
          <p style={styles.totalReviews}>(20 Total Reviews)</p>
        </div>
        <div style={styles.barsSection}>
          {[
            { stars: 5, width: '80%' },
            { stars: 4, width: '60%' },
            { stars: 3, width: '20%' },
            { stars: 2, width: '10%' },
            { stars: 1, width: '5%' },
          ].map((bar, index) => (
            <div key={index} style={styles.barRow}>
              <div style={styles.starLabel}>{bar.stars} ★</div>
              <div style={styles.barBackground}>
                <div
                  style={{
                    ...styles.barFill,
                    width: bar.width,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <p style={styles.footer}>See how ratings are calculated</p>
      </div>
    );
  }
  
  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      // maxWidth: "900px",
      width:"300px",
      height: "400px",
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },
    ratingSection: {
      marginBottom: '20px',
    },
    ratingValue: {
      fontSize: '36px',
      margin: 0,
      backgroundColor:"#4CAF50"
    },
    outOf: {
      fontSize: '18px',
      color: '#666',
    },
    stars: {
      margin: '10px 0',
      fontSize: '20px',
      color: '#4caf50',
    },
    averageRating: {
      fontSize: '16px',
      fontWeight: 'bold',
      margin: '5px 0',
    },
    totalReviews: {
      fontSize: '14px',
      color: '#888',
    },
    barsSection: {
      textAlign: 'left',
    },
    barRow: {
      display: 'flex',
      alignItems: 'center',
      margin: '5px 0',
    },
    starLabel: {
      width: '40px',
      textAlign: 'right',
      fontSize: '14px',
      marginRight: '10px',
      color: '#666',
    },
    barBackground: {
      background: '#f0f0f0',
      borderRadius: '5px',
      flexGrow: 1,
      height: '8px',
      overflow: 'hidden',
      position: 'relative',
    },
    barFill: {
      background: '#2B79D4',
      height: '100%',
      borderRadius: '5px',
    },
    footer: {
      fontSize: '12px',
      color: '#3f51b5',
      marginTop: '20px',
      cursor: 'pointer',
    },
  };
  
  export default RatingCard;
  