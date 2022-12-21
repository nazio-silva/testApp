import theme from 'global/styles/theme';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: theme.metrics.baseRadius * 10,
    backgroundColor: theme.colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.metrics.basePadding,
    paddingVertical: theme.metrics.basePadding * 1.7,
  },
  titleButton: {
    textAlign: 'center',
    color: theme.colors.white,
  },
});

export default style;
