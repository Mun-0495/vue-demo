<template>
  <div class="dashboard">
    <h1>{{ project.name }}</h1>
    <div class="tab-menu">
      <router-link :to="{ name: 'CodeDashboard', params: { repoName: repoName } }" class="tab" :class="{ active: $route.name === 'CodeDashboard' }">Code</router-link>
      <router-link :to="{ name: 'ServerDashboard', params: { repoName: repoName } }" class="tab" :class="{ active: $route.name === 'ServerDashboard' }">Server</router-link>
    </div>
    <div class="content">
      <div class="unused-list">
        <h2>Unused Import List</h2>
        <textarea readonly></textarea>
      </div>
      <div class="unused-list">
        <h2>Unused Package</h2>
        <textarea readonly></textarea>
      </div>
      <div class="dependency-list">
        <h2>Dependency List</h2>
        <div class="dependency">
          <div class="dependency-section existing-code">
            <h3>Existing Code</h3>
            <div class="status">
              <div class="status-header">
                <div class="status-box">
                  <span class="vuln-title">Vulnerability</span>
                  <span class="vuln-value">{{ project.vulnerabilities }}</span>
                </div>
                <div class="status-box">
                  <span class="cvss-title">CVSS score</span>
                  <span class="cvss-value">{{ project.cvssScore }}</span>
                </div>
              </div>
              <div class="severity-counts">
                <div class="severity-item">
                  <div class="severity-box critical">critical<br>{{ project.critical }}</div>
                </div>
                <div class="severity-item">
                  <div class="severity-box high">high<br>{{ project.high }}</div>
                </div>
                <div class="severity-item">
                  <div class="severity-box medium">medium<br>{{ project.medium }}</div>
                </div>
                <div class="severity-item">
                  <div class="severity-box low">low<br>{{ project.low }}</div>
                </div>
                <div class="severity-item">
                  <div class="severity-box unassigned">unassigned<br>{{ project.unassigned }}</div>
                </div>
              </div>
            </div>
            <table class="dependency-table">
              <thead>
                <tr>
                  <th>Components</th>
                  <th>Version</th>
                  <th>Vulnerability</th>
                  <th>Severity</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="component in project.components" :key="component.name">
                  <td>{{ component.name }}</td>
                  <td>{{ component.version }}</td>
                  <td><a :href="component.vulnerabilityLink">{{ component.vulnerability }}</a></td>
                  <td>{{ component.severity }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="dependency-section remaining-code">
            <h3>Removing Unused Code</h3>
            <div class="status">
              <div class="status-header">
                <div class="status-box">
                  <span class="vuln-title">Vulnerability</span>
                  <span class="vuln-value">{{ project.vulnerabilities }}</span>
                </div>
                <div class="status-box">
                  <span class="cvss-title">CVSS score</span>
                  <span class="cvss-value">{{ project.cvssScore }}</span>
                </div>
              </div>
              <div class="severity-counts">
                <div class="severity-item">
                  <div class="severity-box critical">critical<br>{{ project.critical }}</div>
                </div>
                <div class="severity-item">
                  <div class="severity-box high">high<br>{{ project.high }}</div>
                </div>
                <div class="severity-item">
                  <div class="severity-box medium">medium<br>{{ project.medium }}</div>
                </div>
                <div class="severity-item">
                  <div class="severity-box low">low<br>{{ project.low }}</div>
                </div>
                <div class="severity-item">
                  <div class="severity-box unassigned">unassigned<br>{{ project.unassigned }}</div>
                </div>
              </div>
            </div>
            <table class="dependency-table">
              <thead>
                <tr>
                  <th>Components</th>
                  <th>Version</th>
                  <th>Vulnerability</th>
                  <th>Severity</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="component in project.components" :key="component.name">
                  <td>{{ component.name }}</td>
                  <td>{{ component.version }}</td>
                  <td><a :href="component.vulnerabilityLink">{{ component.vulnerability }}</a></td>
                  <td>{{ component.severity }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeDashboard',
  props: ['repoName'],
  data() {
    return {
      projects: [
        { id: 1, name: 'Project A', vulnerabilities: 3, cvssScore: 16, critical: 0, high: 0, medium: 0, low: 0, unassigned: 0,
          components: [
            { name: 'Component A', version: '1.1.0', vulnerability: 'CVE-1238', vulnerabilityLink: '#', severity: 'high' },
            { name: 'Component B', version: '1.2.0', vulnerability: 'CVE-1212', vulnerabilityLink: '#', severity: 'unassigned' }
          ]
        },
        { id: 2, name: 'Project B', vulnerabilities: 2, cvssScore: 12, critical: 0, high: 0, medium: 0, low: 0, unassigned: 0,
          components: [
            { name: 'Component C', version: '1.0.0', vulnerability: 'CVE-2345', vulnerabilityLink: '#', severity: 'medium' },
            { name: 'Component D', version: '1.1.0', vulnerability: 'CVE-3456', vulnerabilityLink: '#', severity: 'low' }
          ]
        },
        { id: 3, name: 'Project C', vulnerabilities: 1, cvssScore: 8, critical: 0, high: 0, medium: 0, low: 0, unassigned: 0,
          components: [
            { name: 'Component E', version: '1.2.0', vulnerability: 'CVE-4567', vulnerabilityLink: '#', severity: 'low' }
          ]
        }
      ],
      project: {}
    };
  },
  created() {
    this.project = this.projects.find(p => p.name === this.repoName);
  }
};
</script>

<style scoped>
.dashboard {
  padding: 20px;
  box-sizing: border-box;
  color: #2c3e50;
}

h1 {
  margin-top: 50px;
  color: #2c3e50;
  position: relative;
  padding-bottom: 10px;
  text-align: center;
}

h1:after {
  content: "";
  display: block;
  width: 50px; /* 구분선 길이 */
  height: 2px;
  background: #2c3e50;
  margin: 10px auto 0;
}

.tab-menu {
  display: flex;
  border-bottom: 2px solid #2c3e50;
}

.tab {
  padding: 10px 20px;
  text-decoration: none;
  color: #2c3e50;
}

.tab.active {
  font-weight: bold;
  border-bottom: 2px solid #2c3e50;
}

.content {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.unused-list, .dependency-list {
  margin-bottom: 20px;
}

.unused-list h2, .dependency-list h2 {
  margin-bottom: 10px;
}

textarea {
  width: 100%;
  height: 100px;
  resize: vertical;
  padding: 10px;
  border: 2px solid #2c3e50;
  border-radius: 5px;
  background-color: #ffffff;
  color: #2c3e50;
}

.dependency {
  display: flex;
  justify-content: space-between;
}

.dependency-section {
  flex: 1;
  margin-right: 10px;
  padding: 10px;
  border: 2px solid #2c3e50;
  border-radius: 5px;
  background-color: #FFFFFF;
  color: #2c3e50;
}

.dependency-section:last-child {
  margin-right: 0;
}

.status {
  background-color: #ecf0f1;
  border: 2px solid #2c3e50;
  padding: 10px;
}

.status-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.status-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  width: calc(100% / 2 - 10px); /* 가로 길이 통일 */
  text-align: center;
}

.status-body {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.vuln-title, .cvss-title {
  margin: 0;
  font-weight: bold;
}

.vuln-value, .cvss-value {
  margin: 0;
  font-size: 1.5em;
}

.severity-counts {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

.severity-item {
  flex: 1;
}

.severity-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2c3e50;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.critical {
  color: #ff4d4d; /* 붉은색 */
}

.high {
  color: #ffa500; /* 주황색 */
}

.medium {
  color: #ffd700; /* 황금색 */
}

.low {
  color: #9370db; /* 파란색 */
}

.unassigned {
  color: #32cd32; /* 초록색 */
}

.dependency-table {
  margin-top: 10px;
  width: 100%;
  border-collapse: collapse;
}

.dependency-table th, .dependency-table td {
  border: 1px solid #2c3e50;
  padding: 8px;
  text-align: left;
}

.dependency-table th {
  background-color: #ffffff;
  color: #2c3e50;
}

.dependency-table td a {
  color: #2c3e50;
  text-decoration: none;
}

.dependency-table td a:hover {
  text-decoration: underline;
}

h3 {
  text-align: center;
}
</style>
