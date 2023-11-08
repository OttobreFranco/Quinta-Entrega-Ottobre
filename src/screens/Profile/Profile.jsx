import * as ImagePicker from "expo-image-picker";

import { Image, Pressable, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../../features/auth/authSlice";
import styles from "./profile.styles";
import { usePostProfileImageMutation } from "../../services/shopApi";
import { Header } from "../../components";

const Profile = ({ navigation }) => {
  const image = useSelector((state) => state.auth.imageCamera);
  const { localId } = useSelector((state) => state.auth);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      });
      if (!result.canceled) {
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        );
      }
    }
  };

  const confirmImage = () => {
    triggerSaveProfileImage({ image, localId });
  };

  return (
    <View>
      <Header title="Perfil" />
      <View style={styles.container}>
        <View>
          {image ? (
            <Image
              source={{
                uri: image,
              }}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <Image
              source={{
                uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              style={styles.image}
              resizeMode="cover"
            />
          )}
          <View style={styles.botoneraContainer}>
            <Pressable style={styles.cameraButton} onPress={pickImage}>
              <Text style={styles.text}>Tomar Foto de perfil</Text>
            </Pressable>
            <Pressable style={styles.cameraButton} onPress={confirmImage}>
              <Text style={styles.text}>Confirmar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Profile;
