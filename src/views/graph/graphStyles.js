import { makeStyles } from '@material-ui/core/styles';
import * as colors from '../../styles/js/global/colors';

const useStyles = makeStyles(() => ({
  axisDropdownControl: {
    minWidth: 120,
  },
  button: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  error: {
    color: colors.errorColor,
    marginTop: '1rem',
  },
}));

export default useStyles;
