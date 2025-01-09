<template>
  <div class="list_user">
    <p>Message: {{ message }}</p>
    <table border="1" v-if="list_user.length > 0"> 
      <thead >
        <tr> 
          <td>No</td> 
          <td>Username</td> 
          <td>Role</td> 
          <td>Email</td> 
        </tr> 
      </thead> 
      <tbody> 
        <tr v-for="(user, index) in list_user" :key="index">
          <td>{{ index + 1}}</td> 
          <td>{{ user.username }}</td> 
          <td>{{ user.role }}</td> 
          <td>{{ user.email }}</td> 
        </tr> 
      </tbody> 
    </table> 
  </div>
</template>

<script setup>
  import {ref} from 'vue';

  //import axios 
  import axios from 'axios'; 

  // const for list user 
  const list_user = ref([]);
  const message = ref('');

  const fetchUsers = async () => {
    const api = 'http://localhost:3000/api/user'; 

    try {
      //call api to get data with content type is json  
      const response = await axios.get(api, {
        headers: {
          'Content-Type': 'application/json',
        }, 
      });

      // mapping data 
      message.value = response.data.message; 
      list_user.value = response.data.result;

    } catch (error) {
      console.log("Lỗi không thể tải dữ liệu!", error);
      alert("Lỗi không thể tải dữ liệu! "); 
    }
  };
  
  fetchUsers();

</script>

















