<template>
    <div id="admin">
        <router-link to="/admin/students" class="btn btn-stud nav-link" >See students</router-link><br/>
        <router-link to="/admin/teachers" class="btn btn-teac nav-link" >See teachers</router-link><br/>
        <router-link to="/admin/rl_requests" class="btn btn-success nav-link" >See reference letters</router-link><br/>
    </div>
</template>

<script>
</script>

<style>
.btn-success {
  color: #fff;
  background-color: rgb(7, 148, 9);
  width: 220px;
}
</style>