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
                        <label>Select teacher (from the list)</label>
                        <select v-model="teacher" name="teacher" id="teacher" class="form-control">
                        <option value="1">Anargyros Tsadimas</option>
                        <option value="2">Thomas Kamalakis</option>
                        <option value="3">Georgios Kousiouris</option>
                        <option value="4">Christos Diou</option>
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
export default {
    name: "AddReferenceLetterRequest",
    data(){
        return {
            formDiv: false,
            title: "",
            teacher: 0,
            carrierName: "",
            carrierEmail: "",
        }
    },
    methods: {
        formShow(){
            this.formDiv = true;
        },
        addRlRequest(){
            const newRlRequest = {
                teacher_id: this.teacher,
                carrier_name: this.carrierName,
                carrier_email: this.carrierEmail
            }
            // Send up to parent
            this.$emit("add-reference-letter-request", newRlRequest)
        }
    }
}
</script>

<style>

</style>
