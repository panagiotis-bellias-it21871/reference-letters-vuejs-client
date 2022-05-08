<template>
    <div class="rl-requests-main">
        <h1>Welcome to reference letter requests main page </h1>
        <p>This is the page opens on <strong>/rl_requests</strong> route</p>
    </div>
    <div>
        <input type="file" ref="file">
        <button @click="submitFile">Upload!</button>
    </div>
</template>

<script>
export default {
  name: 'SeeRlRequests',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    submitFile: function (/*res*/) { /*
      var Minio = require('minio')
      var minioClient = new Minio.Client({
        endPoint: process.env.VUE_APP_MINIO_ENDPOINT,
        port: process.env.VUE_APP_MINIO_PORT,
        useSSL: process.env.VUE_APP_MINIO_USE_SSL,
        accessKey: process.env.VUE_APP_MINIO_ACCESS_KEY,
        secretKey: process.env.VUE_APP_MINIO_SECRET_KEY
      });
      var name = Date.now()
      minioClient.putObject(process.env.VUE_APP_MINIO_BUCKET_NAME, name, this.$refs.file.files[0].data, 
        function(error, etag) {
            if (error) {
                return console.log(error + etag);
            }
            res.send(process.env.VUE_APP_MINIO_ENDPOINT+':'+process.env.VUE_APP_MINIO_PORT+'/'+
                process.env.VUE_APP_MINIO_BUCKET_NAME+'/${name}');
        });
      // call backend here to store info for the file
      minioClient.setBucketPolicy(process.env.VUE_APP_MINIO_BUCKET_NAME, JSON.stringify({ 
            "Version":"2022-04-26",
            "Statement":[
                {
                    "Effect":"Allow",
                    "Principal":{
                        "AWS":[
                            "*"
                        ]
                    },
                    "Action":[
                        "s3:GetBucketLocation",
                        "s3:ListBucket"
                    ],
                    "Resource":[
                        "arn:aws:s3:::bucket"
                    ]
                },
                {
                    "Effect":"Allow",
                    "Principal":{
                        "AWS":[
                            "*"
                        ]
                    },
                    "Action":[
                        "s3:GetObject"
                    ],
                    "Resource":[
                        "arn:aws:s3:::bucket/*"
                    ]
                }
            ]
        }), function(err){
          if (err) throw err

          console.log('Bucket policy set')
      });*/
    },
  }
}
</script>