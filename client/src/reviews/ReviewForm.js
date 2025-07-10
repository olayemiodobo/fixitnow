import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ReviewForm() {
  const { artisanId } = useParams();
  const navigate = useNavigate();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [tip, setTip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("artisanReviews")) || {};
    const reviews = existing[artisanId] || [];

    const newReview = {
      rating: parseInt(rating),
      comment,
      tip: tip ? parseInt(tip) : 0,
      timestamp: new Date().toISOString()
    };

    const updated = {
      ...existing,
      [artisanId]: [newReview, ...reviews]
    };

    localStorage.setItem("artisanReviews", JSON.stringify(updated));
    alert("REVIEW SUBMITTED!");

    navigate(`/artisan/${artisanId}`);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <h2>📝 Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Rating (1-5): <br />
          <input type="number" value={rating} min="1" max="5" onChange={e => setRating(e.target.value)} required />
        </label>
        <br /><br />
        <label>
          Comment: <br />
          <textarea value={comment} onChange={e => setComment(e.target.value)} required rows={4} />
        </label>
        <br /><br />
        <label>
          Tip (₦): <br />
          <input type="number" value={tip} onChange={e => setTip(e.target.value)} />
        </label>
        <br /><br />
        <button type="submit" style={{ padding: '0.5rem 1rem', background: '#28a745', color: '#fff' }}>
          ✅ Submit Review
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
