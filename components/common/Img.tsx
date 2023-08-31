import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

import { concat } from "@/lib/utils/url";

const Img = ({
  src,
  ...props
}: DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => (
  <img src={`//${concat(process.env.STATIC_ASSET_CDN_HOST, src)}`} {...props} />
);

export default Img;
