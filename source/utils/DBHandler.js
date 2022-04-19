import AsyncStorage from '@react-native-async-storage/async-storage';
class DBHandler{
    
  storeData =async(value)=>{

    console.log('session   =======>',value)
 
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@session', jsonValue)
      console.log('Done')
    } catch (e) {
      alert(e)
    }
  }
  getData=async(onSuccess)=>{
    try{
      const jsonValue =await AsyncStorage.getItem('@session')
      var data = JSON.parse(jsonValue)
 
      if(data !== null){
          onSuccess(data)
       
   
       } else{
         Success('wrong')
         console.log('wrong')
       }
 
    }
    catch (e){
     alert(e)
   }  
  }

  storeImage = async (value) => {
    try {
      await AsyncStorage.setItem('@image', value)
      console.log('===============================Done=======================')
    } catch (e) {
      console.log('===============================Error=======================',e)
      // saving error
    }
  }

  getimage = async (onSuccess) => {
    try {
      const value = await AsyncStorage.getItem('@image')
      console.log('===============================Done=======================')
      if(value !== null) {
        onSuccess(value)
      }
    } catch(e) {
      onSuccess(e)
      // error reading value
    }
  }
  
}
export default DBHandler