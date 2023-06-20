export type ContainerType = {
  children: any;
  className?: string;
};

export const Container = ({ children, className }: ContainerType) => {
  return (
    <div
      className={`md:px-10 lg:px-[100px] w-full ${
        className ? " " + className : ""
      }`}
    >
      {children}
    </div>
  );
};
