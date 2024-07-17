import React from "react";
import type { AvatarProps } from "antd";
import { Avatar as AntdAvatar } from "antd";
import { getNameInitials, getRandomColorFromString } from "@/utilities";

type Props = AvatarProps & {
  name?: string;
  imageSrc?: string; // New prop to accept image URL
};

const CustomAvatarComponent = ({
  name = "",
  style,
  imageSrc,
  ...rest
}: Props) => {
  return (
    <AntdAvatar
      alt={name}
      size="small"
      src={imageSrc || rest.src}
      style={{
        backgroundColor:
          imageSrc || rest?.src
            ? "transparent"
            : getRandomColorFromString(name),
        display: "flex",
        alignItems: "center",
        border: "none",
        ...style,
      }}
      {...rest}
    >
      {!(imageSrc || rest.src) && getNameInitials(name)}{" "}
      {/* Show initials only if no image */}
    </AntdAvatar>
  );
};

export const CustomAvatar = React.memo(
  CustomAvatarComponent,
  (prevProps, nextProps) => {
    return (
      prevProps.name === nextProps.name &&
      prevProps.src === nextProps.src &&
      prevProps.imageSrc === nextProps.imageSrc
    );
  },
);
