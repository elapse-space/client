export const NotFound = () => {
  return (
    <div className={"flex items-start justify-center h-[calc(100vh-88px)]"}>
      <div className={"flex flex-col mt-72 items-center justify-center gap-4"}>
        <h1 className={"text-8xl font-semibold"}>404</h1>
        <p className={"text-sm font-medium"}>
          We cannot find the page you are looking for
        </p>
      </div>
    </div>
  );
};
