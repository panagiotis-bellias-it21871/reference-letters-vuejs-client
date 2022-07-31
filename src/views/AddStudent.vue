<template>
    <div class="add-student">
        <div class="row mb-3">
            <div class="col text-right">
                <button class="btn btn-primary" v-on:click="formShow">Register New Student</button>
            </div>
        </div>
        <div class="card bg-dark mb-3" v-if="formDiv">
            <div class="card-body">
                <form @submit.prevent="addStudent">
                    <div class="form-group">
                      <label>Label</label>
                      <input v-model="title" type="text" name="title" id="" class="form-control" placeholder="Enter sth">
                    </div>
                    <div class="form-group">
                      <label>Details</label>
                      <input v-model="completedAns" type="text" name="completedAns" class="form-control" placeholder="Enter sth">
                    </div>
                    <div class="row">
                        <div class="col-6 mx-auto">
                            <button class="btn btn-block btn-success">Register Student</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddStudent",
    data(){
        return {
            formDiv: false,
            title: "",
            completedAns: "",
            completed: false
        }
    },
    methods: {
        formShow(){
            this.formDiv = true;
        },
        addStudent(){
            if(this.completedAns == "true"){
                this.approved = true
            }

            const newStudent = {
                title: this.title,
                is_approved: this.approved,
                is_declined: false,
                is_pending: false,
            }
            // Send up to parent
            this.$emit("add-student", newStudent)
            this.title = ""
            this.completed = false
        }
    }
}
</script>

<style>

</style>
