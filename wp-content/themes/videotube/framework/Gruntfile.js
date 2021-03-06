var shell = require('shelljs');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        po2mo: {
            options: {
            },
            files: {
                src: 'ReduxCore/languages/*.po',
                expand: true,
            },
        },
        concat: {
            options: {
                separator: ';'
            },
            core: {
                src: [
                    'ReduxCore/assets/js/vendor/cookie.js',
                    'ReduxCore/assets/js/vendor/qtip/jquery.qtip.js',
                    'ReduxCore/assets/js/vendor/jquery.typewatch.js',
                    'ReduxCore/assets/js/vendor/jquery.serializeForm.min.js',
                    'ReduxCore/assets/js/vendor/jquery.alphanum.js',
                    'ReduxCore/assets/js/redux.js',
                ],
                dest: 'ReduxCore/assets/js/redux.min.js'
            },
            vendor: {
                src: [
                    'ReduxCore/assets/js/vendor/cookie.js',
                    'ReduxCore/assets/js/vendor/qtip/jquery.qtip.js',
                    'ReduxCore/assets/js/vendor/jquery.serializeForm.min.js',
                    'ReduxCore/assets/js/vendor/jquery.typewatch.js',
                    'ReduxCore/assets/js/vendor/jquery.alphanum.js',
                ],
                dest: 'ReduxCore/assets/js/vendor.min.js'
            }
        },
        'gh-pages': {
            options: {
                base: 'docs',
                message: 'Update docs and files to distribute'
            },
            dev: {
                src: ['docs/**/*', 'bin/CNAME']
            },
            travis: {
                options: {
                    repo: 'https://' + process.env.GH_TOKEN + '@github.com/ReduxFramework/docs.reduxframework.com.git',
                    user: {
                        name: 'Travis',
                        email: 'travis@travis-ci.org'
                    },
                    silent: false
                },
                src: ['**/*']
            }
        },
        uglify: {
            core: {
                options: {
                    //banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    //'<%= grunt.template.today("yyyy-mm-dd") %> */\n',
                },
                files: {
                    'ReduxCore/assets/js/redux.min.js': ['ReduxCore/assets/js/redux.min.js'],
                    'ReduxCore/assets/js/vendor/select2.sortable.min.js' : ['ReduxCore/assets/js/vendor/select2.sortable.js'],
                    'ReduxCore/assets/js/color-picker/color-picker.min.js': ['ReduxCore/assets/js/color-picker/color-picker.js'],
                    'ReduxCore/inc/fields/ace_editor/field_ace_editor.min.js': ['ReduxCore/inc/fields/ace_editor/field_ace_editor.js'],
                    'ReduxCore/inc/fields/background/field_background.min.js': ['ReduxCore/inc/fields/background/field_background.js'],
                    'ReduxCore/inc/fields/border/field_border.min.js': ['ReduxCore/inc/fields/border/field_border.js'],
                    'ReduxCore/inc/fields/button_set/field_button_set.min.js': ['ReduxCore/inc/fields/button_set/field_button_set.js'],
                    'ReduxCore/inc/fields/color_rgba/field_color_rgba.min.js': ['ReduxCore/inc/fields/color_rgba/field_color_rgba.js'],
                    'ReduxCore/inc/fields/color_gradient/field_color_gradient.min.js': ['ReduxCore/inc/fields/color_gradient/field_color_gradient.js'],
                    'ReduxCore/inc/fields/date/field_date.min.js': ['ReduxCore/inc/fields/date/field_date.js'],
                    'ReduxCore/inc/fields/dimensions/field_dimensions.min.js': ['ReduxCore/inc/fields/dimensions/field_dimensions.js'],
                    'ReduxCore/inc/fields/editor/field_editor.min.js': ['ReduxCore/inc/fields/editor/field_editor.js'],
                    'ReduxCore/inc/fields/gallery/field_gallery.min.js': ['ReduxCore/inc/fields/gallery/field_gallery.js'],
                    'ReduxCore/inc/fields/image_select/field_image_select.min.js': ['ReduxCore/inc/fields/image_select/field_image_select.js'],
                    'ReduxCore/inc/fields/import_export/field_import_export.min.js': ['ReduxCore/inc/fields/import_export/field_import_export.js'],
                    'ReduxCore/inc/fields/link_color/field_link_color.min.js': ['ReduxCore/inc/fields/link_color/field_link_color.js'],
                    'ReduxCore/inc/fields/media/field_media.min.js': ['ReduxCore/inc/fields/media/field_media.js'],
                    'ReduxCore/inc/fields/multi_text/field_multi_text.min.js': ['ReduxCore/inc/fields/multi_text/field_multi_text.js'],
                    'ReduxCore/inc/fields/select/field_select.min.js': ['ReduxCore/inc/fields/select/field_select.js'],
                    'ReduxCore/inc/fields/select_image/field_select_image.min.js': ['ReduxCore/inc/fields/select_image/field_select_image.js'],
                    'ReduxCore/inc/fields/slider/field_slider.min.js': ['ReduxCore/inc/fields/slider/field_slider.js'],
                    'ReduxCore/inc/fields/slides/field_slides.min.js': ['ReduxCore/inc/fields/slides/field_slides.js'],
                    'ReduxCore/inc/fields/sortable/field_sortable.min.js': ['ReduxCore/inc/fields/sortable/field_sortable.js'],
                    'ReduxCore/inc/fields/sorter/field_sorter.min.js': ['ReduxCore/inc/fields/sorter/field_sorter.js'],
                    'ReduxCore/inc/fields/spacing/field_spacing.min.js': ['ReduxCore/inc/fields/spacing/field_spacing.js'],
                    'ReduxCore/inc/fields/spinner/field_spinner.min.js': ['ReduxCore/inc/fields/spinner/field_spinner.js'],
                    'ReduxCore/inc/fields/switch/field_switch.min.js': ['ReduxCore/inc/fields/switch/field_switch.js'],
                    'ReduxCore/inc/fields/typography/field_typography.min.js': ['ReduxCore/inc/fields/typography/field_typography.js'],
                }
            },
            extensions: {
                files: [{
                        expand: true,
                        cwd: 'ReduxCore/extensions',
                        src: '**/*.js',
                        ext: '.min.js',
                        dest: 'ReduxCore/extensions'
                    }]
            },
            vendor: {
                files: {
                    'ReduxCore/assets/js/vendor.min.js': ['ReduxCore/assets/js/vendor.min.js']
                }
            },
        },
        qunit: {
            files: ['test/qunit/**/*.html']
        },
        jshint: {
            files: [
                 'ReduxCore/assets/js/color-picker/color-picker.js',
                 'ReduxCore/inc/fields/ace_editor/field_ace_editor.js',
                 'ReduxCore/inc/fields/background/field_background.js',
                 'ReduxCore/inc/fields/border/field_border.js',
                 'ReduxCore/inc/fields/button_set/field_button_Set.js',
                 'ReduxCore/inc/fields/color/field_color.js',
                 'ReduxCore/inc/fields/color_rgba/field_color_rgba.js',
                 'ReduxCore/inc/fields/date/field_date.js',
                 'ReduxCore/inc/fields/dimensions/field_dimensions.js',
                 'ReduxCore/inc/fields/editor/field_editor.js',
                 'ReduxCore/inc/fields/gallery/field_gallery.js',
                 'ReduxCore/inc/fields/image_select/field_image_select.js',
                 'ReduxCore/inc/fields/import_export/field_import_export.js',
                 'ReduxCore/inc/fields/media/field_media.js',
                 'ReduxCore/inc/fields/multi_text/field_multitext.js',
                 'ReduxCore/inc/fields/select/field_select.js',
                 'ReduxCore/inc/fields/select_image/field_select_image.js',
                 'ReduxCore/inc/fields/slider/field_slider.js',
                 'ReduxCore/inc/fields/slides/field_slides.js',
                 'ReduxCore/inc/fields/sortable/field_sortable.js',
                 'ReduxCore/inc/fields/sorter/field_sorter.js',
                 'ReduxCore/inc/fields/spacing/field_spacing.js',
                 'ReduxCore/inc/fields/spinner/field_spinner.js',
                 'ReduxCore/inc/fields/switch/field_switch.js',
                 'ReduxCore/inc/fields/typography/field_typography.js',
                 
//                'ReduxCore/inc/fields/**/*.js',
//                'ReduxCore/extensions/**/*.js',
                'ReduxCore/assets/js/redux.js'
            ],
            options: {
                expr: true,
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    redux_change: true,
                    module: true,
                    document: true,
                }
            }
        },
        watch: {
            ui: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            },
            php: {
                files: ['ReduxCore/**/*.php'],
                tasks: ['phplint:core']
            },
            css: {
                files: ['ReduxCore/**/*.less'],
                tasks: ['less:development']
            }
        },
        phpdocumentor: {
            options: {
                directory: 'ReduxCore/',
                target: 'docs/'
            },
            generate: {}
        },
        phplint: {
            options: {
                swapPath: "./"
            },
            core: ["ReduxCore/**/*.php"],
            plugin: ["class-redux-plugin.php", "index.php", "redux-framework.php"],
        },
        less: {
            development: {
                options: {
                    paths: 'ReduxCore/',
                },
                files: [{
                        expand: true, // Enable dynamic expansion.
                        cwd: 'ReduxCore/inc/fields', // Src matches are relative to this path.
                        src: ['**/*.less'], // Actual pattern(s) to match.
                        dest: 'ReduxCore/inc/fields', // Destination path prefix.
                        ext: '.css', // Dest filepaths will have this extension.
                    }]
            },
            extensions: {
                files: [{
                        expand: true, // Enable dynamic expansion.
                        cwd: 'ReduxCore/extensions/', // Src matches are relative to this path.
                        src: ['**/*.less'], // Actual pattern(s) to match.
                        dest: 'ReduxCore/extensions/', // Destination path prefix.
                        ext: '.css', // Dest filepaths will have this extension.
                    }]
            },
            production: {
                options: {
                    compress: true,
                    cleancss: true,
                    ieCompat: true,
                    relativeUrls: true,
                    paths: 'ReduxCore/',
                },
                files: {
                    "ReduxCore/assets/css/redux.css": ["ReduxCore/inc/fields/**/*.less", "ReduxCore/extensions/**/*.less", "ReduxCore/assets/css/admin.less"],
                    "ReduxCore/assets/css/admin.css": ["ReduxCore/assets/css/admin.less"],
                }
            },
            dist: {
                options: {
                    compress: true,
                    cleancss: true,
                    ieCompat: true,
                    relativeUrls: true,
                    report: 'gzip',
                    paths: 'ReduxCore/',
                },
                files: {
                    "ReduxCore/assets/css/redux.css": ["ReduxCore/inc/fields/**/*.less", "ReduxCore/extensions/**/*.less", "ReduxCore/assets/css/admin.less"],
                    "ReduxCore/assets/css/admin.css": ["ReduxCore/assets/css/admin.less"],
                }
            }
        },
        recess: {
            dist: {
                src: ['ReduxCore/assets/css/admin.less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-phpdocumentor');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks("grunt-phplint");
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-po2mo');
    grunt.loadNpmTasks('grunt-recess');

    grunt.registerTask('langUpdate', "Update languages", function() {
        shell.exec('tx pull -a --minimum-perc=25');
        shell.exec('grunt po2mo');
        shell.exec('rm -f ReduxCore/languages/*.po');
        shell.exec('php bin/makepot/gen.php');
    });

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'concat:core', 'uglify:core', 'concat:vendor', 'uglify:vendor', "less:production", "less:development", "less:extensions"]);
    grunt.registerTask('travis', ['jshint', 'lintPHP']);

    // this would be run by typing "grunt test" on the command line
    grunt.registerTask('testJS', ['jshint', 'concat:core', 'concat:vendor']);

    grunt.registerTask('watchUI', ['watch:ui']);
    grunt.registerTask('watchPHP', ['watch:php', 'phplint:core', 'phplint:plugin']);

    grunt.registerTask("lintPHP", ["phplint:plugin", "phplint:core"]);
    grunt.registerTask("lintLESS", ["recess:dist"]);
    grunt.registerTask("compileCSS", ["less:production", "less:development", "less:extensions"]);
    grunt.registerTask('compileJS', ['jshint', 'concat:core', 'uglify:core', 'concat:vendor', 'uglify:vendor']);
    grunt.registerTask('compileTestJS', ['jshint', 'concat:core', 'concat:vendor']);

};
