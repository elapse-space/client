import { FC, Fragment } from "react";
import { Oval } from "react-loader-spinner";

export type LoaderProps = {
  loading: boolean;
};

export const Loader: FC<LoaderProps> = ({ loading }) => {
  return (
    <Fragment>
      {loading && (
        <div className="flex items-center justify-center bg-white h-screen w-screen z-50 fixed inset-0">
          <Oval
            height={50}
            width={50}
            color="#000"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#00000010"
            strokeWidth={4}
            strokeWidthSecondary={4}
          />
        </div>
      )}
    </Fragment>
  );
};
