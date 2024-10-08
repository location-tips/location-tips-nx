import React from 'react';

import type { SVGProps } from 'react';

export function MdiBookmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17 3H7a2 2 0 0 0-2 2v16l7-3l7 3V5a2 2 0 0 0-2-2"
      ></path>
    </svg>
  );
}
