'use client';

import {
  FacebookShareButton,
  RedditShareButton,
  PinterestShareButton,
  TelegramShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  VKShareButton,
  EmailShareButton,
  GabShareButton,
  HatenaShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PocketShareButton,
  TumblrShareButton,
  ViberShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  EmailIcon,
  FacebookIcon,
  GabIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  ViberIcon,
  VKIcon,
  WhatsappIcon,
  WorkplaceIcon,
  XIcon,
} from 'react-share';
import { useState } from 'react';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';

import { MdiCheckBold } from '@front/icons/MdiCheckBold';
import { MdiContentCopy } from '@front/icons/MdiContentCopy';

import styles from './ShareMenu.module.css';

type ShareMenuProps = {
  url: string;
  media?: string;
};

export const ShareMenu = ({ url, media }: ShareMenuProps) => {
  const [done, setDone] = useState(false);

  const onCopy = () => {
    navigator?.clipboard.writeText(url);
    setDone(true);

    setTimeout(() => {
      setDone(false);
    }, 3000);
  };

  return (
    <MFlex
      direction="row"
      gap="m"
      align="start"
      wrap="wrap"
      justify="space-between"
      className={styles.shareList}
    >
      <MButton
        mode="tertiary"
        onClick={onCopy}
        size="m"
        stretch
        before={done ? <MdiCheckBold /> : <MdiContentCopy />}
      >
        Copy&nbsp;link
      </MButton>
      <FacebookShareButton url={url}>
        <FacebookIcon size={36} borderRadius={8} />
      </FacebookShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={36} borderRadius={8} />
      </RedditShareButton>
      {media && (
        <PinterestShareButton url={url} media={media}>
          <PinterestIcon size={36} borderRadius={8} />
        </PinterestShareButton>
      )}
      <TelegramShareButton url={url}>
        <TelegramIcon size={36} borderRadius={8} />
      </TelegramShareButton>
      <InstapaperShareButton url={url}>
        <InstapaperIcon size={36} borderRadius={8} />
      </InstapaperShareButton>
      <TwitterShareButton url={url}>
        <XIcon size={36} borderRadius={8} />
      </TwitterShareButton>
      <VKShareButton url={url}>
        <VKIcon size={36} borderRadius={8} />
      </VKShareButton>
      <ViberShareButton url={url}>
        <ViberIcon size={36} borderRadius={8} />
      </ViberShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={36} borderRadius={8} />
      </WhatsappShareButton>
      <EmailShareButton url={url}>
        <EmailIcon size={36} borderRadius={8} />
      </EmailShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={36} borderRadius={8} />
      </LinkedinShareButton>
      <TumblrShareButton url={url}>
        <TumblrIcon size={36} borderRadius={8} />
      </TumblrShareButton>
      <GabShareButton url={url}>
        <GabIcon size={36} borderRadius={8} />
      </GabShareButton>
      <OKShareButton url={url}>
        <OKIcon size={36} borderRadius={8} />
      </OKShareButton>
      <HatenaShareButton url={url}>
        <HatenaIcon size={36} borderRadius={8} />
      </HatenaShareButton>
      <LineShareButton url={url}>
        <LineIcon size={36} borderRadius={8} />
      </LineShareButton>
      <LivejournalShareButton url={url}>
        <LivejournalIcon size={36} borderRadius={8} />
      </LivejournalShareButton>
      <MailruShareButton url={url}>
        <MailruIcon size={36} borderRadius={8} />
      </MailruShareButton>
      <PocketShareButton url={url}>
        <PocketIcon size={36} borderRadius={8} />
      </PocketShareButton>
      <WorkplaceShareButton url={url}>
        <WorkplaceIcon size={36} borderRadius={8} />
      </WorkplaceShareButton>
    </MFlex>
  );
};

export default ShareMenu;
