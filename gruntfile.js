module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/src/*.js'],
                dest: 'js/dist/scriptExamJS.main.js'
            }
        },
        concatCSS: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['css/src/*.css'],
                dest: 'css/dist/styleExamJS.main.css'
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: './sass',
                    src: ['*.scss'],
                    dest: './css/src',
                    ext: '.css'
                }]
            }
        },
        watch: {
            sass: {
                files: ['./sass/*.scss'],
                tasks: ['sass'],
            }
        }, 
        uglify: {
            dist: {
                src: ['js/dist/scriptExamJS.main.js'],
                dest: 'js/dist/scriptExamJS.main.min.js'
            }
        },
        cssmin: {
            dist: {
                src: ['css/dist/styleExamJS.main.css'],
                dest: 'css/dist/styleExamJS.main.min.css'
           }
        }

    });
  
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
  
    grunt.registerTask('default', ['sass']);
  
  };