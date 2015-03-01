'use strict';

module.exports = function(grunt) {

  var timestamp = grunt.template.today("yyyymmdd-HH-MM-ss");

  grunt.initConfig({
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
    concat: {
      css: {
        src: [
          'src/css/lxj.css', 
          'src/css/highlight.css',
          'assets/app/_syntaxhighlighter/styles/shCore.css',
          'assets/app/_syntaxhighlighter/styles/shThemeDefault2.css'
        ],
        dest: 'assets/css/lxj.css'
      },
      js: {
        options: {
          separator: ';',
        },
        src: [
          'assets/app/_syntaxhighlighter/scripts/shCore.js', 
          'assets/app/_syntaxhighlighter/scripts/shBrushJScript.js', 
          'assets/app/_syntaxhighlighter/scripts/shBrushCss.js',
          'assets/app/_syntaxhighlighter/scripts/shBrushXml.js',
          'assets/app/_syntaxhighlighter/scripts/shBrushPlain.js',
          'assets/app/_syntaxhighlighter/scripts/shBrushPhp.js',
          'src/js/syntaxHighlighter.js'
        ],
        dest: 'assets/js/lxj.js'
      },
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
            src: ['assets/css/**/*.css']
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
        tasks: ['concat:js','uglify']
      },
      cssminw:{
        files: ['src/**/*.css'],
        tasks: ['concat:css','cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  grunt.registerTask('default', ['concat', 'uglify','cssmin', 'watch']);

};
