import { ComponentType, DetailedHTMLProps, HTMLAttributes } from 'react';
import { TLocationInResult } from '../generic/location';

export type TlocationTools<ToolsProps> = ComponentType<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & ToolsProps
>;

export type TMyLocationToolsProps = {
  location: TLocationInResult;
};
