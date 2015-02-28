'use strict';

module.exports = function(grunt) {

  //grunt.file.defaultEncoding = 'gbk';
  var pkg = grunt.file.readJSON("package.json");
  var timestamp = grunt.template.today("yyyymmdd-HH-MM-ss");

  grunt.initConfig({
    pkg: pkg,
    browserify: {
      page: {
        expand: true,
        flatten: true,
        src: ['src/**/*.js'],
        dest: 'assets/js/',
        options: {
          external: ['jquery'],
        }
      }
    },
    uglify: {
      options: {
        mangle: {
          except: ['jQuery']
        },
        footer: "\n/**Create by Fep at " + grunt.template.today("yyyymmdd HH:MM:ss") + "**/\n"
      },
      target: {
        files: [{
          expand: true,
          src: ['assets/js/**/*.js'],
        }]
      }
    },
    cssmin: {
      target: {
        options: {
          banner: '/* build by grunt cssmin at ' + grunt.template.today("yyyy-mm-dd HH:MM:ss") + ' */'
        },
        files: [{
            expand: true,
            flatten: true,
            src: ['src/**/*.css'],
            dest: 'assets/css/',
        }]
      }
    },
    watch: {
      options: {
        persistent: true,
        interval: 5007
      },
      browserifyJs: {
        files: ['src/**/*.js'],
        tasks: ['browserify:page','uglify']
      },
      cssminw:{
        files: ['src/**/*.css'],
        tasks: ['cssmin']
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browserify');


  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  grunt.registerTask('default', ['browserify:page', 'uglify','cssmin', 'watch']);

};
