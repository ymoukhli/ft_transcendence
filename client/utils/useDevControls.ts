import { useControls } from 'leva';

const useDevControls: typeof useControls = (schema) =>
  // const isEnabled = process.env.NODE_ENV != 'production';
  useControls(schema);
