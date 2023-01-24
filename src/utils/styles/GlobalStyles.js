import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from './Colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 20,
  },
  marginTop: {
    marginTop: 20,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: '100%',
    margin: 5,
  },
  hr: {
    width: '100%',
    borderBottomWidth: 1,
    marginTop: 8,
    marginBottom: 8,
    borderColor: COLORS.accent,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    shadowRadius: 10,
    shadowOpacity: 0.1,
    shadowColor: 'black',
    borderRadius: 10,
    elevation: 10,
  },
  button: {
    borderRadius: 10,
    shadowRadius: 10,
    shadowOpacity: 0.15,
    shadowColor: 'black',
    borderRadius: 10,
    elevation: 10,
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.accent,
  },
  sub_heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.accent,
  },
  borderTop: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
  textinputStyle: {
    borderColor: COLORS.accent,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    width: '100%',
  },
  textUnderForm: {
    color: COLORS.hint_text,
    fontSize: 11,

    marginLeft: 10,
    marginTop: 5,
  },
  dropdown: {
    height: 50,
    borderColor: COLORS.accent,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  placeholderStyle: {
    fontSize: 16,
    color: COLORS.hint_text,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 10,
  },
  myButtonStyle: {
    height: 60,
    maxWidth: 150,
    maxHeight: 100,
    backgroundColor: COLORS.white,
  },
});
