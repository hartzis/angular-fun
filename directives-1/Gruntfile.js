
module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      build: {
        options:{
          soureMap: true,
          beautify: true
        },
        files: [
          {
          'public/js/min/app.min.js': ['public/js/src/{,*/}*.js']
          }
        ]
      }
    },
    watch: {
      js: {
        files: ['public/js/src/{,*/}*.js'],
        tasks: 'uglify:build'
      }
    }
  });

  grunt.registerTask('build', ['uglify:build', 'watch']);
  grunt.registerTask('default', ['uglify']);

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

}