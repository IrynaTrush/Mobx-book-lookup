import CircularProgress from '@material-ui/core/CircularProgress';
import './style.css';

interface ISpin {
    isLoading: boolean;
}

export default function Spin(props: ISpin) {
    const { isLoading } = props;
  return (
    <div className='spinner_container'>
        {
          isLoading
          ?  <CircularProgress />
          : null
      }
    </div>
  );
}