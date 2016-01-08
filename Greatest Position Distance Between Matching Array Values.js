//Greatest Position Distance Between Matching Array Values
//Level:6kyu
/*
Problem Description: The goal of this Kata is to return the greatest distance of index positions between matching 
number values in an array or 0 if there are no matching values.

Example: In an array with the values [0, 2, 1, 2, 4, 1] the greatest index distance is between the matching '1' 
values at index 2 and 5. Executing greatestDistance against this array would return 3. (i.e. 5 - 2)

Here's the previous example in test form:

Test.assertEquals(greatestDistance([0, 2, 1, 2, 4, 1]), 3);
This is based on a Kata I had completed only to realize I has misread the instructions. I enjoyed solving the 
problem I thought it was asking me to complete so I thought I'd add a new Kata for others to enjoy. There are no 
tricks in this one, good luck!
*/

var greatestDistance = function(data) {
    var i=0;
    var dist=0;
    while(i<data.length)
    {
        var j=i+1;
        while(j<data.length)
        {
            if(data[j]===data[i])
            {
                if(j-i>dist)
                {
                    dist=j-i;
                }
            }
            j++;
        }
        i++;
    }
    return dist;
};