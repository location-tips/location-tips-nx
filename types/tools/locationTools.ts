import { ComponentType, DetailedHTMLProps, HTMLAttributes } from 'react';
import { TLocationInResult } from '../generic/location';

export type TTlocationTools<ToolsProps> = ComponentType<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & ToolsProps
>;

export type TTMyLocationToolsProps = {
  location: TLocationInResult;
};
