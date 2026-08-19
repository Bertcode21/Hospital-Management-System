import React, { useEffect, useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  Animated,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Sidebar from "./../components/Sidebar";

export default function HomeScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const isMobile = width < 700;
    const { user } = useAuth();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),

      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>

      {/* =====================================================
          LEFT SIDEBAR
      ===================================================== */}

      <Sidebar />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <Animated.View
        style={[
          styles.main,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.scrollContent,
            isMobile && styles.mobileScrollContent,
          ]}
        >

          {/* =================================================
              HEADER
          ================================================= */}

          <View style={styles.header}>

            <View style={styles.headerLeft}>

              <Text style={styles.greeting}>
                Welcome back 👋
              </Text>

              <Text style={styles.headerTitle}>
                Good morning, {user?.firstName || user?.name || "Admin"}
              </Text>

              <Text style={styles.headerSubtitle}>
                Here's what's happening in your hospital today.
              </Text>

            </View>

            <View style={styles.headerRight}>

              {/* SEARCH */}

              {!isMobile && (
                <Pressable
                  style={styles.searchButton}
                  onPress={() => router.push("/patients")}
                >
                  <Ionicons
                    name="search-outline"
                    size={20}
                    color="#64748B"
                  />

                  <Text style={styles.searchText}>
                    Search patients
                  </Text>
                </Pressable>
              )}

              {/* NOTIFICATION */}

              <Pressable
                style={({ pressed }) => [
                  styles.headerIcon,
                  pressed && styles.pressed,
                ]}
                onPress={() => router.push("/appointments")}
              >
                <Ionicons
                  name="notifications-outline"
                  size={22}
                  color="#17324D"
                />

                <View style={styles.notificationDot} />
              </Pressable>

              {/* PROFILE */}

              <Pressable
                style={styles.user}
                onPress={() => router.push("/profile")}
              >

                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>
                    {(user?.firstName || user?.name || 'A')
                    .charAt(0).toUpperCase()
                    }
                  </Text>
                </View>

                {!isMobile && (
                  <View>
                    <Text style={styles.userName}>
                      {user?.name ||
                      `${user?.firstName || ""} ${user?.lastName || ""}`.trim() ||
                       "Admin"}
                    </Text>

                    <Text style={styles.userRole}>
                      {user?.role || "Administrator"}
                    </Text>
                  </View>
                )}

                {!isMobile && (
                  <Ionicons
                    name="chevron-down"
                    size={16}
                    color="#718096"
                  />
                )}

              </Pressable>

            </View>
          </View>


          {/* =================================================
              HERO
          ================================================= */}

          <View style={styles.hero}>

            <Image
              source={require("../assets/images/hospital-hero.jpg")}
              style={styles.heroImage}
              resizeMode="cover"
            />

            <LinearGradient
              colors={[
                "rgba(13,71,161,0.94)",
                "rgba(25,118,210,0.78)",
                "rgba(0,168,150,0.40)",
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.heroGradient}
            />

            <View style={styles.heroContent}>

              <View style={styles.heroBadge}>

                <Ionicons
                  name="shield-checkmark"
                  size={15}
                  color="#FFFFFF"
                />

                <Text style={styles.heroBadgeText}>
                  HOSPITAL OPERATIONS
                </Text>

              </View>

              <Text style={styles.heroTitle}>
                Better care starts with{"\n"}
                better information.
              </Text>

              <Text style={styles.heroDescription}>
                Manage patients, appointments, doctors,
                beds and hospital operations from one
                powerful platform.
              </Text>

              <Pressable
                style={({ pressed }) => [
                  styles.heroButton,
                  pressed && styles.pressed,
                ]}
                onPress={() => router.push("/appointments")}
              >

                <Text style={styles.heroButtonText}>
                  View today's schedule
                </Text>

                <Ionicons
                  name="arrow-forward"
                  size={17}
                  color="#1976D2"
                />

              </Pressable>

            </View>

            <View style={styles.heroDecoration}>
              <Ionicons
                name="medical"
                size={120}
                color="rgba(255,255,255,0.10)"
              />
            </View>

          </View>


          {/* =================================================
              OVERVIEW
          ================================================= */}

          <View style={styles.sectionHeader}>

            <View>

              <Text style={styles.sectionTitle}>
                Today's Overview
              </Text>

              <Text style={styles.sectionSubtitle}>
                Hospital statistics
              </Text>

            </View>

            <Pressable
              onPress={() => router.push("/billing")}
            >
              <Text style={styles.viewAll}>
                View reports
              </Text>
            </Pressable>

          </View>


          {/* =================================================
              STAT CARDS
          ================================================= */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.statsContainer}
          >

            <StatCard
              icon="people"
              title="Total Patients"
              value="1,248"
              change="+12.5%"
              color="#1976D2"
              background="#EAF3FF"
              onPress={() => router.push("/patients")}
            />

            <StatCard
              icon="calendar"
              title="Appointments"
              value="48"
              change="+8.2%"
              color="#00A896"
              background="#E6F8F5"
              onPress={() => router.push("/appointments")}
            />

            <StatCard
              icon="medkit"
              title="Doctors On Duty"
              value="24"
              change="4 available"
              color="#8B5CF6"
              background="#F1ECFF"
              onPress={() => router.push("/doctors")}
            />

            <StatCard
              icon="bed"
              title="Available Beds"
              value="18"
              change="72% occupied"
              color="#F59E0B"
              background="#FFF7E6"
              onPress={() => router.push("/admissions")}
            />

          </ScrollView>


          {/* =================================================
              DASHBOARD GRID
          ================================================= */}

          <View
            style={[
              styles.dashboardGrid,
              isMobile && styles.dashboardMobile,
            ]}
          >

            {/* =================================================
                APPOINTMENTS
            ================================================= */}

            <View style={styles.card}>

              <View style={styles.cardHeader}>

                <View>

                  <Text style={styles.cardTitle}>
                    Upcoming Appointments
                  </Text>

                  <Text style={styles.cardSubtitle}>
                    Today's schedule
                  </Text>

                </View>

                <Pressable
                  style={styles.moreButton}
                  onPress={() => router.push("/appointments")}
                >
                  <Ionicons
                    name="ellipsis-horizontal"
                    size={20}
                    color="#64748B"
                  />
                </Pressable>

              </View>


              <Appointment
                time="09:30 AM"
                patient="Sarah Williams"
                doctor="Dr. Michael Johnson"
                department="Cardiology"
                icon="heart"
                color="#EF4444"
                onPress={() => router.push("/appointments")}
              />

              <Appointment
                time="10:45 AM"
                patient="James Anderson"
                doctor="Dr. Emily Carter"
                department="General Medicine"
                icon="medkit"
                color="#1976D2"
                onPress={() => router.push("/appointments")}
              />

              <Appointment
                time="12:15 PM"
                patient="Maria Thompson"
                doctor="Dr. Daniel Smith"
                department="Neurology"
                icon="pulse"
                color="#8B5CF6"
                onPress={() => router.push("/appointments")}
              />

              <Pressable
                style={styles.viewAppointments}
                onPress={() => router.push("/appointments")}
              >

                <Text style={styles.viewAppointmentsText}>
                  View all appointments
                </Text>

                <Ionicons
                  name="arrow-forward"
                  size={16}
                  color="#1976D2"
                />

              </Pressable>

            </View>


            {/* =================================================
                QUICK ACTIONS
            ================================================= */}

            <View style={styles.card}>

              <View style={styles.cardHeader}>

                <View>

                  <Text style={styles.cardTitle}>
                    Quick Actions
                  </Text>

                  <Text style={styles.cardSubtitle}>
                    Common hospital tasks
                  </Text>

                </View>

              </View>


              <View style={styles.quickGrid}>

                <QuickAction
                  icon="person-add"
                  label="Add Patient"
                  color="#1976D2"
                  background="#EAF3FF"
                  onPress={() => router.push("/patients")}
                />

                <QuickAction
                  icon="calendar"
                  label="Appointment"
                  color="#00A896"
                  background="#E6F8F5"
                  onPress={() => router.push("/appointments")}
                />

                <QuickAction
                  icon="document-text"
                  label="Admission"
                  color="#8B5CF6"
                  background="#F1ECFF"
                  onPress={() => router.push("/admissions")}
                />

                <QuickAction
                  icon="medkit"
                  label="Pharmacy"
                  color="#F59E0B"
                  background="#FFF7E6"
                  onPress={() => router.push("/pharmacy")}
                />

                <QuickAction
                  icon="flask"
                  label="Laboratory"
                  color="#EC4899"
                  background="#FCE7F3"
                  onPress={() => router.push("/laboratory")}
                />

                <QuickAction
                  icon="receipt"
                  label="Billing"
                  color="#10B981"
                  background="#E8F8F1"
                  onPress={() => router.push("/billing")}
                />

              </View>

            </View>

          </View>


          {/* =================================================
              CAPACITY ALERT
          ================================================= */}

          <View style={styles.alert}>

            <View style={styles.alertIcon}>
              <Ionicons
                name="warning"
                size={23}
                color="#D97706"
              />
            </View>

            <View style={styles.alertContent}>

              <Text style={styles.alertTitle}>
                Hospital capacity alert
              </Text>

              <Text style={styles.alertText}>
                Ward B is currently at 92% occupancy.
                3 beds are expected to become available today.
              </Text>

            </View>

            <Pressable
              style={styles.alertButton}
              onPress={() => router.push("/admissions")}
            >
              <Text style={styles.alertButtonText}>
                View wards
              </Text>
            </Pressable>

          </View>


          {/* =================================================
              DOCTORS
          ================================================= */}

          <View style={styles.sectionHeader}>

            <View>

              <Text style={styles.sectionTitle}>
                Doctors On Duty
              </Text>

              <Text style={styles.sectionSubtitle}>
                Medical staff currently available
              </Text>

            </View>

            <Pressable
              onPress={() => router.push("/doctors")}
            >
              <Text style={styles.viewAll}>
                View all
              </Text>
            </Pressable>

          </View>


          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.doctors}
          >

            <DoctorCard
              name="Dr. Michael Johnson"
              specialty="Cardiology"
              initials="MJ"
              color="#1976D2"
              onPress={() => router.push("/doctors")}
            />

            <DoctorCard
              name="Dr. Emily Carter"
              specialty="General Medicine"
              initials="EC"
              color="#00A896"
              onPress={() => router.push("/doctors")}
            />

            <DoctorCard
              name="Dr. Daniel Smith"
              specialty="Neurology"
              initials="DS"
              color="#8B5CF6"
              onPress={() => router.push("/doctors")}
            />

            <DoctorCard
              name="Dr. Sarah Brown"
              specialty="Pediatrics"
              initials="SB"
              color="#EC4899"
              onPress={() => router.push("/doctors")}
            />

          </ScrollView>

          <View style={{ height: 50 }} />

        </ScrollView>
      </Animated.View>
    </View>
  );
}


