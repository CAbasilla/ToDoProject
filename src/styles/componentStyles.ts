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
    bottom: 10,
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
    height: 55,
    borderRadius: 5,
    justifyContent: 'center',
    top: 5,
    right: 7,
  },
  deleteTouchable: {
    backgroundColor: '#663399',
    height: 55,
    borderRadius: 5,
    justifyContent: 'center',
    top: 5,
    right: 5,
  },
  actionText: {
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
