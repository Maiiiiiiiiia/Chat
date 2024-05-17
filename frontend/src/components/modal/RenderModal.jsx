import React from "react";
import { useSelector } from 'react-redux';
import getModal from '../modal/index';

const RenderModal = () => {
    const typeModal = useSelector((state) => state.modal.type);
    const itemModal = useSelector((state) => state.modal.item);
    if (typeModal === null) {
      return null;
    }
  
    const Component = getModal(typeModal);
    return <Component item={itemModal} />;
  };

  export default RenderModal;