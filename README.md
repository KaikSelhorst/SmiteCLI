# Smite Build CLI

SmiteCLI is a command line interface for Smite, which is an online arena game. SmiteCLI allows users to search for the best in-game god builds, quickly and easily displaying the recommended builds for all gods in Smite. SmiteCLI helps make building your team easier, saving time and effort along the way. SmiteCLI can help even the most novice players find the perfect god builds.

### Install

```bash
# Clone the repository and then navigate to it.
git clone https://github.com/KaikSelhorst/SmiteCLI.git

# Enter in SmiteCLI folder

$ npm install           # to install the dependencies.
$ npm install -g        # to install the CLI
```
### Basic usage


```bash
smite <god-name>
```

#### Linux

```bash
# ⚠️ This might cause an error which can be resolved easily by
# using sudo with the command, however, using sudo with npm is
# not recommended because it might cause permission issues later.
# So instead put the code below in your .bashrc file and then run the
# above command again.

$ npm set prefix ~/.npm
$ PATH="$HOME/.npm/bin:$PATH"
$ PATH="./node_modules/.bin:$PATH"

# Now you are good to go and can use the CLI globally!
```

### --help

```bash
# Search build for smite god
$ smite <god-name>  # God's name should always be written
                    # like this: Xing Tian => Xing-Tian

# list all gods in smite
$ smite -b      # or smite --base

# returns a screenshot of the build
$ smite <godname> -s      # or smite <godname> --screenshot

#list all commands in Smite CLI
$ smite --help
```

### Tech Stack

- [Chalk](https://www.npmjs.com/package/chalk) - Terminal string styling done right.
- [Puppeteer](https://www.npmjs.com/package/puppeteer) - Headless Chrome Node.js API.
- [Yargs](https://www.npmjs.com/package/yargs) - Yargs the modern, pirate-themed successor to optimist.

#### Where information is being withdrawn

Build information was taken from the SmiteSource website

Case wanted to see the builds that appear in the CLI [click here](https://smitesource.com/).

### License

Selhorst © 2023 // Some reserved rights.

### Contact

Contact by my social networks that are in my [README](https://github.com/KaikSelhorst)

<a href='https://github.com/KaikSelhorst' target='_blank'>
  <img src='https://avatars.githubusercontent.com/u/82120356?v=4'  width=80 alt='Kaik Selhorst Picture (Fox)' title='Kaik Selhorst'/>
</a>
