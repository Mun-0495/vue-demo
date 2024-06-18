<template>
  <div class="dashboard">
    <main>
      <h1>Dashboard</h1>
      <div class="cards">
        <div class="card">0<br>Portfolio Vulnerabilities</div>
        <div class="card">0<br>Projects at Risk</div>
        <div class="card">0<br>Vulnerable Components</div>
        <div class="card">0<br>Inherited Risk Score</div>
      </div>
      <div class="chart">
        <h3>Portfolio Vulnerabilities</h3>
        <p>Last Measurement: 16 Jun 2024 at 15:12:19</p>
        <div class="chart-content">
          <div class="chart-bar">
            Critical<br>0 (0%)
          </div>
          <div class="chart-bar">
            High<br>0 (0%)
          </div>
          <div class="chart-bar">
            Medium<br>0 (0%)
          </div>
          <div class="chart-bar">
            Low<br>0 (0%)
          </div>
          <div class="chart-bar">
            Unassigned<br>0 (0%)
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped>
body {
  color: #2c3e50;
  font-family: Arial, sans-serif;
}

.dashboard {
  padding: 20px;
  text-align: center;
}

h1 {
  margin-top: 50px;
  color: #2c3e50;
  position: relative;
  padding-bottom: 10px;
}

h1:after {
  content: "";
  display: block;
  width: 50px;
  height: 2px;
  background: #2c3e50;
  margin: 10px auto 0;
}

.cards {
  display: flex;
  justify-content: space-between;
}

.card {
  background: #ffffff;
  padding: 20px;
  margin: 10px;
  text-align: center;
  border: 2px solid #2c3e50;
  border-radius: 4px;
  width: 22%;
  color: #2c3e50;
}

.chart {
  background: #ffffff;
  padding: 20px;
  margin-top: 20px;
  border: 2px solid #2c3e50;
  border-radius: 4px;
}

.chart-content {
  display: flex;
  justify-content: space-between;
}

.chart-bar {
  color: #ffffff;
  width: 18%;
  background: #2c3e50;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
}
</style>
