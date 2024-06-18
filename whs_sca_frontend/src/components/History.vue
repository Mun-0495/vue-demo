<template>
  <div class="history">
    <main>
      <h1>History</h1>
      <div class="project-list-wrapper">
        <ul class="project-list">
          <li v-for="project in projects" :key="project.id" @click="goToProjectHistory(project.id)">
            <div class="project-card">
              <div class="project-name">{{ project.name }}</div>
              <div class="project-date">Last analyzed on {{ project.lastAnalyzed }}</div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'History',
  data() {
    return {
      projects: [
        { id: 1, name: 'Project A', lastAnalyzed: '2024-06-15' },
        { id: 2, name: 'Project B', lastAnalyzed: '2024-06-14' },
        { id: 3, name: 'Project C', lastAnalyzed: '2024-06-13' }
      ]
    }
  },
  methods: {
    goToProjectHistory(projectId) {
      this.$router.push(`/project-history/${projectId}`)
    }
  }
}
</script>

<style scoped>
body {
  color: #2c3e50;
  font-family: Arial, sans-serif;
}

.history {
  padding: 20px;
  text-align: center;
}

h1 {
  margin-top: 50px;
  color: #2c3e50;
  position: relative;
  padding-bottom: 10px; /* 아래쪽 패딩을 줄여서 Project A 부분이 내려가지 않도록 설정 */
}

h1:after {
  content: "";
  display: block;
  width: 50px;
  height: 2px;
  background: #2c3e50;
  margin: 10px auto 0; /* 가로선을 조금 아래로 내림 */
}

.project-list-wrapper {
  max-width: 850px; /* 최대 너비 설정 */
  margin: 0 auto; /* 가운데 정렬 */
  border-radius: 8px;
  padding: 20px;
  background-color: #f2f5f7;
}

.project-list {
  list-style-type: none;
  padding: 0;
}

.project-list li {
  background: #ffffff;
  padding: 20px;
  margin: 10px 0;
  border: 2px solid #2c3e50;
  border-radius: 4px;
  text-align: left;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  color: #2c3e50;
}

.project-list li:hover {
  background-color: #b0bec5; /* 어두워지는 효과 */
  transform: scale(1.02);
}

.project-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
}

.project-name {
  text-align: left;
}

.project-date {
  text-align: right;
}
</style>
