# Smite Build CLI

Smite CLI is a command-line interface made for searching for builds for the gods of smite.

### Prerequisites

- **Node.js**

```bash
# Clone the repository and then navigate to it.

# Runs the commands on your terminal

$ npm install           # to install the dependencies.

$ npm install -g        # to install the CLI
```

#### Windows

```bash
# run this command
$ smite <god-name>

# compound names are written like
# this Xing-Tian
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

Some commands to help you!

```bash

# list all gods in smite
$ smite -b      # or smite --base

#list all commands in Smite CLI
$ smite --help
```

#### Where information is being withdrawn

Build information was taken from the SmiteSource website

Case wanted to see the builds that appear in the CLI [click here](https://smitesource.com/).

### License

Koorst © 2021 - 22 // Some reserved rights.

### Contact

Contact by my social networks that are in my [README](https://github.com/KaikSelhorst)

<a href='https://github.com/KaikSelhorst' target='_blank'>
  <img src='https://avatars.githubusercontent.com/u/82120356?v=4'  width=80 alt='Kaik Selhorst Picture (Fox)' title='Kaik Selhorst'/>
</a>
