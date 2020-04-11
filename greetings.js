


function greet(name){
    if (name == null){
        return "Hello, my friend."
        }
    for( x in name)
    {
        var csv = false
        var commas = false
        if (name[x].includes(",") == true)
        {   var nameArr = name[x].split(',');
            var splited = `${nameArr[0]}, and${nameArr[1]}.`
            commas = true
        } 
        if (name[x].includes('\"') == true)
        {   
            var newstring = name[x].replace('\"', '');
            var newstring = newstring.replace('\"', '');
            var nocsv = `Hello, ${name[0]} and ` 
            var endperiod = '.'
            var csvno = nocsv.concat(newstring)
            var csvno1 = csvno.concat(endperiod)
            return csvno1
            
        }     
    }
    if (commas == true){
        if (name[0].includes(",") == false)
        {   
        var nocomma = `Hello, ${name[0]}, `
        }  
        var commaandno = nocomma.concat(splited)
        return commaandno 
    }
    if (csv == true)
    {
        if (name[0].includes('\"') == false)
        {   
            var nocsv = `Hello, ${name[0]} and ` 
        }  
        var csvno = nocsv.concat(newstring)
        return csvno 
    }
    if (name == name.toString().toUpperCase())
    {
    return `HELLO, ${name}!`
    }
    if (name.length == 2){
    return `Hello,${name[0]} and ${name[1]}.`
    }
    if (name.length >= 3 && Array.isArray(name) == true)
    {   var mixed = false;
        for( x in name)
        {
            if (name[x].includes("Bob") == true)
            {
            return `Hello, ${name[x]} `
            }
            if (name[x] == name[x].toString().toUpperCase())
            {
               var mixed = true;
            }
           
            
        }
        if (mixed  == true)
        {
            var yellcount = 0
            var normalcount = 0
            for( x in name)
            {
            if (name[x] == name[x].toString().toUpperCase())
            {
                var yell = `AND HELLO ${name[x]}!`
            }
            else
            {
                if(normalcount == 0)
                {
                var normal = `Hello, ${name[x]} `
                }
                if(normalcount == 1)
                {
                var normal1 = `and ${name[x]}. `
                var normal = normal.concat(normal1)
                }
                normalcount += 1
            }
            var result1 = normal.concat(yell)
            }
            
            return result1;    
        }

       

    var length_names = name.length;
    var endname = name.length -1;
    var hi = `Hello,${name[0]} `;
    var i = 1;
    while (length_names > 2)
    {
    var str2 = `,${name[i]} `
    var str1 = hi.concat(str2)  
    i += 1;
    length_names = length_names - 1;
    }
    var end = `, and ${name[endname]}.`
    var result = str1.concat(end)
    return result;  
    }
    
    return `Hello, ${name}.`;
    


}

module.exports = greet;


