<template>
  <div class="home">
    <h1>User Name</h1>
    <div class="repo-list">
      <div class="repo-card" v-for="repo in repos" :key="repo.name" @click="goToRepoDashboard(repo.name)">
        <div class="repo-info">
          <h2>{{ repo.name }}</h2>
        </div>
        <div class="repo-status">
          <div class="status-item">
            <h3>Vulnerability</h3>
            <p>{{ repo.vulnerability }}</p>
          </div>
          <div class="status-item">
            <h3>Policy Violation</h3>
            <p :class="repo.policyViolationClass">{{ repo.policyViolation }}</p>
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
        { name: 'REPO 1', vulnerability: 3, policyViolation: 'No violation', policyViolationClass: 'no-violation' },
        { name: 'REPO 2', vulnerability: 12, policyViolation: 'Violation', policyViolationClass: 'violation' },
        { name: 'REPO 3', vulnerability: 0, policyViolation: 'No violation', policyViolationClass: 'no-violation' },
        { name: 'REPO 4', vulnerability: 125, policyViolation: 'Violation', policyViolationClass: 'violation' }
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
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* 가로 길이 설정 */
  max-width: 850px; /* 최대 너비 설정 */
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.repo-card:hover {
  background-color: #dfe6e9;
  transform: scale(1.02);
}

.repo-info {
  flex-grow: 1;
  color: #2c3e50; /* 글씨색 변경 */
}

.repo-status {
  display: flex;
  align-items: center;
}

.status-item {
  text-align: center;
  border: 2px solid #2c3e50;
  border-radius: 5px;
  padding: 15px;
  margin-left: 5px;
  width: 175px; /* 넓이 설정 */
  height: 60px; /* 높이 설정 */
  background-color: #ecf0f1; /* 박스의 배경색 설정 */
  color: #2c3e50; /* 글씨색 변경 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1; /* 줄 간격 조정 */
}

h1, h2, h3, p {
  color: #2c3e50; /* 글씨색 변경 */
}

.no-violation {
  color: green;
}

.violation {
  color: red;
}
</style>
