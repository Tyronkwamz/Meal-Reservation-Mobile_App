import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  profileContainer: {
    maxWidth: 400,
    marginVertical: 50,
    marginHorizontal: 'auto',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    textAlign: 'center',
  },
  headerText: {
    color: '#ff7e5f',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
  },
  btn: {
    backgroundColor: '#ff7e5f',
    color: '#fff',
    padding: 10,
    borderColor: 'transparent',
    borderRadius: 5,
    fontWeight: 'bold',
  },
  btnHover: {
    backgroundColor: '#feb47b',
  },
  loading: {
    textAlign: 'center',
    fontSize: 18,
    color: '#ff7e5f',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginTop: 20,
  },
});

export default styles;
