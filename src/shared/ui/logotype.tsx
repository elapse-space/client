import { RouterPaths } from "@shared/lib/router";
import { FC, HTMLAttributes } from "react";
import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

type LogotypeProps = HTMLAttributes<SVGElement> & {
  size: number;
  href?: boolean;
  fill: string;
};

export const Logotype: FC<LogotypeProps> = ({
  href,
  onClick,
  fill,
  size,
  ...other
}) => {
  const navigate = useNavigate();

  const handler = (event: MouseEvent<any>) => {
    href && navigate(RouterPaths.HOME_PAGE);
    onClick && onClick(event);
  };

  return (
    <svg
      onClick={handler}
      xmlns="http://www.w3.org/2000/svg"
      height={size ? size : "32"}
      viewBox={"0 0 184 32"}
      style={{ cursor: href ? "pointer" : "default" }}
      {...other}
    >
      <path
        d="M0 0.0459995V10.446H15.7V31.257H26.145V10.442H41.845V0.0459995H0Z"
        fill={fill}
      />
      <path
        d="M75.806 23.818C76.3259 23.7723 76.8098 23.5336 77.1624 23.1487C77.5149 22.7639 77.7104 22.2609 77.7104 21.739C77.7104 21.2171 77.5149 20.7141 77.1624 20.3293C76.8098 19.9444 76.3259 19.7057 75.806 19.66H59.344V23.841H75.806V23.818ZM59.344 7.439V11.639H73.508C74.0339 11.5888 74.5216 11.3421 74.8738 10.9482C75.2259 10.5544 75.4167 10.0423 75.408 9.514C75.4109 8.99201 75.2169 8.48811 74.8647 8.10278C74.5126 7.71746 74.0281 7.47902 73.508 7.435H59.344V7.439ZM89.204 22.871C89.274 28.323 84.653 31.257 79.266 31.257H47.13V0.0459993H76.967C82.401 0.0259993 86.998 2.98 86.929 8.409C86.9647 9.7509 86.6467 11.0786 86.0069 12.2587C85.3671 13.4387 84.428 14.4297 83.284 15.132C86.837 16.264 89.205 18.967 89.205 22.894L89.204 22.871Z"
        fill={fill}
      />
      <path
        d="M122.308 0H134.564V16.774C134.614 28.581 124.908 31.977 113.136 32C101.364 31.977 91.658 28.581 91.704 16.774V0H103.941V16.012C103.895 21.141 108.121 22.019 113.136 22.089C118.128 22.02 122.377 21.142 122.308 16.012V0Z"
        fill={fill}
      />
      <path
        d="M159.293 11.25L168.493 0.0499995H183.005L165.405 20.611V31.261H153.162V20.607L135.562 0.0459995H150.121L159.293 11.25Z"
        fill={fill}
      />
    </svg>
  );
};
