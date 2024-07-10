import React, {useState} from 'react';
import {Image, Modal, TouchableOpacity, View, Text, Alert, StyleSheet} from 'react-native';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import {styles} from '../styles/EditProfileStyles';
import MaterialCommunityIcons from '../../../../components/Icons/MaterialCommunityIcons';
import { colors } from '../../../../constants/Colors';

const ProfileImage = ({imageUri, onImageChange}:any) => {
  const [profileImageBase64, setProfileImageBase64] = useState('');
  const [isEditProfilePhotoMenuVisible, setIsEditProfilePhotoMenuVisible] =
    useState(false);

  const toggleEditProfilePhotoMenu = () => {
    setIsEditProfilePhotoMenuVisible(!isEditProfilePhotoMenuVisible);
  };

  const openCamera = () => {
    const options: any = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 400,
      maxWidth: 400,
    };
    // launchCamera(options, (response: any) => {
    //   toggleEditProfilePhotoMenu();
    //   if (response.didCancel) {
    //   } else if (response.errorCode || response.errorMessage) {
    //     Alert.alert(
    //       'Warning',
    //       'Camera unavailable, Check for camera permission in settings',
    //       [{text: 'OK', style: 'cancel'}],
    //     );
    //   } else {
    //     if (response.assets?.[0].base64) {
    //       const base64String = `data:${response.assets[0].type};base64,${response.assets[0].base64}`;
    //       setProfileImageBase64(base64String);
    //       onImageChange(base64String);
    //     }
    //   }
    // });
  };

  const openImagePicker = () => {
    const options: any = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 400,
      maxWidth: 400,
    };
    // launchImageLibrary(options, (response: any) => {
    //   toggleEditProfilePhotoMenu();
    //   if (response.didCancel) {
    //   } else if (response.errorCode || response.errorMessage) {
    //   } else {
    //     if (response.assets?.[0].base64) {
    //       const base64String = `data:${response.assets[0].type};base64,${response.assets[0].base64}`;
    //       onImageChange(base64String);
    //       setProfileImageBase64(base64String);
    //     }
    //   }
    // });
  };

  return (
    <View>
      <Image
        source={{uri: profileImageBase64 !== '' ? profileImageBase64 : imageUri}}
        resizeMode="cover"
        style={styles.imageContainer}
      />
      <TouchableOpacity
        style={styles.editPhotoPencilContainer}
        onPress={toggleEditProfilePhotoMenu}>
        <MaterialCommunityIcons color="white" name="pencil-outline" />
      </TouchableOpacity>
      <Modal
        visible={isEditProfilePhotoMenuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={toggleEditProfilePhotoMenu}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalButton} onPress={openCamera}>
              <Text style={styles.modalButtonText}>Open Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={openImagePicker}>
              <Text style={styles.modalButtonText}>Open Photos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={toggleEditProfilePhotoMenu}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
      },
      editPhotoPencilContainer: {
        borderWidth: 1,
        backgroundColor: colors.primary,
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.white,
        position: 'absolute',
        right: '4%',
        bottom: '0%',
      },
      modalButton: {
        marginVertical: 8,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      modalButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
      },
})
