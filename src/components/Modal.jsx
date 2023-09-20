import ContentHamanns from "./ContentHamanns";
import ContentMedova from "./ContentMedova";
import ContentTanken from "./ContentTanken";

export default function Modal({ isOpen, onClose, content }) {



  // Funktion til at forhindre sidegennemgang
  function preventScroll(event) {
    event.preventDefault();
  }

  // Når modalen åbnes, tilføj en eventlistener til body for at forhindre sidegennemgang
  if (isOpen) {
    document.body.style.overflow = 'hidden';
    document.body.addEventListener('touchmove', preventScroll, { passive: false });
  } else {
    // Når modalen lukkes, fjern eventlisteneren og gendan sidegennemgangen
    document.body.style.overflow = 'auto';
    document.body.removeEventListener('touchmove', preventScroll, { passive: false });
  }

  //Hvis isOpen er falsk (modalvinduet er lukket), returnerer komponenten null, hvilket betyder, at intet vil blive renderet. 
  //Dette er en måde at skjule modalvinduet, når det ikke er åbent.
  if (!isOpen) return null;
  
  return (
    //Dette er selve overlay elementet. Med onClick={onClose} sørger jeg for at modalvinduet lukkes, 
    //når der trykkes alle andre steder end selve vinduet.
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="title-bar">
                <span className="close" onClick={onClose}>&times;</span>
            </div>
            <div className="modal-content">
                {content === "ContentTanken" ? <ContentTanken /> : content === "ContentMedova" ? <ContentMedova /> : content === "ContentHamanns" ? <ContentHamanns /> : "Ukendt side"}
            </div>
        </div>
    </div>
  );
}

