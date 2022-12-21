import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  view: {
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
    alignItems: 'center',
    backgroundColor: "#7a7a",
    paddingTop: 10,
    paddingBottom: 10,
    width: "95%",
  },
  image: {
    width: 140,
    height: 180,
    borderRadius: 10,
    marginLeft: 10
  }
});

export default style;
