import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import getModal from './index';
import { useGetChannelsQuery } from '../../slices/channelsSlice';
import { closeModal } from '../../slices/modalSlice';

const RenderModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data: channels = [] } = useGetChannelsQuery();

  const typeModal = useSelector((state) => state.modal.type);
  const itemModal = useSelector((state) => state.modal.item);
  // const { typeModal, itemModal } = useSelector((state) => state.modal); // <---- так ошибка

  if (typeModal === null) {
    return null;
  }
  const handleCloseModal = () => dispatch(closeModal());

  const validationSchema = yup.object().shape({
    channelName: yup.string().trim()
      .min(3, t('modals.numberCharacters'))
      .max(20, t('modals.numberCharacters'))
      .required(t('modals.obligatoryField'))
      .notOneOf(channels.map((channel) => channel.name), t('modals.mustUnique')),
  });

  const Component = getModal(typeModal);
  return (
    <Component
      item={itemModal}
      handleCloseModal={handleCloseModal}
      validationSchema={validationSchema}
      t={t}
      dispatch={dispatch}
    />
  );
};

export default RenderModal;
