import { StyleSheet } from 'react-native';

const primaryColor = '#FCCE03'
const secondryColor = '#E5FFE8'

// Font Family Names
const normalFont = "Poppins-Regular"
const mediumFont = "Poppins-Medium"
const boldFont = "Poppins-Bold"

const textFont = { fontFamily: normalFont }
const mediumTextFont = { fontFamily: mediumFont }
const boldTextFont = { fontFamily: boldFont }

const container = StyleSheet.create({
  center: {
    flex: 1, justifyContent: "center", alignItems: "center",
  },
  empty: { flex: 1 },
  roundFormBG: {
    flex: 1, paddingHorizontal: 10, paddingVertical: 30,
    borderTopStartRadius: 30, borderTopEndRadius: 30,
    borderTopLeftRadius: 30, borderTopRightRadius: 30
  }
})

const headings = StyleSheet.create({
  h1: { ...boldTextFont, fontSize: 30, color: "#fff" },
  h2: { ...mediumTextFont, fontSize: 24, color: "#fff" },
  h3: { ...textFont, fontSize: 18 },
  h4: { ...boldTextFont, fontSize: 15 },
  h5: { ...textFont, fontSize: 25 },
  h6: { ...textFont, fontSize: 15 },
})

const form = StyleSheet.create({
  inputBG: {
    flexDirection: "row", borderBottomColor: "#ccc", borderBottomWidth: 0.7,
    marginVertical: 10, alignItems: "center", paddingHorizontal: 10
  },
  input: { ...textFont, flex: 1, padding: 10, fontSize: 16, },
  leftLogo: {}
})

const shadow = StyleSheet.create({
  whiteShadow: {
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation:3
  }
})
const textInput = StyleSheet.create({
  icon: {
    // justifyContent: "flex-end",
    // alignSelf: "flex-end",
    bottom: 32,
  }
})
export {
  textFont, mediumTextFont, boldTextFont,container, primaryColor, shadow, form, headings,normalFont,
  textInput,mediumFont,boldFont

}