import {View, Text, StyleSheet } from 'react-native';
export default function Screen(){
    return (
        <View style={styles.container}> 
         <View style={styles.card}>
            <Text style={styles.icon}>🧪</Text>

              <Text style={styles.title}>Laboratory' Page</Text>

        <Text style={styles.subtitle}>
         Check labs,  
      Manage laboratory services
        </Text>

        <Text style={styles.demo}>
          get most of the laboratory, this are some of our laboratories here,
          Laboratory tests, test requests, results,
          and patient laboratory records will appear here
        </Text>
         </View>
        </View>
        
    )
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

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },
    icon: {
        fontSize: 48,
        textAlign: 'center',
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

})