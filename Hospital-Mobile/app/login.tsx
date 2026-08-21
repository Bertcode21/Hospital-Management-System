import React, { useState } from "react";
import api from './api/services';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    // We will connect this to Express + MongoDB next.
    console.log("Login:", { email, password });
    
    if (!email.trim()) {
    alert("Please enter your email address.");
    return;
  }

  if (!password) {
    alert("Please enter your password.");
    return;
  }


  // sendig login credential to the backend
  try{
   console.log("Sending Login request...")

   const response = await api.post("/auth/login", {
     email: email.trim().toLowerCase(),
      password,
   })

   console.log("Login Response: ", response.data)

   if (!response.data.success){
  alert(response.data.message || "Login Failed")
  return;
   }


   // to check user
   const user = response.data.user;
   console.log("looged user: ", user);
   console.log("user role: ", user.role );


   /// router or Navigate to their respective dashbaord

   if(user.role === "admin"){
  router.replace("/admin/dashboard")
   }else if (user.role === "doctor"){
    router.replace("/doctors/dashboard");
   }else if (user.role === "patient"){
    router.replace("/patients/dashboard")
   }else{
    alert(" Please contact the adminstrator, Your Account does not exists")
   }
   console.log("Login successfull")
   alert("Login successfull..");
  }catch(error: any){
    console.error("Login Error: ", error.response?.data || error.message);
    alert(error.response.message || "An error occurred during login. please try again");
  }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* LOGO */}
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Ionicons name="medical" size={32} color="#FFFFFF" />
          </View>

          <Text style={styles.brandName}>HospitalCare</Text>
          <Text style={styles.brandSubtitle}>
            Hospital Management System
          </Text>
        </View>

        {/* CARD */}
        <View style={styles.card}>
          <Text style={styles.title}>Welcome back</Text>

          <Text style={styles.subtitle}>
            Sign in to continue to your hospital dashboard.
          </Text>

          {/* EMAIL */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email address</Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="mail-outline"
                size={20}
                color="#718096"
              />

              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#A0AEC0"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>

          {/* PASSWORD */}
          <View style={styles.inputGroup}>
            <View style={styles.passwordHeader}>
              <Text style={styles.label}>Password</Text>

              <Pressable>
                <Text style={styles.forgotPassword}>
                  Forgot password?
                </Text>
              </Pressable>
            </View>

            <View style={styles.inputContainer}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color="#718096"
              />

              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#A0AEC0"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />

              <Pressable
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={
                    showPassword
                      ? "eye-off-outline"
                      : "eye-outline"
                  }
                  size={20}
                  color="#718096"
                />
              </Pressable>
            </View>
          </View>

          {/* LOGIN BUTTON */}
          <Pressable
            style={({ pressed }) => [
              styles.loginButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>
              Sign In
            </Text>

            <Ionicons
              name="arrow-forward"
              size={19}
              color="#FFFFFF"
            />
          </Pressable>

          {/* SIGNUP */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Don't have an account?
            </Text>

            <Pressable onPress={() => router.push("/signup")}>
              <Text style={styles.signupLink}>
                Create account
              </Text>
            </Pressable>
          </View>
        </View>

        {/* SECURITY */}
        <View style={styles.security}>
          <Ionicons
            name="shield-checkmark-outline"
            size={17}
            color="#00A896"
          />

          <Text style={styles.securityText}>
            Your information is securely protected
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FC",
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 28,
  },

  logo: {
    width: 68,
    height: 68,
    borderRadius: 20,
    backgroundColor: "#1976D2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  brandName: {
    fontSize: 24,
    fontWeight: "800",
    color: "#17324D",
  },

  brandSubtitle: {
    fontSize: 12,
    color: "#718096",
    marginTop: 4,
  },

  card: {
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 26,
    elevation: 3,
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#17324D",
  },

  subtitle: {
    fontSize: 13,
    lineHeight: 20,
    color: "#718096",
    marginTop: 7,
    marginBottom: 25,
  },

  inputGroup: {
    marginBottom: 18,
  },

  label: {
    fontSize: 12,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 8,
  },

  passwordHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  forgotPassword: {
    fontSize: 11,
    fontWeight: "700",
    color: "#1976D2",
  },

  inputContainer: {
    height: 52,
    borderWidth: 1,
    borderColor: "#E3EAF2",
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    backgroundColor: "#FAFCFE",
  },

  input: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
    color: "#17324D",
    fontSize: 13,
  },

  loginButton: {
    height: 52,
    borderRadius: 14,
    backgroundColor: "#1976D2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    marginTop: 5,
  },

  buttonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    gap: 5,
  },

  signupText: {
    fontSize: 12,
    color: "#718096",
  },

  signupLink: {
    fontSize: 12,
    fontWeight: "800",
    color: "#1976D2",
  },

  security: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 22,
  },

  securityText: {
    fontSize: 10,
    color: "#718096",
  },
});