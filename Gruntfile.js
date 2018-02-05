/* Gruntfile : tells Grunt what to do, in what order,
  and configures all tasks to be run.
  */

module.exports = function(grunt) {
  /* Grunt Configuration */
  grunt.initConfig ({
    /* Tell Grunt where package.json file is */
    pkg: grunt.file.readJSON('package.json'),

    /* Declare the tasks for Grunt to run */
    // Sass Task //
    sass: {
      // Expanded CSS Version
      dev: {
        options: {
          style: 'expanded',
          sourcemap: 'none',
        },
        files: {'style.css': 'scss/style.scss'}
      },

      // Compressed CSS Version
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
        },
        files: {'style-min.css': 'scss/style.scss'}
      }
    },

    // Autoprefixer Task //
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      // prefix all files
      multiple_files: {
        expand: true,
        flatten: true,
        src: '*.css',
        dest: ''
      }
    },

    // Watch Task //
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass','autoprefixer']
      }
    }
  });

  /* Tell Grunt to load task runners */
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
}
