const Image: React.FC<ImageProps> = ({
  src,
  height,
  width,
  style,
  onClick,
}) => {
  return (
    <img
      alt="Loading..."
      src={process.env.PUBLIC_URL + src}
      height={height}
      width={width}
      style={style}
      onClick={onClick}
    />
  );
};

interface ImageProps {
  src: string;
  height?: number;
  width?: number;
  style?: any;
  onClick?: () => void;
}

export default Image;
