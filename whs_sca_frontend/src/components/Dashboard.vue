<template>
  <div class="dashboard">
    <main>
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
  background-color: #bde2c7;
  color: #538560;
  font-family: Arial, sans-serif;
}

.dashboard {
  padding: 20px;
}

.cards {
  display: flex;
  justify-content: space-between;
}

.card {
  background: #bde2c7;
  padding: 20px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  width: 22%;
}

.chart {
  background: #bde2c7;
  padding: 20px;
  margin-top: 20px;
  border-radius: 4px;
}

.chart-content {
  display: flex;
  justify-content: space-between;
}

.chart-bar {
  width: 18%;
  background: #85b492;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
}
</style>