/* ============================================================
   STAT CARD
============================================================ */

function StatCard({
  icon,
  title,
  value,
  change,
  color,
  background,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  value: string;
  change: string;
  color: string;
  background: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.statCard,
        pressed && styles.cardPressed,
      ]}
    >

      <View
        style={[
          styles.statIcon,
          { backgroundColor: background },
        ]}
      >
        <Ionicons
          name={icon}
          size={22}
          color={color}
        />
      </View>

      <Text style={styles.statTitle}>
        {title}
      </Text>

      <Text style={styles.statValue}>
        {value}
      </Text>

      <View style={styles.statChange}>

        <Ionicons
          name="trending-up"
          size={13}
          color="#10B981"
        />

        <Text style={styles.statChangeText}>
          {change}
        </Text>

      </View>

      <View style={styles.tapHint}>
        <Text style={styles.tapHintText}>
          Tap to view
        </Text>

        <Ionicons
          name="arrow-forward"
          size={11}
          color="#94A3B8"
        />
      </View>

    </Pressable>
  );
}


/* ============================================================
   APPOINTMENT
============================================================ */

function Appointment({
  time,
  patient,
  doctor,
  department,
  icon,
  color,
  onPress,
}: {
  time: string;
  patient: string;
  doctor: string;
  department: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.appointment,
        pressed && styles.rowPressed,
      ]}
    >

      <View style={styles.time}>
        <Text style={styles.timeText}>
          {time}
        </Text>
      </View>

      <View
        style={[
          styles.appointmentIcon,
          {
            backgroundColor: `${color}18`,
          },
        ]}
      >
        <Ionicons
          name={icon}
          size={19}
          color={color}
        />
      </View>

      <View style={styles.appointmentInfo}>

        <Text style={styles.patientName}>
          {patient}
        </Text>

        <Text style={styles.doctorName}>
          {doctor}
        </Text>

        <Text
          style={[
            styles.department,
            { color },
          ]}
        >
          {department}
        </Text>

      </View>

      <Ionicons
        name="chevron-forward"
        size={17}
        color="#CBD5E1"
      />

    </Pressable>
  );
}


