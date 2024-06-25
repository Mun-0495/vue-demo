<template>
  <div class="repo-dashboard">
    <h1>{{ repoName }} Dashboard</h1>
    <div class="dashboard-info">
      <div class="info-box">DASHBOARD INFO</div>
      <div class="vulnerability-info">
        <div class="vulnerability-box" v-for="(vuln, index) in vulnerabilities" :key="index">
          {{ vuln.level }}<br>{{ vuln.count }} ({{ vuln.percentage }}%)
        </div>
      </div>
    </div>
    <div class="details">
      <div class="detail-section">
        <h2>Unused Code</h2>
        <textarea readonly></textarea>
      </div>
      <div class="detail-section">
        <h2>Unused Package</h2>
        <textarea readonly></textarea>
      </div>
      <div class="detail-section">
        <h2>Inspector</h2>
        <textarea readonly></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepoDashboard',
  props: ['repoName'],
  data() {
    return {
      vulnerabilities: [
        { level: 'Critical', count: 0, percentage: 0 },
        { level: 'High', count: 0, percentage: 0 },
        { level: 'Medium', count: 0, percentage: 0 },
        { level: 'Low', count: 0, percentage: 0 },
        { level: 'Unassigned', count: 0, percentage: 0 }
      ]
    }
  }
}
</script>

<style scoped>
.repo-dashboard {
  padding: 20px;
}

.dashboard-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-box {
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

.vulnerability-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.vulnerability-box {
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  flex-grow: 1;
  margin: 5px;
}

.details {
  margin-top: 20px;
}

.detail-section {
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 100px;
  resize: none;
}
</style>
