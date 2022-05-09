<template>
    <div class="add-reference-letter-request">
        <div class="row mb-3">
            <div class="col text-right">
                <button class="btn btn-primary" v-on:click="formShow">Create New Reference Letter Request</button>
            </div>
        </div>
        <div class="card bg-dark mb-3" v-if="formDiv">
            <div class="card-body">
                <form>
                    <div class="form-group">
                      <label>Reference Letter Request Title</label>
                      <input type="text" name="title" id="" class="form-control" placeholder="Enter request title">
                    </div>
                    <div class="form-group">
                      <label>Reference Letter Request Details</label>
                      <textarea name="body" class="form-control" placeholder="Enter request details"></textarea>
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
            formDiv: false
        }
    },
    methods: {
        formShow(){
            this.formDiv = true;
        }
    }
}
</script>

<style>

</style>