/* ============================================================
   QUICK ACTION
============================================================ */

function QuickAction({
  icon,
  label,
  color,
  background,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  color: string;
  background: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.quickAction,
        {
          backgroundColor: background,
        },
        pressed && {
          opacity: 0.65,
          transform: [{ scale: 0.96 }],
        },
      ]}
    >

      <View
        style={[
          styles.quickIconCircle,
          { backgroundColor: `${color}20` },
        ]}
      >
        <Ionicons
          name={icon}
          size={22}
          color={color}
        />
      </View>

      <Text
        style={[
          styles.quickActionText,
          { color },
        ]}
      >
        {label}
      </Text>

    </Pressable>
  );
}


/* ============================================================
   DOCTOR CARD
============================================================ */

function DoctorCard({
  name,
  specialty,
  initials,
  color,
  onPress,
}: {
  name: string;
  specialty: string;
  initials: string;
  color: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.doctorCard,
        pressed && styles.cardPressed,
      ]}
    >

      <View
        style={[
          styles.doctorAvatar,
          {
            backgroundColor: `${color}18`,
          },
        ]}
      >
        <Text
          style={[
            styles.doctorInitials,
            { color },
          ]}
        >
          {initials}
        </Text>
      </View>

      <Text style={styles.doctorCardName}>
        {name}
      </Text>

      <Text style={styles.doctorSpecialty}>
        {specialty}
      </Text>

      <View style={styles.available}>

        <View style={styles.availableDot} />

        <Text style={styles.availableText}>
          Available
        </Text>

      </View>

      <View style={styles.doctorArrow}>
        <Ionicons
          name="arrow-forward"
          size={15}
          color={color}
        />
      </View>

    </Pressable>
  );
}


