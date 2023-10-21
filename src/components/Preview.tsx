import Zoom, { UncontrolledProps } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './Preview.css'

function Preview({ children, ...props }: UncontrolledProps) {
  return <Zoom {...props}>{children}</Zoom>;
}

export default Preview;
