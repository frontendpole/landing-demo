import * as React from "react";
import { SVGProps } from "react";
export const HeroSectionImg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={758}
    height={506}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h758v506H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="matrix(.00024 0 0 .00037 0 0)" />
      </pattern>
      <image
        id="b"
        width={4096}
        height={2731}
      />
    </defs>
  </svg>
);