module.exports = function(grunt) {

  //Initializing the configuration object
    grunt.initConfig({

      cssmin: {
        options: {
          shorthandCompacting: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            './public/assets/stylesheets/custom.css': './public/assets/stylesheets/custom.css'
          }
        },
      },

    concat_css:{
      options: {
        separator: ';',
      },
      all: {
        src: [
        './bower_components/bootstrap/dist/css/bootstrap.min.css',
        './css/grayscale.css',
        './font-awesome/css/font-awesome.min.css'
        ],
        dest: './public/assets/stylesheets/custom.css',
      },
    },
    concat: {
      options: {
        separator: ';',
      },
      js_frontend: {
        src: [
          './bower_components/jquery/dist/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
          './bower_components/jquery.easing/js/jquery.easing.min.js',
          './app/assets/javascript/custom.js'
        ],
        dest: './public/assets/javascript/custom.js',
      },
    },
    uglify: {
      options: {
        mangle: false  // Use if you want the names of your functions and variables unchanged
      },
      frontend: {
        files: {
          './public/assets/javascript/custom.js': './public/assets/javascript/custom.js',
        }
      },
    },
  });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Task definition
  grunt.registerTask('default', ['concat_css','concat','uglify']);


};