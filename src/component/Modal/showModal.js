import React from 'react';

import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

const modal = props => {
  const { modal, title } = props;

  return (
    <Modal isOpen={modal}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{props.children}</ModalBody>
      <ModalFooter>
        <b>Disclaimer:</b>Don't take as serious
      </ModalFooter>
    </Modal>
  );
};

export default modal;
