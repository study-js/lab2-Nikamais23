for (var i=0; i<21; ++i) {

    var isprime =true;

    for(var j=2; j<=Math.round(i/2); ++j) {

if (i % j ==0) {

    isprime=false;
}
    }
    if (isprime) {

    document.write(i + "<br>");
    }

    }
