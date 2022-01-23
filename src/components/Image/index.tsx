const Image: React.FC<ImageProps> = ({ src, height, width }) => {
  return (
    <img
      alt="Loading..."
      src={process.env.PUBLIC_URL + src}
      height={height}
      width={width}
    />
  );
};

interface ImageProps {
  src: string;
  height?: number;
  width?: number;
}

export default Image;
