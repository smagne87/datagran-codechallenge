import { makeStyles } from '@material-ui/core/styles';
import * as colors from '../../styles/js/global/colors';

const useStyles = makeStyles(() => ({
  gridContainer: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  gridItem: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    borderBottom: `1px solid ${colors.black}`,
  },
}));

export default useStyles;