/* ============================================================
   STYLES
============================================================ */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#F5F8FC",
  },

  main: {
    flex: 1,
  },

  scrollContent: {
    padding: 30,
  },

  mobileScrollContent: {
    padding: 16,
  },


  /* ========================================================
     HEADER
  ======================================================== */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  headerLeft: {
    flex: 1,
  },

  greeting: {
    color: "#1976D2",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 4,
  },

  headerTitle: {
    color: "#17324D",
    fontSize: 25,
    fontWeight: "800",
  },

  headerSubtitle: {
    color: "#718096",
    fontSize: 13,
    marginTop: 6,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  searchButton: {
    width: 160,
    height: 44,
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    gap: 8,
    borderWidth: 1,
    borderColor: "#E7EDF3",
  },

  searchText: {
    color: "#94A3B8",
    fontSize: 11,
  },

  headerIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },

  notificationDot: {
    position: "absolute",
    right: 10,
    top: 9,
    width: 7,
    height: 7,
    borderRadius: 10,
    backgroundColor: "#EF4444",
  },

  user: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#1976D2",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
  },

  userName: {
    color: "#17324D",
    fontSize: 12,
    fontWeight: "800",
  },

  userRole: {
    color: "#94A3B8",
    fontSize: 10,
    marginTop: 2,
  },


  /* ========================================================
     HERO
  ======================================================== */

  hero: {
    height: 255,
    borderRadius: 25,
    overflow: "hidden",
    marginBottom: 30,
  },

  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },

  heroGradient: {
    ...StyleSheet.absoluteFillObject,
  },

  heroContent: {
    padding: 28,
    maxWidth: 620,
  },

  heroBadge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(255,255,255,0.17)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 13,
  },

  heroBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 27,
    lineHeight: 34,
    fontWeight: "800",
  },

  heroDescription: {
    color: "rgba(255,255,255,0.88)",
    fontSize: 12,
    lineHeight: 19,
    marginTop: 8,
    maxWidth: 500,
  },

  heroButton: {
    alignSelf: "flex-start",
    marginTop: 17,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  heroButtonText: {
    color: "#1976D2",
    fontSize: 11,
    fontWeight: "800",
  },

  heroDecoration: {
    position: "absolute",
    right: 35,
    bottom: 10,
  },


  /* ========================================================
     SECTIONS
  ======================================================== */

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  sectionTitle: {
    color: "#17324D",
    fontSize: 18,
    fontWeight: "800",
  },

  sectionSubtitle: {
    color: "#94A3B8",
    fontSize: 11,
    marginTop: 3,
  },

  viewAll: {
    color: "#1976D2",
    fontSize: 12,
    fontWeight: "700",
  },


  /* ========================================================
     STAT CARDS
  ======================================================== */

  statsContainer: {
    gap: 14,
    paddingBottom: 8,
  },

  statCard: {
    width: 205,
    minHeight: 175,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    elevation: 2,
  },

  statIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  statTitle: {
    color: "#718096",
    fontSize: 11,
    fontWeight: "600",
  },

  statValue: {
    color: "#17324D",
    fontSize: 26,
    fontWeight: "800",
    marginTop: 3,
  },

  statChange: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 5,
  },

  statChangeText: {
    color: "#10B981",
    fontSize: 10,
    fontWeight: "700",
  },

  tapHint: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 10,
  },

  tapHintText: {
    color: "#94A3B8",
    fontSize: 9,
  },


  /* ========================================================
     DASHBOARD
  ======================================================== */

  dashboardGrid: {
    flexDirection: "row",
    gap: 18,
    marginTop: 25,
  },

  dashboardMobile: {
    flexDirection: "column",
  },

  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    elevation: 2,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  cardTitle: {
    color: "#17324D",
    fontSize: 16,
    fontWeight: "800",
  },

  cardSubtitle: {
    color: "#94A3B8",
    fontSize: 10,
    marginTop: 3,
  },

  moreButton: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#F5F8FC",
    alignItems: "center",
    justifyContent: "center",
  },


  /* ========================================================
     APPOINTMENTS
  ======================================================== */

  appointment: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  time: {
    width: 67,
  },

  timeText: {
    color: "#64748B",
    fontSize: 10,
    fontWeight: "700",
  },

  appointmentIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  appointmentInfo: {
    flex: 1,
  },

  patientName: {
    color: "#17324D",
    fontSize: 12,
    fontWeight: "800",
  },

  doctorName: {
    color: "#718096",
    fontSize: 10,
    marginTop: 3,
  },

  department: {
    fontSize: 9,
    fontWeight: "700",
    marginTop: 3,
  },

  viewAppointments: {
    backgroundColor: "#EAF3FF",
    borderRadius: 11,
    paddingVertical: 10,
    marginTop: 13,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },

  viewAppointmentsText: {
    color: "#1976D2",
    fontSize: 11,
    fontWeight: "700",
  },


  /* ========================================================
     QUICK ACTIONS
  ======================================================== */

  quickGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  quickAction: {
    width: "31%",
    minHeight: 90,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },

  quickIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  quickActionText: {
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 7,
  },


  /* ========================================================
     ALERT
  ======================================================== */

  alert: {
    marginTop: 20,
    padding: 16,
    borderRadius: 18,
    backgroundColor: "#FFF8E8",
    borderWidth: 1,
    borderColor: "#FDE7B2",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  alertIcon: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: "#FEF0C7",
    alignItems: "center",
    justifyContent: "center",
  },

  alertContent: {
    flex: 1,
  },

  alertTitle: {
    color: "#92400E",
    fontSize: 13,
    fontWeight: "800",
  },

  alertText: {
    color: "#A16207",
    fontSize: 10,
    lineHeight: 15,
    marginTop: 3,
  },

  alertButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },

  alertButtonText: {
    color: "#B45309",
    fontSize: 10,
    fontWeight: "700",
  },


  /* ========================================================
     DOCTORS
  ======================================================== */

  doctors: {
    gap: 14,
    paddingBottom: 15,
  },

  doctorCard: {
    width: 190,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    elevation: 2,
  },

  doctorAvatar: {
    width: 55,
    height: 55,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  doctorInitials: {
    fontSize: 17,
    fontWeight: "800",
  },

  doctorCardName: {
    color: "#17324D",
    fontSize: 12,
    fontWeight: "800",
  },

  doctorSpecialty: {
    color: "#718096",
    fontSize: 10,
    marginTop: 4,
  },

  available: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
  },

  availableDot: {
    width: 7,
    height: 7,
    borderRadius: 10,
    backgroundColor: "#10B981",
  },

  availableText: {
    color: "#10B981",
    fontSize: 9,
    fontWeight: "700",
  },

  doctorArrow: {
    position: "absolute",
    right: 15,
    bottom: 15,
  },


  /* ========================================================
     PRESS EFFECTS
  ======================================================== */

  pressed: {
    opacity: 0.65,
    transform: [{ scale: 0.97 }],
  },

  cardPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  rowPressed: {
    opacity: 0.65,
    backgroundColor: "#F8FAFC",
  },
});