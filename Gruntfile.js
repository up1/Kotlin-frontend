module.exports = function (grunt) {

    grunt.initConfig({
        clean: 'dist/**',
        exec: {
            cmd: 'kotlinc-js src -output dist/hello.js'
        },
        copy: {
            files: {
                expand: true,
                flatten: true,
                src: ['src/**/*.html'],
                dest: 'dist'
            }
        },
        connect: {
          server: {
            options: {
              port: 3000,
              base: '.',
              keepalive: true
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['exec', 'copy']);
};
