import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import {FiCheckCircle} from 'react-icons/fi'
import './styles.css';

interface Props {
  message: string;
  show: boolean;
  autoCloseTime?: number;
  onCloseAction?: () => void;
}

const styles = {
  overlay: {
    backgroundColor: '#000000Fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100000000000000,
  },
  content: {
    top: 'inicial',
    left: 'inicial',
    right: 'inicial',
    bottom: 'inicial',
    background: 'none',
    border: 'none',
    zIndex: 100000000000000,
  },
};

const SuccessModal = ({
  message = '',
  show = false,
  autoCloseTime = 0,
  onCloseAction = () => {},
}: Props): JSX.Element => {
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    setClosed(!show);
  }, [show]);

  return (
    <Modal
      isOpen={!closed}
      style={styles}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => {
        onCloseAction();
      }}
    >
      <h1 className="messageText">
        <div className="messageIconContainer">
          <FiCheckCircle size={72}/>
        </div>
        {message}
      </h1>
    </Modal>
  );
};

export default SuccessModal;
