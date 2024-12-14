import React, { useState, useEffect } from "react";

const ClipList = () => {
  const [clips, setClips] = useState([]);

  // Fetch the JSON data
  useEffect(() => {
    fetch("/MyClip.json")
      .then((response) => response.json())
      .then((data) => setClips(data))
      .catch((error) => console.error("Error fetching clips:", error));
  }, []);

  return (
    <div>
      <h1>My Clips</h1>
      <div className="clip-container">
        {clips.map((clip, index) => (
          <div key={index} className="clip-card">
            <h2>{clip.title}</h2>
            <p>{clip.description}</p>
            <img src={clip.start} alt="Rating" />
            <video controls>
              <source src={clip.source_clip} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClipList;