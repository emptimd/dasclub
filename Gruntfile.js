// Generated on 2014-03-15 using generator-wp 0.0.0
'use strict';

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // configurable paths
        yeoman: {
            app: '',
            theme: 'wp-content/themes/test',
            normalize: 'bower_components/normalize-css/'
        },

        banner: '/*\nTheme Name: test\n' +
        'Author: <%= pkg.theme.author %>\n'+
        'Description: <%= pkg.description %>\n'+
        'Version: <%= pkg.version %>\n */',

        watch: {
            less: {
                files: ['less/**/*.less'],
                tasks: ['refresh_css'],
                options: {
                    // debounceDelay: 250,
                    spawn: false
                }
            },
            js: {
                files: ['<%= concat.js.src %>'],
                tasks: ['refresh_js'],
                options: {
                    // debounceDelay: 250,
                    spawn: false
                }
            }
        },
        connect: {
            dev: {
                options: {
                    port: 9004,
                    base: [
                            '',
                            'css'
                        ],
                    // change this to '0.0.0.0' to access the server from outside
                    hostname: 'localhost'
                }
            },
            wp: {
                options: {
                    port: 9005,
                    base: [
                        '',
                        'css'
                    ],
                    // livereload: 35729,//35729 or 1137
                    // change this to '0.0.0.0' to access the server from outside
                    hostname: 'localhost'
                }
            }
        },
        browserSync: {
            dev: {
               bsFiles: {//or files
                    src : ['css/main.css', 'js/*.js', '*.html']
                },
                options: {
                    watchTask: true,
                    ghostMode: {
                        clicks: true,
                        scrolls: true,
                        links: true,
                        forms: true
                    },
                    server: {
                        baseDir: './'
                    }
                }
            },
            build: {
                bsFiles: {//or files
                     src : ['style.css', 'js/*.js', '*.php']
                 },
                 options: {
                     watchTask: true,
                     ghostMode: {
                         clicks: true,
                         scrolls: true,
                         links: true,
                         forms: true
                     },
                     proxy: {
                         host: "test-project.loc"
                     }
                 }
            }
        },
        less: {
            dev: {
                options: {
                    paths: ["less"],
                    cleancss:true
                },
                files: {
                    "css/main.css": "less/main.less"
                }
            }
        },

        cssmin: {
            dist: {
                options: {
                    banner: '<%= banner %>'
                },
                files: {
                    'style.css': [ "css/main.css" ]
                }
            }
        },


        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'css/main.css',
                dest: 'css/'
            }
        },
        concat: {
            js: {
                src: [
                'js/_functions.js',
                'js/main.js'
                ],
                dest: 'js/common.js'
            }
        },

        uglify: {
            build: {
                src: 'js/common.js',
                dest: 'js/common.js'
            }
        },

        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                    {
                        expand: true,
                        cwd: 'img/',
                        src: ['**/*.png'],
                        dest: 'img/',
                        ext: '.png'
                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'img/',
                        src: ['**/*.jpg'],
                        dest: 'img/',
                        ext: '.jpg'
                    }
                ]
            }
        },

        removelogging: {
            dist: {
                src: "js/common.js" // Each file will be overwritten with the output!
            }
        },

        webshot: {
            // example
            homepage: {
                options: {
                    // url, file or html
                    siteType: 'url',
                    site: 'http://localhost:<%= connect.wp.options.port %>/index.html',
                    savePath: 'screenshot.png',
                    windowSize: {
                        width: 1024,
                        height: 768
                    },
                    shotSize: {
                        width: 1024,//600 x 450 or 300 x 225
                        height: 768
                    }
                }
            }
        },

        image_resize: {
            resize: {
              options: {
                width: 880,
                height: 660,
                crop: true
              },
              files: {
                'screenshot.png': 'wp-content/themes/test/screenshot.png'
              }
            }
          },

        sprite:{
            all: {
                src: 'img/sprites/sprite_footer*.png',
                destImg: 'img/sprite_footer.png',
                destCSS: 'less/sprites/sprite_footer.less',
                engine: 'pngsmith'
            }
        },

        copy: {
          main: {
            nonull: true,
            src: 'js/common.js',
            dest: 'js/common.js',
          },
        },

        newer: {
            options: {
                cache: 'cache'
            }
        }
    });

    grunt.registerTask('default', [], function () {
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-autoprefixer');
        grunt.loadNpmTasks("grunt-remove-logging");
        grunt.loadNpmTasks('grunt-newer');

        grunt.task.run('concat', 'removelogging', 'uglify', 'less', 'autoprefixer');
    });

    grunt.registerTask('dev', [], function () {
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-autoprefixer');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-browser-sync');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-newer');

        grunt.task.run(/*'connect:dev',*//*, 'webshot'*//*, 'image_resize'*/ 'browserSync:dev', 'watch');
    });

    grunt.registerTask('build', [], function () {
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-autoprefixer');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-browser-sync');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-newer');

        grunt.task.run('browserSync:build', 'watch');
    });


    grunt.registerTask('refresh_css', [
        'less',
        'autoprefixer'
        // 'cssmin'
        
    ]);
    grunt.registerTask('refresh_js', [
        'newer:concat:js',
        'uglify'
        // 'copy'
    ]);

    grunt.registerTask('images', [], function () {
        grunt.loadNpmTasks('grunt-contrib-imagemin');
        grunt.task.run('imagemin'/*, 'image_resize'*/);
    });

    grunt.registerTask('sprites', [], function () {
        grunt.loadNpmTasks('grunt-spritesmith');
        grunt.task.run('sprite');
    });

    grunt.registerTask('wp', [], function () {
        grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.loadNpmTasks('grunt-webshot');
        grunt.loadNpmTasks('grunt-image-resize');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.task.run('connect:wp', 'webshot', 'image_resize', 'cssmin');
    });
};
