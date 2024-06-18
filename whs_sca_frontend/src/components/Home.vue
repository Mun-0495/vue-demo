<template>
  <div class="home">
    <main>
      <h1>Welcome to the 'Project name'</h1>
      <p>Perform SCA analysis quickly</p>
      <div class="file-upload"
           @dragover.prevent="onDragOver"
           @dragleave.prevent="onDragLeave"
           @drop.prevent="onDrop">
        <label for="file-input" class="file-label" :class="{ 'is-dragover': isDragOver }">Upload or Drag & Drop Project</label>
        <input type="file" id="file-input" webkitdirectory @change="handleFileUpload">
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      isDragOver: false
    }
  },
  methods: {
    handleFileUpload(event) {
      const files = event.target.files;
      if (files.length) {
        Array.from(files).forEach(file => {
          console.log('File uploaded:', file.name);
        });
      }
    },
    onDragOver(event) {
      this.isDragOver = true;
    },
    onDragLeave(event) {
      this.isDragOver = false;
    },
    onDrop(event) {
      this.isDragOver = false;
      const files = event.dataTransfer.items;
      for (let i = 0; i < files.length; i++) {
        if (files[i].webkitGetAsEntry().isDirectory) {
          this.handleDroppedFolder(files[i].webkitGetAsEntry());
        }
      }
    },
    handleDroppedFolder(item) {
      const reader = item.createReader();
      reader.readEntries(entries => {
        entries.forEach(entry => {
          if (entry.isFile) {
            entry.file(file => {
              console.log('File dropped:', file.name);
            });
          } else if (entry.isDirectory) {
            this.handleDroppedFolder(entry);
          }
        });
      });
    }
  }
}
</script>

<style scoped>
body {
  background-color: #bde2c7;
  color: #538560;
  font-family: Arial, sans-serif;
}

.home {
  padding: 20px;
  text-align: center;
}

h1 {
  margin-top: 50px;
  color: #2c3e50;
}

p {
  font-size: 1.2em;
  color: #2c3e50;
}

.file-upload {
  margin-top: 20px;
  border: 2px dashed #538560;
  padding: 100px;
  border-radius: 4px;
  position: relative;
}

.file-label {
  display: inline-block;
  padding: 10px 20px;
  background-color: #538560;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

.file-label.is-dragover {
  background-color: #43744a;
}

input[type="file"] {
  display: none;
}
</style>
