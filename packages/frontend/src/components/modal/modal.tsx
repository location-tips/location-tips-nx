'use client';

import React, { useMemo, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { MCard } from '@location-tips/location-tips-uikit/atoms/MCard';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import useModal from '@front/stores/useModal';

import styles from './modal.module.css';

import './modal.animation.css';

const Modal = () => {
  const modalStore = useModal();
  const nodeRef = useRef(null);

  const modalData = useMemo(
    () =>
      modalStore.currentModal
        ? modalStore.modals.get(modalStore.currentModal)
        : undefined,
    [modalStore.currentModal, modalStore.modals]
  );

  return (
    <CSSTransition
      in={!!modalStore.currentModal && !!modalData}
      nodeRef={nodeRef}
      timeout={300}
      classNames="alert"
      unmountOnExit
      onEnter={() => modalStore.onShow?.()}
      onExited={() => modalStore.onHide?.()}
    >
      <MFlex
        direction="row"
        justify="center"
        align="center"
        className={styles.wrapper}
      >
        <div
          className={styles.overlay}
          onClick={() => modalStore.hideModal()}
        ></div>
        {modalStore.currentModal && modalData && (
          <MCard
            className={styles.modal}
            header={modalData.header}
            footer={modalData.footer}
            role="dialog"
            ref={nodeRef}
          >
            {modalData.content}
          </MCard>
        )}
      </MFlex>
    </CSSTransition>
  );
};

export default Modal;
