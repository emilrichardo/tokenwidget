// Require the modules.

var gulp = require("gulp");
const minify = require('gulp-minify');


require("dotenv").config();

var minimist = require("minimist");
var config = require("./config.json");

var options = minimist(process.argv.slice(2));


gulp.task('compress',async function() {
  gulp.src(['src/*.js', 'src/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('dist'))
});

// Task to deploy assets to S3
/* usage: No parameter will publish all assets in the app-assets folder,
Example: gulp deploy
or you can pass the --path parameter to specify any folder in app-assets
Examples:
gulp deploy --path css
gulp deploy --path fonts
*/
const { upload, clean } = require("gulp-s3-publish");
var aws = require("aws-sdk");

aws.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: process.env.S3_BUCKET_REGION,
});

const client = new aws.S3();
const uploadOpts = {
  bucket: process.env.S3_BUCKET,
  uploadPath: "tokenwidget",
  putObjectParams: {
    ACL: "public-read",
  },
};
const cleanOpts = {
  bucket: process.env.S3_BUCKET,
  uploadPath: "tokenwidget",
};


let src_path = "**/*";

gulp.task("deploy", () => {
  return gulp.src("./dist" + src_path).pipe(upload(client, uploadOpts));
});