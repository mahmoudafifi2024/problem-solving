Given a list of integers , find the maximum and return it.

Step #1
Input : A list of integers
Output : A single integer that is the max
Edge Cases : Empty list or a list with one integer

Step #2
- assume that the first element is the maximum
- loop over all elements
- compare the second and beyond with the current max
- if an element is larger than max then max = element
- return max

Step #3
function max (list)
    max = list[0]
    for each element starting from the second element:
        if element > max :
            max = element
        return max