<template>
  <div class="project-history">
    <main>
      <h1>Project History</h1>
      <p>Details of the analysis history for project ID: {{ projectId }}</p>
      <!-- 프로젝트 분석 히스토리를 여기에 추가합니다 -->
    </main>
  </div>
</template>

<script>
export default {
  name: 'ProjectHistory',
  props: ['projectId']
}
</script>

<style scoped>
body {
  background-color: #bde2c7;
  color: #538560;
  font-family: Arial, sans-serif;
}

.project-history {
  padding: 20px;
  text-align: center;
}

h1 {
  margin-top: 50px;
  color: #538560;
}
</style>
