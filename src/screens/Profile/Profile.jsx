import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import profileStyles from './profile.styles'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
const Profile = () => {

    const [image, setImage] = useState(null)

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()

        if (!granted) {
        return false 
        }
        return true 
    }

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions()

        if(isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                
            })
        }
    }

    const confirmImage = () => {}

  return (
    <View style={styles.container}>
        {image ? null : (
            <Image 
            source={ { uri: 'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY='}}
            style={styles.image}
            resizeMode='cover'
            />
            
        )}
      <Pressable style={styles.cameraButton}>
        <Text>Tomar foto de perfil</Text>
      </Pressable>

    </View>
  )
}

export default Profile