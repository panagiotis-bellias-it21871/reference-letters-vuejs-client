<template>
    <div class="add-reference-letter-request">
        <div class="row mb-3">
            <div class="col text-right">
                <button class="btn btn-primary" v-on:click="formInteractive">
                    {{ message }}
                </button>
            </div>
        </div>
        <div class="card bg-dark mb-3" v-if="formDiv">
            <div class="card-body">
                <form @submit.prevent="addRlRequest">
                    <div class="form-group">
                        <label>Select teacher (from the list)</label>
                        <select v-model="teacher" name="teacher" id="teacher" class="form-control">
                        <option v-for="item in teachers" v-bind:key="item.id" v-bind:value="item.id">{{item.full_name}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label>Carrier / University Name</label>
                      <input v-model="carrierName" type="text" name="carrierName" class="form-control" placeholder="Name of company or university">
                    </div>
                    <div class="form-group">
                      <label>Carrier / University Email Address</label>
                      <input v-model="carrierEmail" type="email" name="carrierEmail" class="form-control" placeholder="Email address of company or university">
                    </div>
                    <div class="row">
                        <div class="col-6 mx-auto">
                            <button class="btn btn-block btn-success">Create Request</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import DataService from '../services/data-service';

export default {
    name: "AddReferenceLetterRequest",
    data(){
        return {
            message: "Create New Reference Letter Request",
            formDiv: false,
            title: "",
            teacher: 0,
            teachers: [],
            carrierName: "",
            carrierEmail: "",
        }
    },
    computed: {
    },
    methods: {
        formInteractive(){
            if (this.formDiv) {
                this.formDiv = false;
                this.message = "Create New Reference Letter Request";
            } else {
                this.formDiv = true;
                this.message = "Cancel"
            }
        },
        addRlRequest(){
            console.log(this.teacher);
            const newRlRequest = {
                teacher_id: this.teacher,
                carrier_name: this.carrierName,
                carrier_email: this.carrierEmail
            }
            // Send up to parent
            this.$emit("add-reference-letter-request", newRlRequest)
        }
    },
    mounted() {
        DataService.getTeachers().then(
            (response) => {
                console.log(response.data);
                this.teachers = response.data;  
            },
            (error) => {
                console.log(error);
            }
        );
        console.log(this.teachers);
    }
}
</script>

<style>
</style>