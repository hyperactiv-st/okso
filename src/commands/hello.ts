import {Command, flags} from '@oclif/command'

export default class Search extends Command {
  static description = 'search one or more hyperactiv.st sources'

  static examples = [
    `$ okso search "generative coding" > results.json
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-q, --query=VALUE)
    query: flags.string({char: 'q', description: 'query to search'})
  }

  static args = [{query: 'string'}]

  async run() {
    const {args, flags} = this.parse(Search)

    const query = flags.query ?? 'type:TODO '
    this.log(`hello ${query} from ./src/commands/hello.ts`)
  }
}
