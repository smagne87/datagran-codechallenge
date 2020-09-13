import { makeStyles } from '@material-ui/core/styles';
import * as colors from '../../styles/js/global/colors';

const useStyles = makeStyles(() => ({
  homeMainContainer: {
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: colors.white,
  },
}));

export default useStyles;
