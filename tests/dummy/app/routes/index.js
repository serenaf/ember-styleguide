import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        let imageList = {
            id: 'listTitle',
            name: 'List with Images',
            items: [{
              text: 'Chris Nolan',
              src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg/220px-Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg'
            }, {  
              text: 'Hans Zimmer',
              src: 'data:image/jpeg;base64,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'
            }, {      
              text: 'Heath Ledger',
              src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg/220px-Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg'
            }]
          };

        let linkList = {
            id: 'listTitle',
            name: 'List with Link',
            items: [{
                text: 'Resource Link',
                route: '',
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg/220px-Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg'
            }, {
                text: 'Resource Link',
                route: '',
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg/220px-Christopher_Nolan%2C_London%2C_2013_%28crop%29.jpg'
            }]
        }

        let normalList = {
            id: 'listTitle',
            name: 'List with names',
            items: [{
                text: 'Resource Link'
            }, {
                text: 'Resource Link'
            }]
        }

        return {
            imageList,
            linkList,
            normalList
        };
    }
});
