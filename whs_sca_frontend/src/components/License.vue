<template>
  <div class="license">
    <main>
      <h1>License</h1>
      <div class="license-item">
        <div class="license-button"><h3>License Filtering</h3></div>
      </div>
      <div class="license-filtering">
        <div class="license-details">
          <div class="license-buttons">
            <div class="license-input">
              <input v-model="newLicense" placeholder="Enter license name to include" @keyup.enter="addLicense" />
              <button class="include-license" @click="addLicense">Include License</button>
            </div>
            <div class="license-input">
              <input v-model="delLicense" placeholder="Enter license name to exclude" @keyup.enter="deleteLicense" />
              <button class="exclude-license" @click="deleteLicense">Exclude License</button>
            </div>
          </div>
          <div class="license-text">
            <div class="license-add">
              <textarea readonly :value="addLicenses.join('\n')"></textarea>
            </div>
            <div class="license-del">
              <textarea readonly :value="delLicenses.join('\n')"></textarea>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'License',
  data() {
    return {
      newLicense: '',
      delLicense: '',
      addLicenses: ['MIT license', 'Apache License 2.0'],
      delLicenses: ['AGPL-3.0 license'],
    };
  },
  methods: {
    addLicense() {
      if (this.newLicense && !this.addLicenses.includes(this.newLicense)) {
        this.addLicenses.push(this.newLicense);
        this.newLicense = '';
      }
    },
    deleteLicense() {
      if (this.delLicense && !this.delLicenses.includes(this.delLicense)) {
        this.delLicenses.push(this.delLicense);
        this.delLicense = '';
      }
    },
  },
};
</script>

<style scoped>
.license {
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

.license-item {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.license-button {
  margin: 0 auto; /* 중앙 정렬 */
  background-color: #ffffff;
  border: 2px solid #2c3e50;
  border-radius: 5px;
  padding: 20px;
  font-size: 1.2em;
  width: 100%;
  max-width: 850px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.license-button h3 {
  margin: 0;
  font-weight: bold;
}

.license-filtering {
  border: 2px solid #2c3e50;
  border-radius: 5px;
  padding: 20px;
  background-color: #ffffff;
  text-align: left;
  width: 100%;
  max-width: 850px;
  margin: 0 auto; /* 중앙 정렬 */
  margin-top: -10px; /* 두 박스를 붙이기 위해 간격을 없앰 */
}

.license-details {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.license-buttons {
  display: flex;
  justify-content: space-between;
}

.include-license, .exclude-license {
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.include-license:hover, .exclude-license:hover {
  background-color: #587ea1;
}

.license-text {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.license-add, .license-del {
  width: calc(50% - 20px); /* 너비를 정확히 50%로 설정하고 간격을 맞춤 */
  display: flex;
  flex-direction: column;
}

.license-input {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 48%;
}

.license-input input {
  flex: 1;
  margin-right: 10px;
}

textarea {
  width: 100%;
  height: 100px;
  resize: vertical; /* 세로로만 스크롤 가능 */
  padding: 2px;
  border: 2px solid #2c3e50;
  border-radius: 5px;
  background-color: #ecf0f1; /* 텍스트영역의 배경색 설정 */
  color: #2c3e50; /* 텍스트영역의 글씨색 설정 */
  overflow-y: auto; /* 세로 스크롤 */
  margin-top: 10px;
}
</style>
