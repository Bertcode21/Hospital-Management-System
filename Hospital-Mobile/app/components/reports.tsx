import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ReportItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
};

const reports: ReportItem[] = [
  {
    id: "1",
    title: "Medical Report",
    description: "Latest medical examination report",
    date: "Today",
    icon: "document-text-outline",
    color: "#1976D2",
  },
  {
    id: "2",
    title: "Laboratory Report",
    description: "Blood and laboratory test results",
    date: "Yesterday",
    icon: "flask-outline",
    color: "#8B5CF6",
  },
  {
    id: "3",
    title: "Prescription Report",
    description: "Current medication and prescriptions",
    date: "Aug 15, 2026",
    icon: "medkit-outline",
    color: "#00A896",
  },
  {
    id: "4",
    title: "Billing Report",
    description: "Recent hospital billing information",
    date: "Aug 14, 2026",
    icon: "receipt-outline",
    color: "#F59E0B",
  },
];

export default function Reports() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Reports</Text>
          <Text style={styles.subtitle}>
            Medical and hospital reports
          </Text>
        </View>

        <Pressable style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View all</Text>
          <Ionicons
            name="arrow-forward"
            size={15}
            color="#1976D2"
          />
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {reports.map((report) => (
          <Pressable
            key={report.id}
            style={({ pressed }) => [
              styles.reportCard,
              pressed && styles.pressed,
            ]}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: `${report.color}15` },
              ]}
            >
              <Ionicons
                name={report.icon}
                size={23}
                color={report.color}
              />
            </View>

            <Text style={styles.reportTitle}>
              {report.title}
            </Text>

            <Text style={styles.description}>
              {report.description}
            </Text>

            <View style={styles.footer}>
              <Text style={styles.date}>{report.date}</Text>

              <View
                style={[
                  styles.arrow,
                  { backgroundColor: `${report.color}15` },
                ]}
              >
                <Ionicons
                  name="chevron-forward"
                  size={14}
                  color={report.color}
                />
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
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

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#17324D",
  },

  subtitle: {
    fontSize: 11,
    color: "#94A3B8",
    marginTop: 3,
  },

  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  viewAllText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#1976D2",
  },

  list: {
    gap: 14,
    paddingBottom: 5,
  },

  reportCard: {
    width: 220,
    minHeight: 165,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    elevation: 2,
  },

  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  reportTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#17324D",
  },

  description: {
    fontSize: 10,
    color: "#718096",
    lineHeight: 15,
    marginTop: 5,
  },

  footer: {
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  date: {
    fontSize: 9,
    color: "#94A3B8",
    fontWeight: "600",
  },

  arrow: {
    width: 28,
    height: 28,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
});