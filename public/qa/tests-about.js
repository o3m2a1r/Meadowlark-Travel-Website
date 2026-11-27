suite('"About" page Tests', function(){
    test('page should contain a link to contact page', function(){
        assert($('a[href ="/cantact"]').length);
    });
});