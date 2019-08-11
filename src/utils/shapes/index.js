/* npm imports: common */
import { oneOf } from 'prop-types';

/* export custom shapes */
export * from './IconShape';
export * from './TaskShape';

/* export others */
export const SortShape = oneOf(['asc', 'desc']);
export const GradientShape = oneOf(['primary', 'secondary']);
