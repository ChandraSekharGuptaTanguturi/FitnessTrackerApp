// Dashboard.js
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

// Define chartConfig
const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const Dashboard = ({ navigation }) => {
  const activitySummaryData = [
    { date: 'Mon', steps: 5000 },
    { date: 'Tue', steps: 6000 },
    { date: 'Wed', steps: 7000 },
    { date: 'Thu', steps: 8000 },
    { date: 'Fri', steps: 9000 },
    { date: 'Sat', steps: 10000 },
    { date: 'Sun', steps: 11000 },
  ];

  const totalSteps = activitySummaryData.reduce((total, data) => total + data.steps, 0);

  const chartData = {
    labels: activitySummaryData.map(data => data.date),
    datasets: [
      {
        data: activitySummaryData.map(data => data.steps),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Activity Summary</Text>
        <View style={styles.chartContainer}>
          <LineChart
            data={chartData}
            width={300}
            height={200}
            yAxisLabel=""
            chartConfig={chartConfig} // Use chartConfig here
            bezier
          />
        </View>
        <Text>Total Steps: {totalSteps}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button title="Activity Log" onPress={() => navigation.navigate('ActivityLog')} />
        <Button title="Calorie Tracker" onPress={() => navigation.navigate('CalorieTracker')} />
        <Button title="Goals & Achievements" onPress={() => navigation.navigate('GoalsAndAchievements')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default Dashboard;
