<template>
    <div class="reference-letter-request-list">
        <div class="card mb-3" v-for="rl_request of rl_requests" :key="rl_request.id" @dblclick="$emit('del-rl-request', rl_request.id)">
            <div class="card-body">
                <h3><router-link :to="`/reference-letter-request-details/${rl_request['id']}`">{{rl_request['id']}}. {{rl_request['carrier_name']}}</router-link></h3>
                <p>Status: {{rl_request['status']}}</p>
            </div>
        </div>
        <div class="card mb-3" v-if="errors && errors.length">
            <div class="card-body">
                <p v-for="(error, index) of errors" :key="index">{{error.message}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ReferenceLetterRequestList",
    props: ["rl_requests"]
}
</script>

<style>

</style>