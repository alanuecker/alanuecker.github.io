import React from 'react';

import {
  Lightbox as ExternalLightbox,
  LightboxExternalProps,
} from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import classes from './style.module.scss';
import classNames from 'classnames';

interface Props extends LightboxExternalProps {
  theme?: 'dark' | 'light';
}

export function Lightbox({
  slides,
  open,
  close,
  theme = 'dark',
}: Props): React.JSX.Element {
  return (
    <ExternalLightbox
      className={classNames({ [classes.light]: theme === 'light' })}
      slides={slides}
      open={open}
      close={close}
      plugins={[Zoom]}
    />
  );
}
