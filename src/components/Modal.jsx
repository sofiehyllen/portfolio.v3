import PageHamanns from "../pages/PageHamanns";
import PageIllustrations from "../pages/PageIllustrations";
import PageMedova from "../pages/PageMedova";
import PageTanken from "../pages/PageTanken";



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
                <div className="close-circle" onClick={onClose}><span className="close" >&times;</span></div>
            </div>
            <div className="modal-content">
                {content === "PageTanken" ? <PageTanken /> : content === "PageMedova" ? <PageMedova /> : 
                content === "PageHamanns" ? <PageHamanns /> : "Ukendt side"}
            </div>
        </div>
    </div>
  );
}

