import { makeStyles } from '@material-ui/core/styles';
import * as colors from '../../styles/js/global/colors';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: colors.bgColor,
    paddingTop: '3.5rem',
    boxSizing: 'border-box',
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    padding: 15,
  },
}));
export default useStyles;
