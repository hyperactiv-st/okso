const sopsDecode = require('sops-decoder');

require('@babel/register')

const keys = await sopsDecode.decodeFile('/.server.json')
const Typesense = require('typesense')

const typesense = new Typesense.Client({
  'nodes': [
    {
      'host': keys.url.split(':')[0],
      'port': keys.url.split(':')[1],
      'protocol': 'http'
    }
    // {
    //   'host': 'localhost',
    //   'port': '7108',
    //   'protocol': 'http'
    // },
    // {
    //   'host': 'localhost',
    //   'port': '9108',
    //   'protocol': 'http'
    // }
  ],
  // If this optional key is specified, requests are always sent to this node first if it is healthy
  // before falling back on the nodes mentioned in the `nodes` key. This is useful when running a distributed set of search clusters.
  // 'nearestNode': {
  //   'host': 'localhost',
  //   'port': '8108',
  //   'protocol': 'http'
  // },
  'numRetries': 10,
  'apiKey': keys.key,
  'connectionTimeoutSeconds': 10,
  'retryIntervalSeconds': 0.1,
  'healthcheckIntervalSeconds': 2,
  'logLevel': 'debug'
})


export async function search (query) {
    // Search for documents
    let searchResults = []
    searchResults = await typesense.collections('all').documents().search(query)
    console.log(searchResults)

  //   // Search for more documents
  //   searchResults = await typesense.collections('companies').documents().search({
  //     'q': 'Inc',
  //     'query_by': 'company_name',
  //     'filter_by': 'num_employees:<100',
  //     'sort_by': 'num_employees:desc'
  //   })
  //   console.log(searchResults)

  //   // Do multiple searches
  //   searchResults = await typesense.multiSearch.perform({
  //     'searches': [
  //       {
  //         'q': 'Inc'
  //       },
  //       {
  //         'q': 'Acme'
  //       }
  //     ]
  //   },
  //   {
  //     'query_by': 'company_name',
  //     'collection': 'companies'
  //   })
  //   console.log(searchResults)
  // } catch (error) {
  //   console.log(error)
  // } finally {
  //   // Cleanup
  //   typesense.collections('companies').delete()
  // }
}
