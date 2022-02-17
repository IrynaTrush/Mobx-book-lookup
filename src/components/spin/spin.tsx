import CircularProgress from '@material-ui/core/CircularProgress';

interface ISpin {
    isLoading: boolean;
}

export default function Spin(props: ISpin) {
    const { isLoading } = props;
  return (
    <div style={{display: 'flex'}}>
        {
          isLoading
          ?  <CircularProgress />
          : null
      }
    </div>
  );
}