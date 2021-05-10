okso
====

OK, so

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/okso.svg)](https://npmjs.org/package/okso)
[![Codecov](https://codecov.io/gh/hyperactiv.st/okso/branch/master/graph/badge.svg)](https://codecov.io/gh/hyperactiv.st/okso)
[![Downloads/week](https://img.shields.io/npm/dw/okso.svg)](https://npmjs.org/package/okso)
[![License](https://img.shields.io/npm/l/okso.svg)](https://github.com/hyperactiv.st/okso/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g okso
$ okso COMMAND
running command...
$ okso (-v|--version|version)
okso/0.0.0 linux-x64 node-v14.16.1
$ okso --help [COMMAND]
USAGE
  $ okso COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`okso hello [FILE]`](#okso-hello-file)
* [`okso help [COMMAND]`](#okso-help-command)

## `okso hello [FILE]`

describe the command here

```
USAGE
  $ okso hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ okso hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/hyperactiv.st/okso/blob/v0.0.0/src/commands/hello.ts)_

## `okso help [COMMAND]`

display help for okso

```
USAGE
  $ okso help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
