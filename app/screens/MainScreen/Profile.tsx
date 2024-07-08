import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Navbar from "@components/Navbar";
import { useGetUserByIdQuery } from "@/services/users";
import LoaderApi from "@/components/LoaderApi";

const Profile = () => {
  const { data, error, isLoading } = useGetUserByIdQuery({
    userId: "google-oauth2|107441262419195766365",
  });

  // Handle error state if needed
  if (isLoading || !data) {
    return <LoaderApi visible={isLoading} />;
  }

  const handleEditProfile = () => {
    console.log("Edit Profile button pressed");
    // Add logic for editing profile
  };

  return (
    <View style={styles.container}>
      <Navbar title="Profile" />

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollInnerContainer}
      >
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../../../assets/dicaprio.jpg")} // Replace with your actual image source
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.profileTitle}>Identité</Text>
          <Text style={styles.profileDetails}>{data[0]?.userName}</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollInnerContainer: {
    paddingBottom: 30,
  },
  contentContainer: {
    paddingHorizontal: 25,
    marginTop: 20,
  },
  profileImageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100, // Make it a circle
  },
  profileTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  profileDetails: {
    fontSize: 16,
    fontWeight: "500",
    color: "#3F3F3F",
    marginBottom: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 25,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default Profile;
