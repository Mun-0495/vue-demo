<template>
  <div class="history">
    <main>
      <h1>History</h1>
      <div class="project-list-wrapper">
        <ul class="project-list">
          <li v-for="project in projects" :key="project.id" @click="toggleProjectInfo(project.id)">
            <div class="project-card">
              <div class="project-name"><strong>{{ project.name }}</strong></div>
              <div class="project-date">Last analyzed on {{ project.lastAnalyzed }}</div>
            </div>
            <div v-if="project.id === activeProjectId" class="project-info">
              <div class="dashboard-info">
                <div class="info-title">PROJECT SUMMARIZE</div>
                <div class="vulnerability-info">
                  <div class="vulnerability-box">
                    <span class="critical">CRITICAL</span><br><span class="percentage">0%</span>
                  </div>
                  <div class="vulnerability-box">
                    <span class="high">HIGH</span><br><span class="percentage">0%</span>
                  </div>
                  <div class="vulnerability-box">
                    <span class="medium">MEDIUM</span><br><span class="percentage">0%</span>
                  </div>
                  <div class="vulnerability-box">
                    <span class="low">LOW</span><br><span class="percentage">0%</span>
                  </div>
                  <div class="vulnerability-box">
                    <span class="unassigned">UNASSIGNED</span><br><span class="percentage">0%</span>
                  </div>
                </div>
              </div>
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
      ],
      activeProjectId: null,
    }
  },
  methods: {
    toggleProjectInfo(projectId) {
      this.activeProjectId = this.activeProjectId === projectId ? null : projectId;
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

.project-list-wrapper {
  max-width: 850px;
  margin: 0 auto;
  border-radius: 8px;
  padding: 20px;
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
  background-color: #b0bec5;
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

.project-info {
  padding: 20px;
  margin-top: 10px;
  border-radius: 4px;
}

.dashboard-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.vulnerability-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.vulnerability-box {
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  flex-grow: 1;
  margin: 5px;
  background-color: #2c3e50; /* 모든 박스의 배경색 설정 */
  color: white;
  width: calc(100% / 5 - 10px); /* 가로 길이 통일 */
}

.critical, .high, .medium, .low, .unassigned {
  font-size: 0.7em; /* 글씨 크기 줄이기 */
}

.percentage {
  font-size: 0.6em; /* 퍼센트 글씨 크기 줄이기 */
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
</style>
