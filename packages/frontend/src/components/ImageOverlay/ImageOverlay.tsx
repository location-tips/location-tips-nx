'use client';
import { useRef, KeyboardEvent } from 'react';
import { CSSTransition } from 'react-transition-group';

import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';

import { MdiClose } from '@front/icons/MdiClose';

import './ImageOverlay.vars.css';
import styles from './ImageOverlay.module.css';

type ImageOverlayProps = {
  url: string;
  open: boolean;
  title: string;
  onClose: () => void;
};

export const ImageOverlay = ({
  url,
  open = false,
  title = '',
  onClose,
}: ImageOverlayProps) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <CSSTransition
      in={open}
      nodeRef={nodeRef}
      timeout={300}
      classNames="alert"
      unmountOnExit
      onEntered={() => nodeRef.current?.focus()}
      onExited={() => nodeRef.current?.blur()}
    >
      <div
        className={styles.imageOverlay}
        ref={nodeRef}
        onClick={onClose}
        onKeyDown={onKeyDown}
        role="banner"
        aria-label={title}
        title={title}
        tabIndex={1}
      >
        <MButton
          mode="round"
          onClick={onClose}
          className={styles.imageOverlayCloseButton}
          aria-label={`Close ${title} image`}
        >
          <MdiClose width={36} height={36} />
        </MButton>
        <div
          className={styles.imageLayer}
          style={{ backgroundImage: `url('${url}')` }}
        ></div>
      </div>
    </CSSTransition>
  );
};
