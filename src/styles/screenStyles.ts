import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewHome: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'aliceblue',
  },
  titleHome: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 0,
    marginLeft: 20,
  },
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 100,
    backgroundColor: 'rgba(0,0,0,0.7)',
    flexDirection: 'column',
  },
  content: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginHorizontal: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 0,
    backgroundColor: '#fff',
  },
  menu: {
    display: 'flex',
    height: 60,
    marginHorizontal: 5,
    paddingLeft: 30,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textInput: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  label: {
    padding: 10,
    paddingBottom: 0,
  },
  colors: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
  },
  color: {
    width: 30,
    height: 30,
    marginRight: 20,
    borderRadius: 3,
  },
  button: {
    height: 20,
    width: 100,
  },
  buttonText: {
    fontSize: 18,
    color: '#007fff',
  },
  errorText: {
    color: 'red',
    marginLeft: 10,
  },
});

export { styles };
