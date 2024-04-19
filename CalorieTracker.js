import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalorieTracker = () => {
  // Dummy data for calorie intake and expenditure
  const dailyCalorieIntake = 2000;
  const monthlyCalorieIntake = 60000;
  const monthlyExpenditure = 55000;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calorie Tracker</Text>

      {/* Calorie intake of the day */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Calorie Intake Today</Text>
        <Text style={styles.data}>{dailyCalorieIntake} calories</Text>
      </View>

      {/* Calorie intake of the month */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Calorie Intake This Month</Text>
        <Text style={styles.data}>{monthlyCalorieIntake} calories</Text>
      </View>

      {/* Monthly expenditure */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Monthly Expenditure</Text>
        <Text style={styles.data}>{monthlyExpenditure} calories</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', 
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', 
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#666', 
  },
  data: {
    fontSize: 16,
    color: '#333', 
  },
});

export default CalorieTracker;
