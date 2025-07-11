// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// function ReviewPage() {
//   const { artisanId } = useParams();
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     if (!rating) {
//       alert("Please select a rating!");
//       return;
//     }

//     const reviews = JSON.parse(localStorage.getItem("artisanReviews")) || [];
//     reviews.push({
//       artisanId: parseInt(artisanId),
//       rating,
//       comment,
//       timestamp: new Date().toISOString()
//     });
//     localStorage.setItem("artisanReviews", JSON.stringify(reviews));
//     alert("REVIEW SUBMITTED!");
//     navigate('/');
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
//       <h2>⭐ Leave a Review</h2>
//       <p>How was your experience with this artisan?</p>

//       <div>
//         {[1, 2, 3, 4, 5].map((star) => (
//           <button
//             key={star}
//             onClick={() => setRating(star)}
//             style={{
//               fontSize: '2rem',
//               background: 'none',
//               border: 'none',
//               color: star <= rating ? '#FFD700' : '#ccc',
//               cursor: 'pointer'
//             }}
//           >
//             ★
//           </button>
//         ))}
//       </div>

//       <textarea
//         placeholder="Add a comment (optional)"
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//         rows={4}
//         style={{ width: '100%', marginTop: '1rem', padding: '0.5rem' }}
//       />

//       <br />
//       <button
//         onClick={handleSubmit}
//         style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#28a745', color: '#fff', border: 'none', borderRadius: '6px' }}
//       >
//         Submit Review
//       </button>
//     </div>
//   );
// }

// export default ReviewPage;

import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

function ReviewPage() {
  const { artisanId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const searchParams = new URLSearchParams(location.search);
  const timestamp = searchParams.get('ts'); // From ?ts=... in JobTracker

  const handleSubmit = () => {
    if (!rating) {
      alert("Please select a rating!");
      return;
    }

    const reviews = JSON.parse(localStorage.getItem("artisanReviews")) || [];

    // Prevent duplicate review for same job
    const alreadyReviewed = reviews.find(
      r => r.artisanId === parseInt(artisanId) && r.timestamp === timestamp
    );
    if (alreadyReviewed) {
      alert("You've already submitted a review for this job.");
      return;
    }

    reviews.push({
      artisanId: parseInt(artisanId),
      rating,
      comment,
      timestamp, // This links review to job
    });

    localStorage.setItem("artisanReviews", JSON.stringify(reviews));
    alert("REVIEW SUBMITTED!");
    navigate('/ArtisanList'); // Redirect to artisan list after review
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
      <h2>⭐ Leave a Review</h2>
      <p>How was your experience with this artisan?</p>

      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            style={{
              fontSize: '2rem',
              background: 'none',
              border: 'none',
              color: star <= rating ? '#FFD700' : '#ccc',
              cursor: 'pointer'
            }}
          >
            ★
          </button>
        ))}
      </div>

      <textarea
        placeholder="Add a comment (optional)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
        style={{ width: '100%', marginTop: '1rem', padding: '0.5rem' }}
      />

      <br />
      <button
        onClick={handleSubmit}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          background: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '6px'
        }}
      >
        Submit Review
      </button>
    </div>
  );
}

export default ReviewPage;
