const core = require("@actions/core")
const github = require("@actions/github")
const exec = require("@actions/exec")

function run() {
//   Get some input values

    const bucket = core.getInput('bucket', {required: true});
    const bucketRegion = core.getInput('bucket-region', {required: true});
    const distFolder = core.getInput('dist-folder', {required: true});

    // Upload files
    // exec.exec('aws s3 sync <local-folder> <s3-bucket>')
    const s3URI = `S3://${bucket}`
    exec.exec(`aws s3 sync ${distFolder} ${s3URI} --region ${bucketRegion}`)

    core.notice("Hello from my JS custom action");
}

run();