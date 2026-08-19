import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  unread?: boolean;
};

const notifications: Notification[] = [
  {
    id: "1",
    title: "Appointment Reminder",
    message: "You have an appointment with Dr. Michael today.",
    time: "10 min ago",
    icon: "calendar-outline",
    color: "#1976D2",
    unread: true,
  },
  {
    id: "2",
    title: "Laboratory Results",
    message: "Your laboratory results are now available.",
    time: "1 hour ago",
    icon: "flask-outline",
    color: "#8B5CF6",
    unread: true,
  },
  {
    id: "3",
    title: "Prescription Updated",
    message: "Your prescription has been updated by your doctor.",
    time: "3 hours ago",
    icon: "medkit-outline",
    color: "#00A896",
  },
  {
    id: "4",
    title: "Payment Confirmation",
    message: "Your hospital payment was successfully processed.",
    time: "Yesterday",
    icon: "checkmark-circle-outline",
    color: "#10B981",
  },
];

export default function Notifications() {
  const unreadCount = notifications.filter(
    (item) => item.unread
  ).length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Notifications</Text>

          {unreadCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {unreadCount}
              </Text>
            </View>
          )}
        </View>

        <Pressable>
          <Text style={styles.markRead}>
            Mark all as read
          </Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
        >
          {notifications.map((notification, index) => (
            <Pressable
              key={notification.id}
              style={({ pressed }) => [
                styles.notification,
                index !== notifications.length - 1 &&
                  styles.borderBottom,
                notification.unread && styles.unread,
                pressed && styles.pressed,
              ]}
            >
              <View
                style={[
                  styles.iconContainer,
                  {
                    backgroundColor:
                      `${notification.color}15`,
                  },
                ]}
              >
                <Ionicons
                  name={notification.icon}
                  size={21}
                  color={notification.color}
                />
              </View>

              <View style={styles.content}>
                <View style={styles.titleRow}>
                  <Text style={styles.notificationTitle}>
                    {notification.title}
                  </Text>

                  {notification.unread && (
                    <View style={styles.unreadDot} />
                  )}
                </View>

                <Text style={styles.message}>
                  {notification.message}
                </Text>

                <Text style={styles.time}>
                  {notification.time}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={16}
                color="#CBD5E1"
              />
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#17324D",
  },

  badge: {
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#EF4444",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
  },

  markRead: {
    color: "#1976D2",
    fontSize: 11,
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 18,
    elevation: 2,
  },

  notification: {
    minHeight: 90,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    gap: 12,
  },

  unread: {
    backgroundColor: "#FAFCFF",
  },

  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 1,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  notificationTitle: {
    color: "#17324D",
    fontSize: 12,
    fontWeight: "800",
  },

  unreadDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: "#1976D2",
  },

  message: {
    color: "#718096",
    fontSize: 10,
    lineHeight: 15,
    marginTop: 4,
  },

  time: {
    color: "#94A3B8",
    fontSize: 9,
    marginTop: 4,
  },

  pressed: {
    opacity: 0.65,
  },
});