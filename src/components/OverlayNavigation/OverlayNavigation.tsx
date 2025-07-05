import React from 'react';
import { ActionButton } from '../Button/ActionButton';
import { StrongLinkButton } from '../Button/StrongLinkButton';
import './overlay.scss';

interface OverlayNavigationProps {
    isOpen: boolean
    onClose: () => void
}

const OverlayNavigation: React.FC<OverlayNavigationProps> = ({ onClose, isOpen }) => (
  <div className={`overlay ${isOpen ? 'overlay-open' : ''}`}>
    <ActionButton onClick={onClose} title="&times;"/>  
    <div className="overlay-content">
      <StrongLinkButton onClick={onClose} title="Galeria" to="gallery"/>
      <StrongLinkButton onClick={onClose} title="Kontakt" to="contact"/>
      <StrongLinkButton onClick={onClose} title="Proces Realizacji" to="process"/>
      <StrongLinkButton onClick={onClose} title="Regulamin" to="regulations"/>
      <StrongLinkButton onClick={onClose} title="Neroliving" to="neroliving"/>
    </div>
  </div>
    
);

export default OverlayNavigation;