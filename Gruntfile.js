module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        watch: {
            options: {
                livereload: false
            },

            set_scss: {
                files: [
                    "scss/styles.scss",
                ],
                tasks: ["sass"]
            },
        },

        sass: {
            dist: {
                options: {
                    style: "expanded"
                },
                files: {
                    "css/styles.css": "scss/styles.scss"
                }
            }
        },

        bower: {
            install: {
                options: {
                    targetDir: "./lib",
                    layout: "byType",
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("watch_scss", ["watch:set_scss"]);
};
