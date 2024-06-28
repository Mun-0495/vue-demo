<template>
  <div class="repository">
    <h1>Repository</h1>
    <div class="repo-list">
      <div class="repo-card" v-for="repo in repos" :key="repo.name" @click="goToRepoDashboard(repo.name)">
        <div class="repo-info">
          <h2>{{ repo.name }}</h2>
          <p>ver. {{ repo.version }}</p>
        </div>
        <div class="repo-date">{{ repo.lastAnalyzed }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Repository',
  data() {
    return {
      repos: [
        {
          name: 'Project A',
          version: '1.0.0',
          lastAnalyzed: '2024-06-29'
        },
        {
          name: 'Project B',
          version: '1.2.1',
          lastAnalyzed: '2024-06-17'
        },
        {
          name: 'Project C',
          version: '1.2.0',
          lastAnalyzed: '2024-03-11'
        },
        {
          name: 'Project D',
          version: '1.0.1',
          lastAnalyzed: '2023-12-30'
        },
        {
          name: 'Project E',
          version: '1.2.0',
          lastAnalyzed: '2023-06-29'
        }
      ]
    };
  },
  methods: {
    goToRepoDashboard(repoName) {
      this.$router.push({ name: 'RepoDashboard', params: { repoName } });
    }
  }
};
</script>

<style scoped>
body {
  background-color: #ecf0f1; /* 배경색 설정 */
}

.repository {
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
}

.repo-card:hover {
  background-color: #dfe6e9;
  transform: scale(1.02);
}

.repo-info {
  flex-grow: 1;
  text-align: left;
}

.repo-info h2 {
  margin: 0;
  color: #2c3e50; /* 글씨색 변경 */
}

.repo-info p {
  margin: 0;
  color: #7f8c8d; /* 버전 글씨색 변경 */
}

.repo-date {
  color: #bdc3c7; /* 날짜 글씨색 변경 */
}
</style>
