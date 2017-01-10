## Application Version Manager

Simple and flexible utility via pure JavaScript to work with client application cache. 

## Using

1. `cd version-manager`.
1. `node generator.js` file (or just execute `build.bat`).
2. Include **version-manager** directory into your project. `version-manager/main.js` should be the first.
4. Every time after new build version generated, all internal settings will reset and specified to new one.

## Project structure example

```
├── app/                        # main application directory
|  ├── utils                    # different utilities 
|  |  ├── version-manager/      # current version-manager utility
|  ├── src/                     # all functional application files are here
|  ├── media/                   # images, videos, *.gif files etc.
|  ├── styles/                  # *.scss, *.css files
|  ├── ...                      # other directories
├── dist/                       # build files
|  ├── css/
|  ├── js/
|  ├── images/
|  ├── views/
```

It's just an example for application structure.<br/>
In real project it may be implemented in different way, but a good approach is to have a utils directory, which contains some functional independent tools.