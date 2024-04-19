import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalsAndAchievements = () => {
  // Dummy data for goals
  const dailyGoals = [
    { goal: 'Walk 10,000 steps', achieved: true },
    { goal: 'Drink 8 glasses of water', achieved: false },
    { goal: 'Eat 5 servings of fruits and vegetables', achieved: true },
  ];

  const monthlyGoals = [
    { goal: 'Exercise for 30 minutes every day', achieved: true },
    { goal: 'Limit sugary snacks to once a week', achieved: false },
    { goal: 'Reach target weight', achieved: false },
  ];

  const goalsAchieved = [
    { goal: 'Complete 30-day fitness challenge', date: '2024-04-15' },
    { goal: 'Run 5k marathon', date: '2024-03-20' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Goals and Achievements</Text>

      {/* Daily Goals */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Goals</Text>
        {dailyGoals.map((item, index) => (
          <Text key={index} style={item.achieved ? styles.goalAchieved : styles.goal}>
            {item.goal}
          </Text>
        ))}
      </View>

      {/* Monthly Goals */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Monthly Goals</Text>
        {monthlyGoals.map((item, index) => (
          <Text key={index} style={item.achieved ? styles.goalAchieved : styles.goal}>
            {item.goal}
          </Text>
        ))}
      </View>

      {/* Goals Achieved */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Goals Achieved</Text>
        {goalsAchieved.map((item, index) => (
          <Text key={index} style={styles.goalAchieved}>
            {item.goal} - Achieved on {item.date}
          </Text>
        ))}
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
  goal: {
    marginBottom: 5,
    color: '#333',
  },
  goalAchieved: {
    marginBottom: 5,
    color: 'gray', 
    textDecorationLine: 'line-through',
  },
});

export default GoalsAndAchievements;
