import PageHamanns from "../pages/PageHamanns";
import PageIllustrations from "../pages/PageIllustrations";
import PageMedova from "../pages/PageMedova";
import PageTanken from "../pages/PageTanken";



export default function Modal({ isOpen, onClose, content }) {
  function preventScroll(event) {
    event.preventDefault();
  }

  if (isOpen) {
    document.body.style.overflow = 'hidden';
    document.body.addEventListener('touchmove', preventScroll, { passive: false });
  } else {
    document.body.style.overflow = 'auto';
    document.body.removeEventListener('touchmove', preventScroll, { passive: false });
  }

  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="title-bar">
                <div className="close-circle" onClick={onClose}><span className="close" >&times;</span></div>
            </div>
            <div className="modal-content">
                {content === "PageTanken" ? <PageTanken /> : content === "PageMedova" ? <PageMedova /> : 
                content === "PageHamanns" ? <PageHamanns /> : content === "PageIllustrations" ? <PageIllustrations/> : "Ukendt side"}
            </div>
        </div>
    </div>
  );
}

