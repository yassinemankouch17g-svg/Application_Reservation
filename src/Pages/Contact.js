import { useState, useEffect } from "react";
import "../assets/css/Contact.css";
import { v4 as uuidv4 } from "uuid";

export default function Contact() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [nombre, setNombre] = useState(1);
  const [message, setMessage] = useState("");
  const [reservation, setReservation] = useState([]);
  const [messageVR, setMessageVR] = useState("");

  //  Charger les réservations depuis localStorage au montage du composant
  useEffect(() => {
    const stored = localStorage.getItem("reservations");
    if (stored) {
      setReservation(JSON.parse(stored));
    }
  }, []);

  //  Sauvegarder dans localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservation));
  }, [reservation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombreInt = parseInt(nombre, 10);

    if (
      !nom.trim() ||
      !email.trim() ||
      !date.trim() ||
      !heure.trim() ||
      nombreInt > 10 ||
      nombreInt < 1
    ) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const alreadyReserved = reservation.find(
      (res) =>
        res.date === date &&
        res.heure === heure &&
        (res.nom === nom || res.email === email)
    );

    if (alreadyReserved) {
      setMessageVR(`${nom} vous avez déjà réservé pour cette date et heure !`);
      return;
    }

    const newReserv = {
      id: uuidv4(),
      nom,
      email,
      date,
      heure,
      nombre: nombreInt,
      message,
    };

    setReservation((prev) => [...prev, newReserv]);
    setMessageVR(
      `Merci ${nom}, votre réservation pour le ${date} à ${heure} (${nombre} personnes) a bien été enregistrée.`
    );

    setNom("");
    setEmail("");
    setDate("");
    setHeure("");
    setNombre(1);
    setMessage("");
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="nom">Nom:</label>
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/*  NOUVEL INPUT HEURE */}
        <label htmlFor="heure">Heure:</label>
        <input
          type="time"
          id="heure"
          value={heure}
          onChange={(e) => setHeure(e.target.value)}
        />

        <label htmlFor="nombre">Nombre de personnes:</label>
        <input
          type="number"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tapez quelque chose..."
          rows={4}
        />

        <button type="submit">Envoyer</button>
      </form>

      <p style={{ color: "white" }}>
        <b>{messageVR}</b>
      </p>
    </div>
  );
}
