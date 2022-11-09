'use client';
type ErrorProps = { error: Error };

const Error = ({ error }: ErrorProps) => {
  return <>An error occurred: {error.message}</>;
};

export default Error;
