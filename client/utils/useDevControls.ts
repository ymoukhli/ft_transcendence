import { useControls } from 'leva';
// import { useEffect } from 'react';

const useDevControls: typeof useControls = (schema) => {
  // const isEnabled = process.env.NODE_ENV != 'production';

  const controls = useControls(schema);

  /*if (isEnabled) */ return controls;

  // return schema;
};

export default useDevControls;
