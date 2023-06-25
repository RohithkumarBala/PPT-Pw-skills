# First Unique Character in a String
# Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.


def firstuniquechar(s):
    hashmap={} #hashmap or empty dictionary to store coutn of each char in a string
    for c in s:
        if c in hashmap:
            hashmap[c]+=1
        else:
            hashmap[c]=1

    for i,char in enumerate(s):
        if hashmap[char]==1:
            return i
        
    return "-1"
s=input()
print(firstuniquechar(s))
