import { View, Text, StyleSheet } from 'react-native';

export default function BillingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.icon}>🛏️</Text>

        <Text style={styles.title}>Admitted Patients</Text>

        <Text style={styles.subtitle}>
          Manage Admitted Patients who are loghing in the hospita;
        </Text>

        <Text style={styles.demo}>
          those who are admitted can get a room, these are those who were admitted by the hospital 
          based on their treatement
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  icon: {
    fontSize: 50,
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#123B5D',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E86AB',
    textAlign: 'center',
    marginBottom: 15,
  },
  demo: {
    fontSize: 14,
    lineHeight: 22,
    color: '#6B7280',
    textAlign: 'center',
  },
});