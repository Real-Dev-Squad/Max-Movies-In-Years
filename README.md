This is my solution to the year with max movies problem , 

fundamentally this uses a sorting of the objects with priority to starting year and then ending year, and the finds all the occurences of the smallest common ground linearly, this takes one traversal through the list of objects

final performance :
 Time: O(nlog(n)) [n being the length of the list] (for sorting the list)
 Space : O(n) [n being the length of the list] 