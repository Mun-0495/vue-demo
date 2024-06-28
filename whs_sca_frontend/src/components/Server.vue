<template>
  <div class="home">
    <h1>Server</h1>
    <div class="repo-list">
      <div class="repo-card" v-for="repo in repos" :key="repo.name" @click="goToRepoDashboard(repo.name)">
        <div class="repo-info">
          <h2>{{ repo.name }}</h2>
          <p>ver. {{ repo.version }}</p>
        </div>
        <div class="repo-status">
          <div class="status-item">
            <h3>Vulnerability</h3>
            <p class="count">{{ repo.vulnerability }}</p>
          </div>
          <div class="status-item">
            <h3>CVSS score</h3>
            <p class="count">{{ repo.cvss }}</p>
          </div>
          <div class="status-item severity">
            <div>
              <span class="label critical">critical</span>
              <span class="count">{{ repo.severity.critical }}</span>
            </div>
            <div>
              <span class="label high">high</span>
              <span class="count">{{ repo.severity.high }}</span>
            </div>
            <div>
              <span class="label medium">medium</span>
              <span class="count">{{ repo.severity.medium }}</span>
            </div>
            <div>
              <span class="label low">low</span>
              <span class="count">{{ repo.severity.low }}</span>
            </div>
            <div>
              <span class="label unassigned">unassigned</span>
              <span class="count">{{ repo.severity.unassigned }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      repos: [
        {
          name: 'Project A',
          version: '1.0.0',
          vulnerability: 3,
          cvss: 16,
          severity: {
            critical: 0,
            high: 0,
            medium: 0,
            low: 0,
            unassigned: 0
          }
        },
        {
          name: 'Project B',
          version: '1.0.2',
          vulnerability: 5,
          cvss: 12,
          severity: {
            critical: 0,
            high: 0,
            medium: 0,
            low: 0,
            unassigned: 0
          }
        }
      ]
    }
  },
  methods: {
    goToRepoDashboard(repoName) {
      this.$router.push({ name: 'RepoDashboard', params: { repoName } });
    }
  }
}
</script>

<style scoped>
body {
  background-color: #ecf0f1; /* 배경색 설정 */
}

.home {
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
  width: 50px; /* 구분선 길이 */
  height: 2px;
  background: #2c3e50;
  margin: 10px auto 0;
}

.repo-list {
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
}

.repo-card {
  border: 2px solid #2c3e50;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* 가로 길이 설정 */
  max-width: 850px; /* 최대 너비 설정 */
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  flex-wrap: wrap; /* 화면 크기에 따라 네모들이 줄 바꿈되도록 설정 */
}

.repo-card:hover {
  background-color: #dfe6e9;
  transform: scale(1.02);
}

.repo-info {
  flex: 1; /* 공간을 채우도록 설정 */
  color: #2c3e50; /* 글씨색 변경 */
  text-align: left; /* 왼쪽 정렬 */
}

.repo-info h2 {
  margin: 0;
}

.repo-status {
  display: flex;
  flex-grow: 2; /* 네모들이 적절히 퍼지도록 설정 */
  justify-content: space-between;
}

.status-item {
  text-align: center;
  border: 2px solid #2c3e50;
  border-radius: 5px;
  padding: 15px;
  margin-left: 5px;
  flex: 1;
  background-color: #ecf0f1; /* 박스의 배경색 설정 */
  color: #2c3e50; /* 글씨색 변경 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1; /* 줄 간격 조정 */
  box-sizing: border-box; /* 패딩과 테두리를 포함한 크기 계산 */
}

.status-item.severity {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 15px;
}

.status-item.severity div {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.status-item.severity .label {
  flex: 1;
  text-align: left;
  font-weight: bold;
}

.status-item.severity .count {
  flex: 1;
  text-align: right;
}

.status-item.severity .label.critical {
  color: red;
}

.status-item.severity .label.high {
  color: orange;
}

.status-item.severity .label.medium {
  color: goldenrod;
}

.status-item.severity .label.low {
  color: blueviolet;
}

.status-item.severity .label.unassigned {
  color: green;
}

h2, h3, p {
  color: #2c3e50; /* 글씨색 변경 */
}

.no-violation {
  color: green;
}

.violation {
  color: red;
}
</style>
