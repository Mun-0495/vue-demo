<template>
    <div class="settings">
      <main>
        <h1>Settings</h1>
        <div class="setting-item" @click="toggleLicenseFiltering">
          <div class="setting-button">License Filtering</div>
        </div>
        <div v-if="showLicenseFiltering" class="license-filtering">
          <div class="license-item">
            <button class="add-license">Add License</button>
            <div class="license">MIT license, Apache License 2.0</div>
          </div>
          <div class="license-item">
            <button class="del-license">Del License</button>
            <div class="license">AGPL-3.0 license</div>
          </div>
        </div>
        <div class="setting-item" @click="toggleCheckbox">
          <div class="setting-button github-notifications">
            GitHub Issue Notifications Linked
            <div class="checkbox" :class="{'checked': isCheckboxChecked}">
              <div class="checkmark"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Settings',
    data() {
      return {
        showLicenseFiltering: false,
        isCheckboxChecked: false,
      };
    },
    methods: {
      toggleLicenseFiltering() {
        this.showLicenseFiltering = !this.showLicenseFiltering;
      },
      toggleCheckbox() {
        this.isCheckboxChecked = !this.isCheckboxChecked;
      },
    },
  };
  </script>
  
  <style scoped>
  .settings {
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
  
  .setting-item {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-weight: bold; /* bold 처리 */
  }
  
  .setting-button {
    margin: 0 auto; /* 중앙 정렬 */
    background-color: #ffffff;
    border: 2px solid #2c3e50;
    border-radius: 5px;
    padding: 20px;
    cursor: pointer;
    font-size: 1.2em;
    width: 100%;
    max-width: 850px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .setting-button:hover {
    background-color: #dfe6e9;
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
  
  .license-item {
    display: flex;
    align-items: center;
    margin-top: 10px;
    height: 60px; /* 높이 두 배로 설정 */
  }
  
  .add-license, .del-license {
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .add-license:hover, .del-license:hover {
    background-color: #34495e;
  }
  
  .license {
    margin-left: 10px;
  }
  
  .github-notifications {
    justify-content: space-between;
    width: 100%;
    font-weight: bold; /* bold 처리 */
  }
  
  .checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid #2c3e50;
    border-radius: 3px;
    cursor: pointer;
    position: relative;
  }
  
  .checked .checkmark {
    display: block;
    width: 12px;
    height: 12px;
    background-color: #2c3e50;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  </style>
  