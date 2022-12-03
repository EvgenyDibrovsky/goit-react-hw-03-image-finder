import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.Loader}>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#36a6de"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </div>
);
