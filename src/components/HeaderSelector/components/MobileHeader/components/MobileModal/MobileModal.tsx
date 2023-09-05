import './MobileModal.scss';
import { ModalContent } from '../../../GoodsModal/ModalContent/ModalContent';
import { NavModalContent } from './NavModalContent/NavModalContent';
import Modal from 'react-modal';
import React from 'react';

export interface MenuModalProps {
  isNavOpen: boolean;
  isGoodsModalOpen: boolean;
  onRequestClose: () => void;
  openGoodsModal: () => void;
}

Modal.setAppElement('#root');

export const MobileModal = ({ isNavOpen, isGoodsModalOpen, onRequestClose, openGoodsModal }: MenuModalProps) => {
  return (
    <Modal
      isOpen={isNavOpen || isGoodsModalOpen}
      onRequestClose={onRequestClose}
      overlayClassName="mobile-modal-overlay"
      className="mobile-modal"
      closeTimeoutMS={700}
    >
      {isNavOpen && <NavModalContent closeModal={onRequestClose} openGoodsModal={openGoodsModal} />}
      {isGoodsModalOpen && <ModalContent closeModal={onRequestClose} />}
    </Modal>
  );
};
