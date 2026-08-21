import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />

        <Stack.Screen name="admin/dashboard" />
        <Stack.Screen name="doctors/dashboard" />
        <Stack.Screen name="patients/dashboard" />
      </Stack>
    </AuthProvider>
  );
}