import { ReactComponent as LOGO } from './logo.svg';

const ICONS_MAP = {
  logo: LOGO,
};

const Icon = ({ name, width = 20, height = 20}) => {
  const DrawIcon = ICONS_MAP[name];
  if (!DrawIcon) return null;
  return <DrawIcon width={width} height={height} />;
};

Icon.names = Object.keys(ICONS_MAP).reduce((keysMap, keyItem) => {
  return {
    ...keysMap,
    [keyItem]: keyItem,
  };
}, {});

export default Icon;
