var search = instantsearch({
  appId: 'RYG7374TP2',
  apiKey: '76fdb9eb562497d8f538d2504e6b37aa',
  indexName: 'codepen_sample',
  urlSync: true
});


  // var search = instantsearch..

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-box',
      placeholder: 'Search pen',
          poweredBy: true

    })
    );

  let hitTemplate = document.getElementById('hitTemplate').innerHTML;
  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits-container',
      templates: {
        item: hitTemplate
      },
      hitsPerPage: 6
    })
    );

 
search.addWidget(
  instantsearch.widgets.stats({
    container: '#stats-container'
  })
);
search.addWidget(
  instantsearch.widgets.numericSelector({
    container: '#popularity-selector',
    attributeName: 'loves',
    operator: '>=',

    options: [
      {label: '1000 likes minimum', value: 1000},
      {label: '500 likes minimum', value: 500},
      {label: '100 likes minimum', value: 100},
      {label: '50 likes minimum', value: 50},
      {label: '30 likes minimum', value: 30},
      {label: '20 likes minimum', value: 20},
      {label: '10 likes minimum', value: 10},
      {label: 'all', value: 0}
    ]
  })
);

search.addWidget(
  instantsearch.widgets.sortBySelector({
    container: '#sort-by-container',
    indices: [
      {name: 'codepen_sample', label: 'Most relevant'},
      {name: 'codepen_sample_comments', label: 'More commented'},
      {name: 'codepen_sample_views', label: 'More views'}
    ]
  })
);

  search.addWidget(
    instantsearch.widgets.pagination({
      container: '#pagination-container',
      cssClasses:{
        item: 'button'
      } 
    })
  );

  var searchRender = {
  // Called every time there is new data
  render: function(options) {
    // see "All options" for more details on the API
  }
};



search.addWidget(searchRender);

search.start();

