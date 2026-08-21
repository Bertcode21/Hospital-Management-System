import { Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import {
  View,
  Pressable,
  StyleSheet,
  Text,
  Platform,
} from "react-native";

type MenuItem = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
};

const menuItems: MenuItem[] = [
  {
    label: "Home",
    icon: "home",
    route: "/admin/dashboard",
  },
  {
    label: "Patients",
    icon: "people",
    route: "/admin/patients",
  },
  {
    label: "Appointments",
    icon: "calendar",
    route: "/admin/appointments",
  },
  {
    label: "Doctors",
    icon: "medkit",
    route: "/admin/doctors",
  },
  {
    label: "Pharmacy",
    icon: "medical",
    route: "/admin/pharmacy",
  },
  {
    label: "Laboratory",
    icon: "flask",
    route: "/admin/laboratory",
  },
  {
    label: "Admissions",
    icon: "bed",
    route: "/admin/admissions",
  },
  {
    label: "Billing",
    icon: "card",
    route: "/admin/billing",
  },
  {
    label: "Profile",
    icon: "person",
    route: "/admin/profile",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <View style={styles.sidebar}>
      {/* Hospital Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Ionicons name="medical" size={24} color="#FFFFFF" />
        </View>

        {Platform.OS === "web" && (
          <Text style={styles.logoText}>MediCare</Text>
        )}
      </View>

      {/* Navigation */}
      <View style={styles.menu}>
        {menuItems.map((item) => {
          const active =
            item.route === "/"
              ? pathname === "/"
              : pathname.startsWith(item.route);

          return (
            <Pressable
              key={item.route}
              onPress={() => router.push(item.route as any)}
              style={({ pressed }) => [
                styles.menuItem,
                active && styles.activeItem,
                pressed && styles.pressedItem,
              ]}
            >
              <View
                style={[
                  styles.iconContainer,
                  active && styles.activeIconContainer,
                ]}
              >
                <Ionicons
                  name={item.icon}
                  size={22}
                  color={active ? "#1976D2" : "#718096"}
                />
              </View>

              {Platform.OS === "web" && (
                <Text
                  style={[
                    styles.label,
                    active && styles.activeLabel,
                  ]}
                >
                  {item.label}
                </Text>
              )}
            </Pressable>
          );
        })}
      </View>

      {/* Bottom section */}
      <Pressable
        onPress={() => router.push("/admin/profile")}
        style={styles.bottomItem}
      >
        <Ionicons
          name="settings-outline"
          size={22}
          color="#718096"
        />

        {Platform.OS === "web" && (
          <Text style={styles.label}>Settings</Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: Platform.OS === "web" ? 230 : 68,
    backgroundColor: "#FFFFFF",

    borderRightWidth: 1,
    borderRightColor: "#E5EAF0",

    paddingTop: 20,
    paddingBottom: 20,

    elevation: 10,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 3,
      height: 0,
    },

    zIndex: 10,
  },

  logoContainer: {
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Platform.OS === "web" ? 20 : 0,
    justifyContent:
      Platform.OS === "web" ? "flex-start" : "center",

    marginBottom: 25,
  },

  logoCircle: {
    width: 42,
    height: 42,
    borderRadius: 13,

    backgroundColor: "#1976D2",

    alignItems: "center",
    justifyContent: "center",
  },

  logoText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "800",
    color: "#17324D",
  },

  menu: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    gap: 6,
  },

  menuItem: {
    width: Platform.OS === "web" ? 205 : 50,
    minHeight: 48,

    borderRadius: 12,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: Platform.OS === "web" ? 12 : 0,

    justifyContent:
      Platform.OS === "web"
        ? "flex-start"
        : "center",
  },

  iconContainer: {
    width: 40,
    height: 40,

    borderRadius: 11,

    alignItems: "center",
    justifyContent: "center",
  },

  activeItem: {
    backgroundColor: "#EAF3FF",
  },

  activeIconContainer: {
    backgroundColor: "#DCEEFF",
  },

  pressedItem: {
    opacity: 0.65,
    transform: [{ scale: 0.97 }],
  },

  label: {
    marginLeft: 10,

    fontSize: 13,
    fontWeight: "600",

    color: "#718096",
  },

  activeLabel: {
    color: "#1976D2",
    fontWeight: "700",
  },

  bottomItem: {
    width: Platform.OS === "web" ? 205 : 50,
    minHeight: 48,

    borderRadius: 12,

    flexDirection: "row",
    alignItems: "center",
    justifyContent:
      Platform.OS === "web"
        ? "flex-start"
        : "center",

    paddingHorizontal: Platform.OS === "web" ? 12 : 0,
  },
});