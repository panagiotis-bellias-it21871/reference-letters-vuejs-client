<template>
    <div class="add-reference-letter-request">
        <div class="row mb-3">
            <div class="col text-right">
                <button class="btn btn-primary" v-on:click="formShow">Create New Reference Letter Request</button>
            </div>
        </div>
        <div class="card bg-dark mb-3" v-if="formDiv">
            <div class="card-body">
                <form @submit.prevent="addRlRequest">
                    <div class="form-group">
                      <label>Choose Teacher</label>
                      <input v-model="title" type="text" name="title" id="" class="form-control" placeholder="Enter request title">
                    </div>
                    <div class="form-group">
                      <label>Reference Letter Request Details</label>
                      <input v-model="completedAns" type="text" name="completedAns" class="form-control" placeholder="Enter if completed">
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
export default {
    name: "AddReferenceLetterRequest",
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
        addRlRequest(){
            if(this.completedAns == "true"){
                this.approved = true
            }

            const newRlRequest = {
                title: this.title,
                is_approved: this.approved,
                is_declined: false,
                is_pending: false,
            }
            // Send up to parent
            this.$emit("add-reference-letter-request", newRlRequest)
            this.title = ""
            this.completed = false
        }
    }
}
</script>

<style>

</style>
