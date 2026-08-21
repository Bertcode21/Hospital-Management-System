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

export default function SignupScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const handleSignup = async () => {

    // We will connect this to Express + MongoDB next.
    console.log("Signup:", {
      firstName,
      lastName,
      email,
      phone,
      role,
      password,
      confirmPassword,
    });

    // Validate fields
  if (!firstName.trim()) {
    alert("Please enter your full name.");
    return;
  }
  if(!lastName.trim()){
    alert("Please enter your last name.");
    return
  }

  if (!email.trim()) {
    alert("Please enter your email address.");
    return;
  }

  if (!phone.trim()) {
    alert("Please enter your phone number.");
    return;
  }
  if(!role.trim()){
    alert("Please enter your role.");
    return;

  }
  if(!password){
    alert("Please enter your password.");
    return;
  }
if(password !== confirmPassword){
   alert("Passwords do not match.");
   return;
}

/// now we we try to send to backend and see
try{
console.log("Sending Signup request to backend...");

const response = await api.post("/auth/register",{
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      role: role.trim(),
      password,
})

console.log("Signup response:", response.data);
if(response.status === 201){
  alert("Account created successfully! Please log in.");
  console.log("Signup successful");

      // Clear form
      setFirstName("");
      setLastName("")
      setEmail("");
      setPhone("");
      setRole("");
      setPassword("");
      setConfirmPassword("");
  router.replace("/login")
}
}catch(error: any){
 console.log(
      "Signup error:",
      error.response?.data || error.message
    );
    alert(error.response.data.message || "Unable to register try again")
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
        {/* BACK TO LOGIN */}

        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={20}
            color="#17324D"
          />

          <Text style={styles.backText}>
            Back to login
          </Text>
        </Pressable>

        {/* LOGO */}

        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Ionicons
              name="medical"
              size={30}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.brandName}>
            HospitalCare
          </Text>

          <Text style={styles.brandSubtitle}>
            Hospital Management System
          </Text>
        </View>

        {/* SIGNUP CARD */}

        <View style={styles.card}>
          <Text style={styles.title}>
            Create your account
          </Text>

          <Text style={styles.subtitle}>
            Register to access the hospital management
            system.
          </Text>

          {/* FIRST NAME */}

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              First name
            </Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="person-outline"
                size={19}
                color="#718096"
              />

              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                placeholderTextColor="#A0AEC0"
                value={firstName}
                onChangeText={setFirstName}
                autoCapitalize="words"
              />
            </View>
          </View>

        {/* LAST NAME */}

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              First name
            </Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="person-outline"
                size={19}
                color="#718096"
              />

              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                placeholderTextColor="#A0AEC0"
                value={lastName}
                onChangeText={setLastName}
                autoCapitalize="words"
              />
            </View>
          </View>

          {/* EMAIL */}

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Email address
            </Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="mail-outline"
                size={19}
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

          {/* PHONE */}

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Phone number
            </Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="call-outline"
                size={19}
                color="#718096"
              />

              <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                placeholderTextColor="#A0AEC0"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </View>
          </View>

        {/* ROLE */}

<View style={styles.inputGroup}>
  <Text style={styles.label}>Account type</Text>

  <View style={styles.roleContainer}>

    <Pressable
      style={[
        styles.roleButton,
        role === "patient" && styles.roleButtonActive,
      ]}
      onPress={() => setRole("patient")}
    >
      <Ionicons
        name="person-outline"
        size={19}
        color={role === "patient" ? "#FFFFFF" : "#1976D2"}
      />

      <Text
        style={[
          styles.roleButtonText,
          role === "patient" && styles.roleButtonTextActive,
        ]}
      >
        Patient
      </Text>
    </Pressable>

    <Pressable
      style={[
        styles.roleButton,
        role === "doctor" && styles.roleButtonActive,
      ]}
      onPress={() => setRole("doctor")}
    >
      <Ionicons
        name="medkit-outline"
        size={19}
        color={role === "doctor" ? "#FFFFFF" : "#1976D2"}
      />

      <Text
        style={[
          styles.roleButtonText,
          role === "doctor" && styles.roleButtonTextActive,
        ]}
      >
        Doctor
      </Text>
    </Pressable>

  </View>
         </View>

          {/* PASSWORD */}

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Password
            </Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="lock-closed-outline"
                size={19}
                color="#718096"
              />

              <TextInput
                style={styles.input}
                placeholder="Create a password"
                placeholderTextColor="#A0AEC0"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />

              <Pressable
                onPress={() =>
                  setShowPassword(!showPassword)
                }
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

          {/* CONFIRM PASSWORD */}

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Confirm password
            </Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="lock-closed-outline"
                size={19}
                color="#718096"
              />

              <TextInput
                style={styles.input}
                placeholder="Confirm your password"
                placeholderTextColor="#A0AEC0"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
                autoCapitalize="none"
              />

              <Pressable
                onPress={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                <Ionicons
                  name={
                    showConfirmPassword
                      ? "eye-off-outline"
                      : "eye-outline"
                  }
                  size={20}
                  color="#718096"
                />
              </Pressable>
            </View>
          </View>

          {/* CREATE ACCOUNT */}

          <Pressable
            style={({ pressed }) => [
              styles.signupButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleSignup}
          >
            <Text style={styles.signupButtonText}>
              Create Account
            </Text>
            

            <Ionicons
              name="arrow-forward"
              size={19}
              color="#FFFFFF"
            />
          </Pressable>

          {/* LOGIN */}

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>
              Already have an account?
            </Text>

            <Pressable
              onPress={() => router.replace("/login")}
            >
              <Text style={styles.loginLink}>
                Sign in
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
    padding: 24,
    paddingBottom: 40,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    alignSelf: "flex-start",
    marginBottom: 20,
  },

  backText: {
    color: "#17324D",
    fontSize: 12,
    fontWeight: "700",
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 25,
  },

  logo: {
    width: 62,
    height: 62,
    borderRadius: 19,
    backgroundColor: "#1976D2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  brandName: {
    fontSize: 23,
    fontWeight: "800",
    color: "#17324D",
  },

  brandSubtitle: {
    fontSize: 11,
    color: "#718096",
    marginTop: 3,
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
    fontSize: 25,
    fontWeight: "800",
    color: "#17324D",
  },

  subtitle: {
    fontSize: 13,
    lineHeight: 20,
    color: "#718096",
    marginTop: 7,
    marginBottom: 23,
  },

  inputGroup: {
    marginBottom: 16,
  },

  label: {
    fontSize: 12,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 8,
  },

  inputContainer: {
    height: 51,
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

  signupButton: {
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

  signupButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginTop: 23,
  },

  loginText: {
    fontSize: 12,
    color: "#718096",
  },

  loginLink: {
    fontSize: 12,
    fontWeight: "800",
    color: "#1976D2",
  },

  security: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 20,
  },

  securityText: {
    fontSize: 10,
    color: "#718096",
  },
  roleContainer: {
  flexDirection: "row",
  gap: 10,
},

roleButton: {
  flex: 1,
  height: 51,
  borderWidth: 1,
  borderColor: "#1976D2",
  borderRadius: 14,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  backgroundColor: "#FFFFFF",
},

roleButtonActive: {
  backgroundColor: "#1976D2",
},

roleButtonText: {
  color: "#1976D2",
  fontSize: 13,
  fontWeight: "700",
},

roleButtonTextActive: {
  color: "#FFFFFF",
},
});