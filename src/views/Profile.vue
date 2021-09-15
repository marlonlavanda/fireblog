<template>
  <div class="profile">
    <div class="container">
      <h2>Account Settings</h2>
      <div class="profile-info">
        <div class="itials"></div>
        <div class="admin-badge">
          <AdminIcon />
          <span>admin</span>
        </div>
        <div class="input">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="firstName" />
        </div>
        <div class="input">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="lastName" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  }
}
</script>