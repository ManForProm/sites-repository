var gulp = require("gulp");
var rigger = require("gulp-rigger");

var path = {
  build: {
    html: "build/",
  },
  src: {
    html: "index.html",
  },
};

gulp.task("html", function () {
  return gulp
    .src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html));
});

gulp.task("default", gulp.series("html"));
