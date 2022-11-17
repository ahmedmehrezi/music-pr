import { loader } from '../assets';

const Loader = ({ title }) => (

<div>
  <img src={loader} alt="loader" />  
  <h1>
  {title || 'Loading...'}</h1>
</div>

);

export default Loader;
