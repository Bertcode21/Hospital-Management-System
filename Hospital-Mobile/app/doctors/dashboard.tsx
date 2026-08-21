import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function DoctorDashboard() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>
              Good morning
            </Text>

            <Text style={styles.doctorName}>
              Dr. Sarah Williams
            </Text>

            <Text style={styles.specialization}>
              Cardiologist
            </Text>
          </View>

          <Pressable style={styles.notificationButton}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="#FFFFFF"
            />

            <View style={styles.notificationDot} />
          </Pressable>
        </View>

        {/* DOCTOR PROFILE */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Ionicons
              name="medical"
              size={30}
              color="#1976D2"
            />
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>
              Dr. Sarah Williams
            </Text>

            <Text style={styles.profileDetails}>
              Cardiologist • ID: DOC-001
            </Text>

            <View style={styles.statusContainer}>
              <View style={styles.statusDot} />

              <Text style={styles.statusText}>
                Available for consultation
              </Text>
            </View>
          </View>
        </View>

        {/* STATISTICS */}
        <Text style={styles.sectionTitle}>
          Today's Overview
        </Text>

        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons
                name="people-outline"
                size={23}
                color="#1976D2"
              />
            </View>

            <Text style={styles.statValue}>
              24
            </Text>

            <Text style={styles.statLabel}>
              Total Patients
            </Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons
                name="calendar-outline"
                size={23}
                color="#00A896"
              />
            </View>

            <Text style={styles.statValue}>
              8
            </Text>

            <Text style={styles.statLabel}>
              Appointments
            </Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons
                name="document-text-outline"
                size={23}
                color="#F59E0B"
              />
            </View>

            <Text style={styles.statValue}>
              5
            </Text>

            <Text style={styles.statLabel}>
              Records Today
            </Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Ionicons
                name="time-outline"
                size={23}
                color="#8B5CF6"
              />
            </View>

            <Text style={styles.statValue}>
              6h
            </Text>

            <Text style={styles.statLabel}>
              Consultation Time
            </Text>
          </View>
        </View>

        {/* QUICK ACTIONS */}
        <Text style={styles.sectionTitle}>
          Quick Actions
        </Text>

        <View style={styles.quickActions}>
          <Pressable style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Ionicons
                name="people-outline"
                size={25}
                color="#1976D2"
              />
            </View>

            <Text style={styles.actionTitle}>
              My Patients
            </Text>

            <Text style={styles.actionSubtitle}>
              View patient list
            </Text>
          </Pressable>

          <Pressable style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Ionicons
                name="calendar-outline"
                size={25}
                color="#00A896"
              />
            </View>

            <Text style={styles.actionTitle}>
              Appointments
            </Text>

            <Text style={styles.actionSubtitle}>
              Manage schedule
            </Text>
          </Pressable>

          <Pressable style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Ionicons
                name="document-text-outline"
                size={25}
                color="#F59E0B"
              />
            </View>

            <Text style={styles.actionTitle}>
              Medical Records
            </Text>

            <Text style={styles.actionSubtitle}>
              Patient records
            </Text>
          </Pressable>

          <Pressable style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Ionicons
                name="medkit-outline"
                size={25}
                color="#8B5CF6"
              />
            </View>

            <Text style={styles.actionTitle}>
              Prescriptions
            </Text>

            <Text style={styles.actionSubtitle}>
              Manage medicines
            </Text>
          </Pressable>
        </View>

        {/* TODAY'S APPOINTMENTS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Today's Appointments
          </Text>

          <Pressable>
            <Text style={styles.viewAll}>
              View all
            </Text>
          </Pressable>
        </View>

        {/* APPOINTMENT 1 */}
        <View style={styles.appointmentCard}>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>
              09:00
            </Text>

            <Text style={styles.am}>
              AM
            </Text>
          </View>

          <View style={styles.appointmentDivider} />

          <View style={styles.patientInfo}>
            <Text style={styles.patientName}>
              John Doe
            </Text>

            <Text style={styles.patientType}>
              Follow-up Consultation
            </Text>

            <View style={styles.patientDetails}>
              <Ionicons
                name="person-outline"
                size={13}
                color="#718096"
              />

              <Text style={styles.detailText}>
                PT-2026-001
              </Text>
            </View>
          </View>

          <View style={styles.confirmedBadge}>
            <Text style={styles.confirmedText}>
              Confirmed
            </Text>
          </View>
        </View>

        {/* APPOINTMENT 2 */}
        <View style={styles.appointmentCard}>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>
              10:30
            </Text>

            <Text style={styles.am}>
              AM
            </Text>
          </View>

          <View style={styles.appointmentDivider} />

          <View style={styles.patientInfo}>
            <Text style={styles.patientName}>
              Mary Johnson
            </Text>

            <Text style={styles.patientType}>
              Cardiac Examination
            </Text>

            <View style={styles.patientDetails}>
              <Ionicons
                name="person-outline"
                size={13}
                color="#718096"
              />

              <Text style={styles.detailText}>
                PT-2026-002
              </Text>
            </View>
          </View>

          <View style={styles.pendingBadge}>
            <Text style={styles.pendingText}>
              Pending
            </Text>
          </View>
        </View>

        {/* APPOINTMENT 3 */}
        <View style={styles.appointmentCard}>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>
              01:00
            </Text>

            <Text style={styles.am}>
              PM
            </Text>
          </View>

          <View style={styles.appointmentDivider} />

          <View style={styles.patientInfo}>
            <Text style={styles.patientName}>
              Michael Brown
            </Text>

            <Text style={styles.patientType}>
              Blood Pressure Review
            </Text>

            <View style={styles.patientDetails}>
              <Ionicons
                name="person-outline"
                size={13}
                color="#718096"
              />

              <Text style={styles.detailText}>
                PT-2026-003
              </Text>
            </View>
          </View>

          <View style={styles.confirmedBadge}>
            <Text style={styles.confirmedText}>
              Confirmed
            </Text>
          </View>
        </View>

        {/* PATIENT ALERT */}
        <Text style={styles.sectionTitle}>
          Patient Alerts
        </Text>

        <View style={styles.alertCard}>
          <View style={styles.alertIcon}>
            <Ionicons
              name="alert-circle-outline"
              size={23}
              color="#F59E0B"
            />
          </View>

          <View style={styles.alertInfo}>
            <Text style={styles.alertTitle}>
              Patient requires attention
            </Text>

            <Text style={styles.alertDescription}>
              Mary Johnson has a pending cardiac report.
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={19}
            color="#A0AEC0"
          />
        </View>

        {/* LOGOUT */}
        <Pressable
          style={styles.logoutButton}
          onPress={() => router.replace("/login")}
        >
          <Ionicons
            name="log-out-outline"
            size={20}
            color="#EF4444"
          />

          <Text style={styles.logoutText}>
            Logout
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FC",
  },

  scrollContent: {
    paddingBottom: 40,
  },

  header: {
    backgroundColor: "#1976D2",
    paddingHorizontal: 22,
    paddingTop: 55,
    paddingBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  welcome: {
    color: "#DCEBFA",
    fontSize: 13,
  },

  doctorName: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    marginTop: 3,
  },

  specialization: {
    color: "#DCEBFA",
    fontSize: 11,
    marginTop: 3,
  },

  notificationButton: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },

  notificationDot: {
    position: "absolute",
    top: 9,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#EF4444",
  },

  profileCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 18,
    marginTop: -20,
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
  },

  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#E8F2FC",
    alignItems: "center",
    justifyContent: "center",
  },

  profileInfo: {
    flex: 1,
    marginLeft: 14,
  },

  profileName: {
    fontSize: 17,
    fontWeight: "800",
    color: "#17324D",
  },

  profileDetails: {
    fontSize: 11,
    color: "#718096",
    marginTop: 4,
  },

  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#00A896",
    marginRight: 5,
  },

  statusText: {
    fontSize: 10,
    color: "#00A896",
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#17324D",
    marginHorizontal: 18,
    marginTop: 25,
    marginBottom: 13,
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
  },

  statCard: {
    width: "46%",
    marginHorizontal: "2%",
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 15,
    elevation: 2,
  },

  statIcon: {
    width: 43,
    height: 43,
    borderRadius: 12,
    backgroundColor: "#E8F2FC",
    alignItems: "center",
    justifyContent: "center",
  },

  statValue: {
    fontSize: 23,
    fontWeight: "800",
    color: "#17324D",
    marginTop: 9,
  },

  statLabel: {
    fontSize: 10,
    color: "#718096",
    marginTop: 3,
  },

  quickActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
  },

  actionCard: {
    width: "46%",
    marginHorizontal: "2%",
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 15,
    elevation: 2,
  },

  actionIcon: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: "#E8F2FC",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },

  actionTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#17324D",
  },

  actionSubtitle: {
    fontSize: 10,
    color: "#718096",
    marginTop: 4,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 18,
  },

  viewAll: {
    color: "#1976D2",
    fontSize: 11,
    fontWeight: "800",
  },

  appointmentCard: {
    marginHorizontal: 18,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  timeContainer: {
    width: 48,
    alignItems: "center",
  },

  time: {
    fontSize: 14,
    fontWeight: "800",
    color: "#17324D",
  },

  am: {
    fontSize: 9,
    color: "#718096",
    marginTop: 2,
  },

  appointmentDivider: {
    width: 1,
    height: 48,
    backgroundColor: "#E3EAF2",
    marginHorizontal: 12,
  },

  patientInfo: {
    flex: 1,
  },

  patientName: {
    fontSize: 13,
    fontWeight: "800",
    color: "#17324D",
  },

  patientType: {
    fontSize: 10,
    color: "#718096",
    marginTop: 4,
  },

  patientDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    gap: 4,
  },

  detailText: {
    fontSize: 9,
    color: "#718096",
  },

  confirmedBadge: {
    backgroundColor: "#E5F7F4",
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 7,
  },

  confirmedText: {
    color: "#00A896",
    fontSize: 8,
    fontWeight: "800",
  },

  pendingBadge: {
    backgroundColor: "#FFF5DD",
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 7,
  },

  pendingText: {
    color: "#F59E0B",
    fontSize: 8,
    fontWeight: "800",
  },

  alertCard: {
    marginHorizontal: 18,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  alertIcon: {
    width: 43,
    height: 43,
    borderRadius: 12,
    backgroundColor: "#FFF5DD",
    alignItems: "center",
    justifyContent: "center",
  },

  alertInfo: {
    flex: 1,
    marginLeft: 12,
  },

  alertTitle: {
    fontSize: 12,
    fontWeight: "800",
    color: "#17324D",
  },

  alertDescription: {
    fontSize: 10,
    color: "#718096",
    marginTop: 4,
  },

  logoutButton: {
    marginHorizontal: 18,
    marginTop: 22,
    height: 50,
    borderRadius: 14,
    backgroundColor: "#FFF1F1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  logoutText: {
    color: "#EF4444",
    fontSize: 13,
    fontWeight: "800",
  },
});