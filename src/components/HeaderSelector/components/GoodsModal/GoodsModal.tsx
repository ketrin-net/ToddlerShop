import './GoodsModal.scss';
import { ModalContent } from './ModalContent/ModalContent';
import Modal from 'react-modal';
import React from 'react';

export interface MenuModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export const GoodsModal = ({ isOpen, onRequestClose }: MenuModalProps) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="modal-overlay" className="modal">
      <ModalContent closeModal={onRequestClose} />
    </Modal>
  );
};
