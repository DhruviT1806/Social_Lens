//Priya 
// 9/10/2023
import React, { useState } from "react";
import styles from "@/styles/Dashboard.module.css";
function Feedback() {
  const [rating, setRating] = useState(null);
  const [comments, setComments] = useState("");

  const handleRatingClick = (value) => {
    if (rating === value) {
      // If the same button is clicked again, unselect it
      setRating(null);
    } else {
      // Otherwise, set the rating to the clicked value
      setRating(value);
    }
  };

  const handleSubmit = () => {
    // Process feedback data, e.g., send to a server or store in the state
    console.log("Rating:", rating);
    console.log("Comments:", comments);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
    <div className="d-flex flex-column w-50">
      <div className="card m-3 p-3 border border-danger border-2 w-100 bg-dark custom-width">
          <h1 className="heading mb-2 text-danger">Feedback for SociaLens</h1>

          <div className="modal-body">
            <form>
              <div className="form-group">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="text-white"
                >
                  How likely you would like to recommend us to your friends?
                </label>

                <div className="rating-input-wrapper d-flex justify-content-between mt-2 text-white">
                  {["Very unlikely", "Unlikely", "Neutral", "Likely", "Very likely"].map((label, index) => (
                <button
                        key={index}
                        className={`border rounded px-3 py-2 rating-button ${
                        rating === index + 1 ? "selected" : ""
                        }`}
                        onClick={() => handleRatingClick(index + 1)}>
                {label}
                </button>
  ))}
</div>
</div>

              <div className="form-group mt-3">
                <label htmlFor="comments" className="text-white">
                  Do you have any feedback for us? Please write your comments,
                  concerns or complaints below.
                </label>
                <textarea
                  rows="6"
                  cols="50"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="mb-2 w-100"
                  id="comments"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="mt-3 btn btn-danger"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
