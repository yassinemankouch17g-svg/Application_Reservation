import gallery1 from "../assets/img/gallery/gallery-1.jpg";
import gallery2 from "../assets/img/gallery/gallery-2.jpg";
import gallery3 from "../assets/img/gallery/gallery-3.jpg";
import gallery4 from "../assets/img/gallery/gallery-4.jpg";
import gallery5 from "../assets/img/gallery/gallery-5.jpg";
import gallery6 from "../assets/img/gallery/gallery-6.jpg";
import gallery7 from "../assets/img/gallery/gallery-7.jpg";
import gallery8 from "../assets/img/gallery/gallery-8.jpg";

import "../assets/css/gallery.css";

export default function Gallery() {
  const gall = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
  ];

  return (
    <div className="gallery-container">
      <h1>Photos</h1>
      <div className="gallery-grid">
        {gall.map((ele, idx) => (
          <div key={idx} className="gallery-item">
            <img src={ele} alt={`Gallery ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
