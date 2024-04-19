import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ActivityLog = () => {

  const dailyActivityData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [2000, 3000, 2500, 3500, 4000, 3200, 2800],
      },
    ],
  };


  const monthlyActivityData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        data: [12000, 15000, 14000, 16000],
      },
    ],
  };


  const mealsAndDietData = [
    { meal: 'Breakfast', calories: 350 },
    { meal: 'Lunch', calories: 600 },
    { meal: 'Dinner', calories: 450 },
    { meal: 'Snack', calories: 200 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity Log</Text>

      {/* Daily Activity */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Activity</Text>
        <LineChart
          data={dailyActivityData}
          width={300}
          height={200}
          yAxisLabel=""
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>

      {/* Meals and Diet */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meals and Diet</Text>
        {mealsAndDietData.map((item, index) => (
          <Text key={index} style={styles.meal}>
            {item.meal}: {item.calories} calories
          </Text>
        ))}
      </View>

      {/* Monthly Activity */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Monthly Activity</Text>
        <LineChart
          data={monthlyActivityData}
          width={300}
          height={200}
          yAxisLabel=""
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
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
  meal: {
    marginBottom: 5,
    color: '#333',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});


const chartConfig = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

export default ActivityLog;
