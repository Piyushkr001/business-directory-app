/* eslint-disable react-hooks/exhaustive-deps */
import Color from "@/services/Color";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require('./../assets/images/welcome.png')}
        style={
          {
            width: '100%', 
            height: 270,
            marginTop:130,
            marginBottom:25,
          }
        }
      />

      <Text style ={styles.heading}>Welcome to</Text>
      <Text style ={styles.heading}>Business Directory</Text>

      <View style={{
        backgroundColor: Color.WHITE,
        padding:20,
        borderRadius:20,
        margin: 20,
      }}>
        <Text style ={{
          fontFamily: 'appFont',
          fontSize:20,
          textAlign: 'center',
        }}>
          Discover the thousand of business in one place
        </Text>

        <View style={[styles.button, {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }]}>
          <Image source={require('./../assets/images/Google.png')}
          style ={{
            width:20,
            height:20,
          }}
          />
          <Text 
          style ={{
            fontFamily: 'appFont',
            fontSize:18,
            textAlign: 'center',
          }}
          >Sign In With Google</Text>
        </View>
        <View style={[styles.button, {backgroundColor: Color.PRIMARY}, {borderColor: Color.PRIMARY}]}>
          <Text 
          style ={{
            fontFamily: 'appFont',
            fontSize:18,
            textAlign: 'center',
            color: Color.WHITE,
          }}
          >Skip</Text>
        </View>

      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.PRIMARY,
    height: '100%',
  },
  heading:{
    fontFamily: 'appFontBold',
    fontSize: 30,
    color: Color.WHITE,
    textAlign: 'center',
  },
  button:{
    borderWidth: 1,
    borderRadius: 99,
    padding: 15,
    marginTop: 15,
  },
})
