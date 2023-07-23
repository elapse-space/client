import { FC } from "react";
import { HTMLAttributes } from "react";

export type IconsProps = HTMLAttributes<SVGElement> & {
  width: number;
  height: number;
  fill?: string;
  viewBox?: string;
};

export namespace Icons {
  export const Plus: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
      </svg>
    );
  };
  export const File: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M18 22a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12zM13 4l5 5h-5V4zM7 8h3v2H7V8zm0 4h10v2H7v-2zm0 4h10v2H7v-2z"></path>
      </svg>
    );
  };
  export const Folder: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z"></path>
      </svg>
    );
  };
  export const GitBranch: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M17.5 4C15.57 4 14 5.57 14 7.5c0 1.554 1.025 2.859 2.43 3.315-.146.932-.547 1.7-1.23 2.323-1.946 1.773-5.527 1.935-7.2 1.907V8.837c1.44-.434 2.5-1.757 2.5-3.337C10.5 3.57 8.93 2 7 2S3.5 3.57 3.5 5.5c0 1.58 1.06 2.903 2.5 3.337v6.326c-1.44.434-2.5 1.757-2.5 3.337C3.5 20.43 5.07 22 7 22s3.5-1.57 3.5-3.5c0-.551-.14-1.065-.367-1.529 2.06-.186 4.657-.757 6.409-2.35 1.097-.997 1.731-2.264 1.904-3.768C19.915 10.438 21 9.1 21 7.5 21 5.57 19.43 4 17.5 4zm-12 1.5C5.5 4.673 6.173 4 7 4s1.5.673 1.5 1.5S7.827 7 7 7s-1.5-.673-1.5-1.5zM7 20c-.827 0-1.5-.673-1.5-1.5a1.5 1.5 0 0 1 1.482-1.498l.13.01A1.495 1.495 0 0 1 7 20zM17.5 9c-.827 0-1.5-.673-1.5-1.5S16.673 6 17.5 6s1.5.673 1.5 1.5S18.327 9 17.5 9z"></path>
      </svg>
    );
  };
  export const FolderOpen: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z"></path>
      </svg>
    );
  };
  export const Timer: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M13 3h4v2h-4zM3 8h4v2H3zm0 8h4v2H3zm-1-4h3.99v2H2zm19.707-5.293-1.414-1.414L18.586 7A6.937 6.937 0 0 0 15 6c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7a6.968 6.968 0 0 0-1.855-4.73l1.562-1.563zM16 14h-2V8.958h2V14z"></path>
      </svg>
    );
  };
  export const Instagram: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
        <circle cx="11.994" cy="11.979" r="3.003"></circle>
      </svg>
    );
  };
  export const Twitter: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
      </svg>
    );
  };
  export const ChevronDown: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path>
      </svg>
    );
  };
  export const ChevronRight: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
      </svg>
    );
  };
  export const React: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <circle cx="12" cy="11.245" r="1.785"></circle>
        <path d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"></path>
        <path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"></path>
        <path d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z"></path>
        <path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z"></path>
      </svg>
    );
  };
  export const Check: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
      </svg>
    );
  };
  export const TimeFive: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
        <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path>
      </svg>
    );
  };
  export const CalendarAlt: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 7h14v2H5V7z"></path>
      </svg>
    );
  };
  export const ShieldQuarter: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897V12H5.51a15.473 15.473 0 0 1-.544-4.365L12 4.118V12h6.46c-.759 2.74-2.498 5.979-6.46 7.897z"></path>
      </svg>
    );
  };
  export const Share: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.2803 7.53032C8.9874 7.82321 8.51256 7.82321 8.21967 7.53032C7.92678 7.23743 7.92678 6.76255 8.21967 6.46966L11.2197 3.46966L11.75 2.93933L12.2803 3.46966L15.2803 6.46966C15.5732 6.76255 15.5732 7.23743 15.2803 7.53032C14.9874 7.82321 14.5126 7.82321 14.2197 7.53032L12.5 5.81065V15C12.5 15.4142 12.1642 15.75 11.75 15.75C11.3358 15.75 11 15.4142 11 15V5.81065L9.2803 7.53032ZM8.375 11.75C7.33947 11.75 6.5 12.5895 6.5 13.625V16C6.5 17.2426 7.50736 18.25 8.75 18.25H14.75C15.9926 18.25 17 17.2426 17 16V13.625C17 12.5895 16.1605 11.75 15.125 11.75C14.7108 11.75 14.375 11.4142 14.375 11C14.375 10.5858 14.7108 10.25 15.125 10.25C16.989 10.25 18.5 11.761 18.5 13.625V16C18.5 18.0711 16.8211 19.75 14.75 19.75H8.75C6.67893 19.75 5 18.0711 5 16V13.625C5 11.761 6.51104 10.25 8.375 10.25C8.7892 10.25 9.125 10.5858 9.125 11C9.125 11.4142 8.7892 11.75 8.375 11.75Z"
          fill={fill}
        />
      </svg>
    );
  };
  export const ShieldAlt2: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M21.881 5.223a.496.496 0 0 0-.747-.412c-.672.392-1.718.898-2.643.898-.421 0-.849-.064-1.289-.198a5.712 5.712 0 0 1-.808-.309c-1.338-.639-2.567-1.767-3.696-2.889a1.008 1.008 0 0 0-.698-.29 1.008 1.008 0 0 0-.698.29c-1.129 1.122-2.358 2.25-3.696 2.889h-.001a5.655 5.655 0 0 1-.807.309c-.44.134-.869.198-1.289.198-.925 0-1.971-.507-2.643-.898a.496.496 0 0 0-.747.412c-.061 1.538-.077 4.84.688 7.444 1.399 4.763 4.48 7.976 8.91 9.292l.14.041.14-.014V22v-.014H12l.143.014.14-.041c4.43-1.316 7.511-4.529 8.91-9.292.765-2.604.748-5.906.688-7.444z"></path>
      </svg>
    );
  };
  export const Star: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
      </svg>
    );
  };
  export const Telegram: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
      </svg>
    );
  };
  export const Discord: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
      </svg>
    );
  };
  export const YouTube: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill}
        {...other}
      >
        <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
      </svg>
    );
  };
  export const Vk: FC<IconsProps> = ({
    width,
    height,
    fill,
    viewBox,
    ...other
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : "auto"}
        height={height ? height : "auto"}
        viewBox={viewBox ? viewBox : "0 0 16 16"}
        fill={fill}
        {...other}
      >
        <path
          d="M0 7.68C0 4.05967 0 2.24933 1.12467 1.12467C2.24933 0 4.06 0 7.68 0H8.32C11.9403 0 13.7507 0 14.8753 1.12467C16 2.24933 16 4.06 16 7.68V8.32C16 11.9403 16 13.7507 14.8753 14.8753C13.7507 16 11.94 16 8.32 16H7.68C4.05967 16 2.24933 16 1.12467 14.8753C0 13.7507 0 11.94 0 8.32V7.68Z"
          fill={fill}
        ></path>
        <path
          d="M8.4466 12C5.02998 12 3.0812 9.37237 3 5H4.71143C4.76765 8.20921 6.02936 9.56857 7.02873 9.84885V5H8.64023V7.76777C9.62711 7.64865 10.664 6.38739 11.0137 5H12.6252C12.3567 6.70971 11.2324 7.97097 10.4329 8.48949C11.2324 8.90991 12.5128 10.01 13 12H11.2261C10.8451 10.6687 9.89569 9.63864 8.64023 9.4985V12H8.4466Z"
          fill="var(--white100)"
        ></path>
      </svg>
    );
  };
}
