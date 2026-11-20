Suite('Global Tests', function(){
    Test('page ha a valid title', function(){
        assert(document.title && document.title.match(/\S/) &&
        document.title.toUpperCase() !== 'TODO');
    });
});