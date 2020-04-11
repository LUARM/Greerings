


function greet(name){
    if (name == null)
    {
    return "Hello, my friend."
    }
    for( x in name)
    {
        var commas = false
        if (name[x].includes(",") == true)
        {   
            commas = true
        } 
        if (name[x].includes('\"') == true)
        { 
            return CSV(name)    
        } 
            
    }
    if (commas == true){
       return Commas(name)
    }
    if (name == name.toString().toUpperCase())
    {
    return `HELLO, ${name}!`
    }
    if (name.length == 2){
    return `Hello,${name[0]} and ${name[1]}.`
    }
    if (name.length >= 3 && Array.isArray(name) == true){
        return three_or_more(name)
    }
    return `Hello, ${name}.`;
}

function three_or_more(name){
    {   
        var mixed = false;
        for( x in name)
        {
            if (name[x] == name[x].toString().toUpperCase())
            {
               var mixed = true;
            }
        }
        if (mixed  == true)
        {
            return Mixed(name)
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
    }

function Commas(name)
{
    var nameArr = name[x].split(',');
    var splited = `${nameArr[0]}, and${nameArr[1]}.`
    if (name[0].includes(",") == false)
    {   
    var nocomma = `Hello, ${name[0]}, `
    }  
    var commaandno = nocomma.concat(splited)
    return commaandno 
}

function CSVnew(name){
    var newstring = name[x].replace('\"', '');
    var newstring = newstring.replace('\"', '');
    var nocsv = `Hello, ${name[0]} and ` 
    var endperiod = '.'
    var csvno = nocsv.concat(newstring)
    var csvno1 = csvno.concat(endperiod)
    return csvno1
}

function Mixed(name){
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

module.exports = greet;


