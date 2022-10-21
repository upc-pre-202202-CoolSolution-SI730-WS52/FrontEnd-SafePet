<template>
  <pv-button class="back" @click="$router.push(`/clients`)">Back</pv-button>
  <div class="big-container">
    <div class="big-container-c">
      <form action="" class="form">
        <h1 style="margin-bottom:25px; text-align:center">Add new check-up</h1>
        <div class="f2">
          <label for="date">Date</label>
          <hr class="solid">
          <input type="text" id="date" name="date" placeholder="mm/dd/yyyy">
        </div>

        <div class="f1">
          <label for="observation">Observations</label>
          <hr class="solid">
          <input type="text" id="observation" name="observation" placeholder="Write a comment">
        </div>

        <div class="f1">
          <label for="prescription">Prescriptions</label>
          <hr class="solid">
          <input type="text" id="prescription" name="prescription" placeholder="Write a comment">
        </div>

        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
export default {
name: "client-add-check"
}
</script>

<style scoped>
.f1 {
  height: 100px;
  width: 100%;
}

.f2 {
  width: 30%;
}
hr.solid {
  border-top: 3px solid #bbb;
  border-color: black;
}

.form {
  margin-top: 10%;
  width: 50%;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.big-container {
  width: 100%;
  height: 100%;
  border-style: groove;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 16px;
}

.big-container-c {
  align-items: center;
  display: flex;
  justify-content: center;
}

.back {
  margin: 20px;
}
</style>