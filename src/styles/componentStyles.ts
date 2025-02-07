import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  menuContainer: {
    width: '100%',
    height: 'auto',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    bottom: 20,
    right: 10,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
  todoContainer: {
    width: '100%',
    height: 'auto',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
  },
  todoView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    height: 'auto',
    margin: 5,
  },
  deleteView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    height: 'auto',
  },
  editTouchable: {
    backgroundColor: '#663399',
    height: '70%',
    borderRadius: 5,
    justifyContent: 'center',
    top: 5,
    right: 7,
  },
  deleteTouchable: {
    backgroundColor: '#663399',
    height: '70%',
    borderRadius: 5,
    justifyContent: 'center',
    top: 5,
    right: 5,
  },
  deleteText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    width: 50,
    justifyContent: 'center',
  },
  editText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    width: 50,
    justifyContent: 'center',
  },
  deleteIcon: {
    color: 'white',
    fontSize: 30,
  },
});

export { styles };
