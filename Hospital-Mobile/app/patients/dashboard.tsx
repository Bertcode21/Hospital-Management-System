import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PatientDashboard() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Welcome back 👋</Text>
          <Text style={styles.title}>Patient Dashboard</Text>
        </View>

        <View style={styles.profileIcon}>
          <Ionicons name="person" size={24} color="#fff" />
        </View>
      </View>

      {/* Welcome Card */}
      <View style={styles.welcomeCard}>
        <View style={styles.cardIcon}>
          <Ionicons name="medical" size={30} color="#fff" />
        </View>

        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Your Health Matters</Text>
          <Text style={styles.cardSubtitle}>
            Manage your appointments and health information.
          </Text>
        </View>
      </View>

      {/* Statistics */}
      <Text style={styles.sectionTitle}>Overview</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="calendar-outline" size={30} color="#2563eb" />
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Appointments</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="document-text-outline" size={30} color="#16a34a" />
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Medical Records</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="medkit-outline" size={30} color="#dc2626" />
          <Text style={styles.statNumber}>2</Text>
          <Text style={styles.statLabel}>Prescriptions</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="notifications-outline" size={30} color="#ca8a04" />
          <Text style={styles.statNumber}>1</Text>
          <Text style={styles.statLabel}>Notifications</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <View style={styles.actionsContainer}>
        <Pressable style={styles.actionButton}>
          <Ionicons name="calendar" size={25} color="#2563eb" />
          <Text style={styles.actionText}>Book Appointment</Text>
        </Pressable>

        <Pressable style={styles.actionButton}>
          <Ionicons name="document-text" size={25} color="#16a34a" />
          <Text style={styles.actionText}>Medical Records</Text>
        </Pressable>

        <Pressable style={styles.actionButton}>
          <Ionicons name="person" size={25} color="#9333ea" />
          <Text style={styles.actionText}>My Profile</Text>
        </Pressable>

        <Pressable style={styles.actionButton}>
          <Ionicons name="help-circle" size={25} color="#ea580c" />
          <Text style={styles.actionText}>Contact Hospital</Text>
        </Pressable>
      </View>

      {/* Test Message */}
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7fb",
  },

  header: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  welcome: {
    color: "#dbeafe",
    fontSize: 14,
    marginBottom: 5,
  },

  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },

  profileIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#1d4ed8",
    justifyContent: "center",
    alignItems: "center",
  },

  welcomeCard: {
    margin: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },

  cardIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  cardText: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 5,
  },

  cardSubtitle: {
    color: "#6b7280",
    fontSize: 13,
    lineHeight: 19,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginHorizontal: 20,
    marginBottom: 12,
    marginTop: 5,
  },

  statsContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 5,
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  statNumber: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 8,
  },

  statLabel: {
    color: "#6b7280",
    fontSize: 12,
    textAlign: "center",
    marginTop: 3,
  },

  actionsContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },

  actionButton: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  actionText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1f2937",
    marginLeft: 15,
  },

  testBox: {
    marginHorizontal: 20,
    marginBottom: 40,
    padding: 18,
    backgroundColor: "#dcfce7",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  testTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#166534",
  },

  testText: {
    fontSize: 13,
    color: "#15803d",
    marginTop: 4,
  },
});