import * as React from "react";
import { SVGProps } from "react";

export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8 8.586 4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L8 8.586Z"
      fill={props.color || "#2B2D26"}
    />
  </svg>
);
